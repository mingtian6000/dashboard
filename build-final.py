#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""=====================================================================
build-final.py
----------------------------------------------------------------------
Merges the job-generated data.js into the board.html template and
produces a SINGLE self-contained HTML file that can be copied into a
Confluence page (no external data.js file next to the page needed).

Outputs:
  dashboard-final.html        full document  (open locally to preview)
  dashboard-confluence.html   <style> + <body> fragment (paste into the
                              Confluence "HTML" macro)

Usage (re-run after the job updates data.js):
  python build-final.py
====================================================================="""
import os
import sys
import urllib.request

DIR         = os.path.dirname(os.path.abspath(__file__))
TEMPLATE    = os.path.join(DIR, "board.html")
DATA_SRC    = os.path.join(DIR, "data.js")
OUT_FULL    = os.path.join(DIR, "dashboard-final.html")
OUT_FRAG    = os.path.join(DIR, "dashboard-confluence.html")
CHART_CACHE = os.path.join(DIR, "chart.umd.min.js")
CHART_CDN   = "https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js"

DATA_TAG  = '<script src="data.js"></script>'
CHART_TAG = '<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>'


def read(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def write(path, text):
    with open(path, "w", encoding="utf-8") as f:
        f.write(text)


def download(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=90) as r:
        return r.read().decode("utf-8")


def safe_inline(content):
    # Never let the literal "</script" appear inside an inline <script>
    return content.replace("</script", "<\\/script")


def inline_chart(html):
    chart = None
    if os.path.exists(CHART_CACHE):
        chart = read(CHART_CACHE)
        print("Chart.js: using cached copy")
    else:
        try:
            chart = download(CHART_CDN)
            write(CHART_CACHE, chart)
            print("Chart.js: downloaded %.0f KB and cached" % (len(chart) / 1024))
        except Exception as exc:
            print("Chart.js download FAILED, leaving CDN <script> in output:", exc)
            return html
    if CHART_TAG not in html:
        raise RuntimeError("Chart.js tag not found in template")
    return html.replace(CHART_TAG, "<script>\n" + safe_inline(chart) + "\n</script>")


def main():
    for p in (TEMPLATE, DATA_SRC):
        if not os.path.exists(p):
            print("Missing %s" % p)
            sys.exit(1)

    html = read(TEMPLATE)
    data = read(DATA_SRC)

    # 1) inline the job data in place of the external data.js loader
    if DATA_TAG not in html:
        raise RuntimeError("data.js loader tag not found in template")
    html = html.replace(DATA_TAG, "<script>\n" + safe_inline(data) + "\n</script>")

    # 2) inline Chart.js so the result does not depend on the CDN
    html = inline_chart(html)

    # 3a) full document
    write(OUT_FULL, html)
    print("WROTE %s (%d KB)" % (OUT_FULL, len(html) // 1024))

    # 3b) Confluence-friendly fragment: <style> + <body> content only
    s = html.find("<style>")
    se = html.find("</style>")
    bs = html.find("<body>")
    be = html.find("</body>")
    if -1 in (s, se, bs, be):
        print("Could not locate <style>/<body>, skipping fragment output.")
        return
    style = html[s:se + len("</style>")]
    body = html[bs + len("<body>"):be].strip()
    write(OUT_FRAG, style + "\n" + body + "\n")
    print("WROTE %s (paste this into the Confluence HTML macro)" % OUT_FRAG)


if __name__ == "__main__":
    main()
