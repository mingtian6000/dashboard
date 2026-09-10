/* =====================================================================
   DASHBOARD DATA  —  EDIT THIS FILE ONLY.
   ---------------------------------------------------------------------
   Hierarchy:  Project -> Market -> App -> Environment
   {
     "F24": { "markets": {
         "EU": {
           "apps": { "Infra": { "prod": {"total": N}, "pre": {...}, "nonprod": {...} }, ... },
           "rwi":  { "Infra": { "prod": [ {id,component,title,assignee,updated,target,status} ], ... } }
         }, ...
     } },
     ...
   }

   - "done" is NOT stored. board.html counts RWI rows with status "Done"
     for each project/market/app/env. The apps section keeps only the
     FIXED total per environment: { "total": N }.
   - Each RWI row should include "updated": "YYYY-MM-DD" (last status
     change). Keep rolling ~90 days of rows; the Last 30/60/90 tabs
     filter client-side by "updated".
   - Sample below is dummy/placeholder: per-market app keys follow the
     project map (F24=Infra/Helm/CM, C48=Infra/Helm/DAG/DB, DDS=Infra).
   ===================================================================== */
window.DASHBOARD_DATA = {
  "F24": {
    "markets": {
      "EU": {
        "apps": {
          "Infra": { "prod": { "total": 10 }, "pre": { "total": 10 }, "nonprod": { "total": 10 } },
          "Helm":  { "prod": { "total": 8 },  "pre": { "total": 8 },  "nonprod": { "total": 8 } },
          "CM":    { "prod": { "total": 5 },  "pre": { "total": 5 },  "nonprod": { "total": 5 } }
        },
        "rwi": {
          "Infra": {
            "prod": [
              { "id": "EU-101", "component": "Gateway",          "title": "API v2 rollout",            "assignee": "M. Chen",  "updated": "2026-08-24", "target": "2026-08-20", "status": "Done" },
              { "id": "EU-102", "component": "IAM",              "title": "SSO migration",             "assignee": "L. Wang",  "updated": "2026-08-19", "target": "2026-08-29", "status": "WIP"  },
              { "id": "EU-103", "component": "Secrets",          "title": "Rotation automation",       "assignee": "P. Patel", "updated": "2026-07-05", "target": "2026-09-06", "status": "Open" },
              { "id": "EU-104", "component": "VPC",              "title": "Cross-AZ peering",          "assignee": "A. Singh", "updated": "2026-08-10", "target": "2026-08-09", "status": "Done" },
              { "id": "EU-105", "component": "Monitoring",       "title": "Dashboard provisioning",    "assignee": "K. Lee",   "updated": "2026-08-25", "target": "2026-08-30", "status": "WIP"  },
              { "id": "EU-106", "component": "DNS",              "title": "Split-horizon cleanup",     "assignee": "R. Kumar", "updated": "2026-06-18", "target": "2026-09-12", "status": "Open" },
              { "id": "EU-107", "component": "Proxy",            "title": "Header sanitization",       "assignee": "T. Nguyen", "updated": "2026-07-22", "target": "2026-09-18", "status": "Open" },
              { "id": "EU-108", "component": "Observability",    "title": "Trace sampling",            "assignee": "K. Lee",   "updated": "2026-08-16", "target": "2026-08-27", "status": "WIP"  },
              { "id": "EU-109", "component": "Gateway",          "title": "WAF ruleset",               "assignee": "M. Chen",  "updated": "2026-07-28", "target": "2026-07-26", "status": "Done" },
              { "id": "EU-110", "component": "IAM",              "title": "Access reviews",            "assignee": "L. Wang",  "updated": "2026-06-12", "target": "2026-09-25", "status": "Open" }
            ],
            "pre": [
              { "id": "EU-111", "component": "Monitoring",       "title": "Alert routing",             "assignee": "K. Lee",   "updated": "2026-08-23", "target": "2026-09-01", "status": "WIP"  }
            ],
            "nonprod": [
              { "id": "EU-112", "component": "Secrets",          "title": "CI secret injection",       "assignee": "P. Patel", "updated": "2026-08-05", "target": "2026-09-08", "status": "Open" }
            ]
          },
          "Helm": {
            "prod": [
              { "id": "EU-201", "component": "Chart Repo",       "title": "Chart repo sync",           "assignee": "J. Doe",   "updated": "2026-08-15", "target": "2026-08-16", "status": "Done" }
            ],
            "pre": [],
            "nonprod": [
              { "id": "EU-202", "component": "Values Template",  "title": "Values schema v2",          "assignee": "S. Park",  "updated": "2026-08-21", "target": "2026-08-28", "status": "WIP"  }
            ]
          },
          "CM": {
            "prod": [
              { "id": "EU-301", "component": "Docs Site",        "title": "Docs publishing",           "assignee": "E. Davis", "updated": "2026-08-12", "target": "2026-08-14", "status": "Done" }
            ],
            "pre": [],
            "nonprod": [
              { "id": "EU-302", "component": "CM Build",         "title": "Release notes automation",  "assignee": "E. Davis", "updated": "2026-08-26", "target": "2026-09-05", "status": "WIP"  }
            ]
          }
        }
      },
      "AMH": {
        "apps": {
          "Infra": { "prod": { "total": 10 }, "pre": { "total": 10 }, "nonprod": { "total": 10 } },
          "Helm":  { "prod": { "total": 8 },  "pre": { "total": 8 },  "nonprod": { "total": 8 } },
          "CM":    { "prod": { "total": 5 },  "pre": { "total": 5 },  "nonprod": { "total": 5 } }
        },
        "rwi": {
          "Infra": {
            "prod": [
              { "id": "AMH-101", "component": "Gateway",         "title": "TLS 1.3 enforcement",       "assignee": "M. Chen",  "updated": "2026-08-22", "target": "2026-08-24", "status": "Done" },
              { "id": "AMH-102", "component": "IAM",             "title": "Role rotation",             "assignee": "L. Wang",  "updated": "2026-08-18", "target": "2026-08-28", "status": "WIP"  },
              { "id": "AMH-103", "component": "VPC",             "title": "Flow logs enablement",      "assignee": "R. Kumar", "updated": "2026-07-10", "target": "2026-09-10", "status": "Open" }
            ],
            "pre": [],
            "nonprod": []
          },
          "Helm": {
            "prod": [
              { "id": "AMH-201", "component": "Release Pipeline", "title": "Chart bump",               "assignee": "S. Park",  "updated": "2026-08-19", "target": "2026-08-26", "status": "WIP"  }
            ],
            "pre": [],
            "nonprod": []
          },
          "CM": {
            "prod": [
              { "id": "AMH-301", "component": "Docs Site",       "title": "Runbook updates",           "assignee": "E. Davis", "updated": "2026-08-08", "target": "2026-09-02", "status": "Open" }
            ],
            "pre": [],
            "nonprod": []
          }
        }
      },
      "HASE": {
        "apps": {
          "Infra": { "prod": { "total": 10 }, "pre": { "total": 10 }, "nonprod": { "total": 10 } },
          "Helm":  { "prod": { "total": 8 },  "pre": { "total": 8 },  "nonprod": { "total": 8 } },
          "CM":    { "prod": { "total": 5 },  "pre": { "total": 5 },  "nonprod": { "total": 5 } }
        },
        "rwi": {
          "Infra": {
            "prod": [
              { "id": "HASE-101", "component": "Secrets",        "title": "Vault onboarding",          "assignee": "P. Patel", "updated": "2026-08-28", "target": "2026-08-29", "status": "Done" },
              { "id": "HASE-102", "component": "Monitoring",      "title": "SLO dashboards",            "assignee": "K. Lee",   "updated": "2026-08-20", "target": "2026-08-31", "status": "WIP"  },
              { "id": "HASE-103", "component": "Proxy",           "title": "WAF hardening",             "assignee": "T. Nguyen", "updated": "2026-06-20", "target": "2026-09-15", "status": "Open" }
            ],
            "pre": [],
            "nonprod": []
          },
          "Helm": {
            "prod": [
              { "id": "HASE-201", "component": "Chart Repo",      "title": "Release cut",               "assignee": "J. Doe",   "updated": "2026-08-15", "target": "2026-08-17", "status": "Done" }
            ],
            "pre": [],
            "nonprod": []
          },
          "CM": {
            "prod": [
              { "id": "HASE-301", "component": "CM Build",        "title": "Docs refresh",              "assignee": "E. Davis", "updated": "2026-08-21", "target": "2026-09-06", "status": "WIP"  }
            ],
            "pre": [],
            "nonprod": []
          }
        }
      },
      "APST": {
        "apps": {
          "Infra": { "prod": { "total": 10 }, "pre": { "total": 10 }, "nonprod": { "total": 10 } },
          "Helm":  { "prod": { "total": 8 },  "pre": { "total": 8 },  "nonprod": { "total": 8 } },
          "CM":    { "prod": { "total": 5 },  "pre": { "total": 5 },  "nonprod": { "total": 5 } }
        },
        "rwi": {
          "Infra": {
            "prod": [
              { "id": "APST-101", "component": "Gateway",         "title": "JWT validation",            "assignee": "M. Chen",  "updated": "2026-08-18", "target": "2026-08-21", "status": "Done" },
              { "id": "APST-102", "component": "IAM",             "title": "Policy cleanup",            "assignee": "L. Wang",  "updated": "2026-07-15", "target": "2026-09-03", "status": "Open" },
              { "id": "APST-103", "component": "DNS",             "title": "Resolver tuning",           "assignee": "R. Kumar", "updated": "2026-08-26", "target": "2026-09-05", "status": "WIP"  }
            ],
            "pre": [],
            "nonprod": []
          },
          "Helm": {
            "prod": [
              { "id": "APST-201", "component": "Chart Repo",      "title": "Lint + schema",             "assignee": "J. Doe",   "updated": "2026-08-22", "target": "2026-08-27", "status": "WIP"  }
            ],
            "pre": [],
            "nonprod": []
          },
          "CM": {
            "prod": [
              { "id": "APST-301", "component": "Docs Site",       "title": "Release notes",             "assignee": "E. Davis", "updated": "2026-08-11", "target": "2026-09-04", "status": "Open" }
            ],
            "pre": [],
            "nonprod": []
          }
        }
      },
      "MX": {
        "apps": {
          "Infra": { "prod": { "total": 10 }, "pre": { "total": 10 }, "nonprod": { "total": 10 } },
          "Helm":  { "prod": { "total": 8 },  "pre": { "total": 8 },  "nonprod": { "total": 8 } },
          "CM":    { "prod": { "total": 5 },  "pre": { "total": 5 },  "nonprod": { "total": 5 } }
        },
        "rwi": {
          "Infra": {
            "prod": [
              { "id": "MX-101", "component": "Service Mesh",      "title": "mTLS rollout",              "assignee": "L. Wang",  "updated": "2026-08-12", "target": "2026-08-15", "status": "Done" },
              { "id": "MX-102", "component": "Observability",     "title": "Metrics pipeline",          "assignee": "K. Lee",   "updated": "2026-07-08", "target": "2026-09-09", "status": "Open" }
            ],
            "pre": [],
            "nonprod": []
          },
          "Helm": {
            "prod": [
              { "id": "MX-201", "component": "Values Template",   "title": "Env values v3",             "assignee": "S. Park",  "updated": "2026-08-05", "target": "2026-08-08", "status": "Done" }
            ],
            "pre": [],
            "nonprod": []
          },
          "CM": {
            "prod": [
              { "id": "MX-301", "component": "Docs Site",         "title": "Site refresh",              "assignee": "E. Davis", "updated": "2026-08-17", "target": "2026-09-07", "status": "Open" }
            ],
            "pre": [],
            "nonprod": []
          }
        }
      },
      "US": {
        "apps": {
          "Infra": { "prod": { "total": 10 }, "pre": { "total": 10 }, "nonprod": { "total": 10 } },
          "Helm":  { "prod": { "total": 8 },  "pre": { "total": 8 },  "nonprod": { "total": 8 } },
          "CM":    { "prod": { "total": 5 },  "pre": { "total": 5 },  "nonprod": { "total": 5 } }
        },
        "rwi": {
          "Infra": {
            "prod": [
              { "id": "US-101", "component": "Gateway",           "title": "SSO federation",            "assignee": "M. Chen",  "updated": "2026-08-29", "target": "2026-09-01", "status": "WIP"  },
              { "id": "US-102", "component": "Secrets",           "title": "Rotation runbook",          "assignee": "P. Patel", "updated": "2026-08-21", "target": "2026-08-23", "status": "Done" },
              { "id": "US-103", "component": "Rate Limiter",      "title": "Quota policies",            "assignee": "A. Singh", "updated": "2026-06-28", "target": "2026-09-16", "status": "Open" },
              { "id": "US-104", "component": "Monitoring",        "title": "Alerting coverage",         "assignee": "K. Lee",   "updated": "2026-07-25", "target": "2026-09-11", "status": "Open" }
            ],
            "pre": [],
            "nonprod": []
          },
          "Helm": {
            "prod": [
              { "id": "US-201", "component": "Release Pipeline",  "title": "Repo sync automation",      "assignee": "S. Park",  "updated": "2026-08-14", "target": "2026-08-25", "status": "WIP"  }
            ],
            "pre": [],
            "nonprod": []
          },
          "CM": {
            "prod": [
              { "id": "US-301", "component": "CM Build",          "title": "Release notes publish",     "assignee": "E. Davis", "updated": "2026-08-09", "target": "2026-08-11", "status": "Done" }
            ],
            "pre": [],
            "nonprod": []
          }
        }
      },
      "INDIA": {
        "apps": {
          "Infra": { "prod": { "total": 10 }, "pre": { "total": 10 }, "nonprod": { "total": 10 } },
          "Helm":  { "prod": { "total": 8 },  "pre": { "total": 8 },  "nonprod": { "total": 8 } },
          "CM":    { "prod": { "total": 5 },  "pre": { "total": 5 },  "nonprod": { "total": 5 } }
        },
        "rwi": {
          "Infra": {
            "prod": [
              { "id": "IND-101", "component": "Gateway",          "title": "Canary rollout",            "assignee": "M. Chen",  "updated": "2026-08-23", "target": "2026-08-30", "status": "WIP"  },
              { "id": "IND-102", "component": "IAM",              "title": "MFA enforcement",           "assignee": "L. Wang",  "updated": "2026-08-11", "target": "2026-08-13", "status": "Done" },
              { "id": "IND-103", "component": "VPC",              "title": "Peering audit",             "assignee": "R. Kumar", "updated": "2026-07-02", "target": "2026-09-13", "status": "Open" }
            ],
            "pre": [],
            "nonprod": []
          },
          "Helm": {
            "prod": [
              { "id": "IND-201", "component": "Chart Repo",       "title": "Promotion pipeline",        "assignee": "J. Doe",   "updated": "2026-08-07", "target": "2026-08-10", "status": "Done" }
            ],
            "pre": [],
            "nonprod": []
          },
          "CM": {
            "prod": [
              { "id": "IND-301", "component": "Docs Site",        "title": "Localization docs",         "assignee": "E. Davis", "updated": "2026-08-20", "target": "2026-09-06", "status": "WIP"  }
            ],
            "pre": [],
            "nonprod": []
          }
        }
      }
    }
  },
  "C48": {
    "markets": {
      "UK": {
        "apps": {
          "Infra": { "prod": { "total": 5 }, "pre": { "total": 5 }, "nonprod": { "total": 5 } },
          "Helm":  { "prod": { "total": 4 }, "pre": { "total": 4 }, "nonprod": { "total": 4 } },
          "DAG":   { "prod": { "total": 4 }, "pre": { "total": 4 }, "nonprod": { "total": 4 } },
          "DB":    { "prod": { "total": 3 }, "pre": { "total": 3 }, "nonprod": { "total": 3 } }
        },
        "rwi": {
          "Infra": {
            "prod": [
              { "id": "UK-401", "component": "Load Balancer",     "title": "TLS 1.3",                   "assignee": "M. Chen",  "updated": "2026-08-20", "target": "2026-08-22", "status": "Done" },
              { "id": "UK-402", "component": "VPC Peering",       "title": "Cross-region peering",      "assignee": "A. Singh", "updated": "2026-08-24", "target": "2026-09-02", "status": "WIP"  }
            ],
            "pre": [],
            "nonprod": []
          },
          "Helm": {
            "prod": [
              { "id": "UK-501", "component": "Chart Repo",        "title": "v2.4 release",              "assignee": "J. Doe",   "updated": "2026-08-12", "target": "2026-08-15", "status": "Done" }
            ],
            "pre": [],
            "nonprod": []
          },
          "DAG": {
            "prod": [
              { "id": "UK-601", "component": "Support Tools",     "title": "Runbook automation",        "assignee": "E. Davis", "updated": "2026-08-19", "target": "2026-08-26", "status": "WIP"  }
            ],
            "pre": [],
            "nonprod": []
          },
          "DB": {
            "prod": [
              { "id": "UK-701", "component": "Postgres",          "title": "Failover automation",       "assignee": "T. Nguyen", "updated": "2026-08-22", "target": "2026-08-25", "status": "Done" },
              { "id": "UK-702", "component": "Cache",             "title": "Eviction tuning",           "assignee": "P. Patel", "updated": "2026-07-18", "target": "2026-09-01", "status": "Open" }
            ],
            "pre": [],
            "nonprod": []
          }
        }
      },
      "HASE": {
        "apps": {
          "Infra": { "prod": { "total": 5 }, "pre": { "total": 5 }, "nonprod": { "total": 5 } },
          "Helm":  { "prod": { "total": 4 }, "pre": { "total": 4 }, "nonprod": { "total": 4 } },
          "DAG":   { "prod": { "total": 4 }, "pre": { "total": 4 }, "nonprod": { "total": 4 } },
          "DB":    { "prod": { "total": 3 }, "pre": { "total": 3 }, "nonprod": { "total": 3 } }
        },
        "rwi": {
          "Infra": {
            "prod": [
              { "id": "HASEC-401", "component": "Monitoring",      "title": "Health dashboards",         "assignee": "K. Lee",   "updated": "2026-08-17", "target": "2026-08-19", "status": "Done" },
              { "id": "HASEC-402", "component": "IAM",             "title": "Role rotation",             "assignee": "L. Wang",  "updated": "2026-07-12", "target": "2026-09-04", "status": "Open" }
            ],
            "pre": [],
            "nonprod": []
          },
          "Helm": {
            "prod": [
              { "id": "HASEC-501", "component": "Release Pipeline","title": "Blue/green deploy",        "assignee": "S. Park",  "updated": "2026-08-16", "target": "2026-08-28", "status": "WIP"  }
            ],
            "pre": [],
            "nonprod": []
          },
          "DAG": {
            "prod": [
              { "id": "HASEC-601", "component": "Orchestrator",    "title": "Schedule tuning",          "assignee": "E. Davis", "updated": "2026-08-05", "target": "2026-08-07", "status": "Done" }
            ],
            "pre": [],
            "nonprod": []
          },
          "DB": {
            "prod": [
              { "id": "HASEC-701", "component": "ETL Jobs",        "title": "Load balancing",           "assignee": "T. Nguyen", "updated": "2026-07-29", "target": "2026-09-05", "status": "Open" }
            ],
            "pre": [],
            "nonprod": []
          }
        }
      },
      "MYH": {
        "apps": {
          "Infra": { "prod": { "total": 5 }, "pre": { "total": 5 }, "nonprod": { "total": 5 } },
          "Helm":  { "prod": { "total": 4 }, "pre": { "total": 4 }, "nonprod": { "total": 4 } },
          "DAG":   { "prod": { "total": 4 }, "pre": { "total": 4 }, "nonprod": { "total": 4 } },
          "DB":    { "prod": { "total": 3 }, "pre": { "total": 3 }, "nonprod": { "total": 3 } }
        },
        "rwi": {
          "Infra": {
            "prod": [
              { "id": "MYH-401", "component": "Load Balancer",     "title": "Health check tuning",      "assignee": "M. Chen",  "updated": "2026-08-14", "target": "2026-08-16", "status": "Done" },
              { "id": "MYH-402", "component": "Secrets",           "title": "Rotation enable",          "assignee": "P. Patel", "updated": "2026-08-21", "target": "2026-08-30", "status": "WIP"  }
            ],
            "pre": [],
            "nonprod": []
          },
          "Helm": {
            "prod": [
              { "id": "MYH-501", "component": "Values Template",   "title": "Env override docs",         "assignee": "S. Park",  "updated": "2026-08-09", "target": "2026-08-20", "status": "WIP"  }
            ],
            "pre": [],
            "nonprod": []
          },
          "DAG": {
            "prod": [
              { "id": "MYH-601", "component": "Support Tools",     "title": "On-call tooling",          "assignee": "E. Davis", "updated": "2026-08-01", "target": "2026-08-03", "status": "Done" }
            ],
            "pre": [],
            "nonprod": []
          },
          "DB": {
            "prod": [
              { "id": "MYH-701", "component": "Postgres",          "title": "Replica monitoring",       "assignee": "T. Nguyen", "updated": "2026-08-04", "target": "2026-08-27", "status": "Open" }
            ],
            "pre": [],
            "nonprod": []
          }
        }
      }
    }
  },
  "DDS": {
    "markets": {
      "IN": {
        "apps": {
          "Infra": { "prod": { "total": 2 }, "pre": { "total": 1 }, "nonprod": { "total": 1 } }
        },
        "rwi": {
          "Infra": {
            "prod": [
              { "id": "DIN-701", "component": "Data Pipeline",     "title": "Exactly-once delivery",     "assignee": "L. Wang",  "updated": "2026-07-30", "target": "2026-07-30", "status": "Done" },
              { "id": "DIN-702", "component": "Streaming",         "title": "Backpressure handling",     "assignee": "K. Lee",   "updated": "2026-08-03", "target": "2026-08-03", "status": "Done" }
            ],
            "pre": [
              { "id": "DIN-703", "component": "Data Pipeline",     "title": "Schema registry v2",        "assignee": "L. Wang",  "updated": "2026-08-09", "target": "2026-08-09", "status": "Done" }
            ],
            "nonprod": [
              { "id": "DIN-704", "component": "Streaming",         "title": "Checkpoint tuning",         "assignee": "K. Lee",   "updated": "2026-07-18", "target": "2026-07-18", "status": "Done" }
            ]
          }
        }
      },
      "GB": {
        "apps": {
          "Infra": { "prod": { "total": 2 }, "pre": { "total": 1 }, "nonprod": { "total": 1 } }
        },
        "rwi": {
          "Infra": {
            "prod": [
              { "id": "GB-701", "component": "Data Pipeline",      "title": "Delivery guarantees",       "assignee": "L. Wang",  "updated": "2026-08-11", "target": "2026-08-13", "status": "Done" },
              { "id": "GB-702", "component": "Streaming",          "title": "Lag monitoring",            "assignee": "K. Lee",   "updated": "2026-08-02", "target": "2026-09-06", "status": "Open" }
            ],
            "pre": [
              { "id": "GB-703", "component": "Data Pipeline",      "title": "Schema migration",          "assignee": "L. Wang",  "updated": "2026-08-06", "target": "2026-08-21", "status": "WIP"  }
            ],
            "nonprod": [
              { "id": "GB-704", "component": "Streaming",          "title": "Checkpoint tuning",         "assignee": "K. Lee",   "updated": "2026-07-20", "target": "2026-08-29", "status": "Open" }
            ]
          }
        }
      },
      "HK": {
        "apps": {
          "Infra": { "prod": { "total": 2 }, "pre": { "total": 1 }, "nonprod": { "total": 1 } }
        },
        "rwi": {
          "Infra": {
            "prod": [
              { "id": "HK-701", "component": "Data Pipeline",      "title": "Rebalancing",               "assignee": "L. Wang",  "updated": "2026-08-24", "target": "2026-08-26", "status": "Done" },
              { "id": "HK-702", "component": "Streaming",          "title": "Backpressure tuning",       "assignee": "K. Lee",   "updated": "2026-08-19", "target": "2026-08-30", "status": "WIP"  }
            ],
            "pre": [
              { "id": "HK-703", "component": "Data Pipeline",      "title": "Schema registry v3",        "assignee": "L. Wang",  "updated": "2026-08-07", "target": "2026-08-08", "status": "Done" }
            ],
            "nonprod": [
              { "id": "HK-704", "component": "Streaming",          "title": "Checkpoint tuning",         "assignee": "K. Lee",   "updated": "2026-07-22", "target": "2026-08-23", "status": "WIP"  }
            ]
          }
        }
      }
    }
  }
};
