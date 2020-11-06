{
    "configuration": {
        "@_environment": "PROD",
        "@_updated": "2020/11/05-21:12:03",
        "channel": [
            {
                "@_id": 310,
                "@_label": "CME Globex Equity Futures",
                "products": {
                    "product": [
                        {
                            "@_code": "ES",
                            "group": {
                                "@_code": "ES"
                            }
                        },
                        {
                            "@_code": "0ES",
                            "group": {
                                "@_code": "$E"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "310H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "310IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.1",
                            "host-ip": [
                                "205.209.223.70",
                                "205.209.221.70"
                            ],
                            "port": 14310,
                            "feed": "A"
                        },
                        {
                            "@_id": "310IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.1",
                            "host-ip": [
                                "205.209.212.70",
                                "205.209.211.70"
                            ],
                            "port": 15310,
                            "feed": "B"
                        },
                        {
                            "@_id": "310NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.43",
                            "host-ip": [
                                "205.209.222.85",
                                "205.209.222.73"
                            ],
                            "port": 14310,
                            "feed": "A"
                        },
                        {
                            "@_id": "310NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.43",
                            "host-ip": [
                                "205.209.213.48",
                                "205.209.214.48"
                            ],
                            "port": 15310,
                            "feed": "B"
                        },
                        {
                            "@_id": "310SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.22",
                            "host-ip": [
                                "205.209.222.77",
                                "205.209.222.87"
                            ],
                            "port": 14310,
                            "feed": "A"
                        },
                        {
                            "@_id": "310SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.22",
                            "host-ip": [
                                "205.209.213.52",
                                "205.209.214.52"
                            ],
                            "port": 15310,
                            "feed": "B"
                        },
                        {
                            "@_id": "310SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.1",
                            "host-ip": [
                                "205.209.222.108",
                                "205.209.222.109"
                            ],
                            "port": 23310,
                            "feed": "A"
                        },
                        {
                            "@_id": "310SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.64",
                            "host-ip": [
                                "205.209.213.64",
                                "205.209.214.64"
                            ],
                            "port": 22310,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 311,
                "@_label": "CME Globex Equity Options",
                "products": {
                    "product": [
                        {
                            "@_code": "SP",
                            "group": {
                                "@_code": "OS"
                            }
                        },
                        {
                            "@_code": "E3C",
                            "group": {
                                "@_code": "EW"
                            }
                        },
                        {
                            "@_code": "S2C",
                            "group": {
                                "@_code": "OS"
                            }
                        },
                        {
                            "@_code": "E2C",
                            "group": {
                                "@_code": "EW"
                            }
                        },
                        {
                            "@_code": "E3A",
                            "group": {
                                "@_code": "EW"
                            }
                        },
                        {
                            "@_code": "EV",
                            "group": {
                                "@_code": "OS"
                            }
                        },
                        {
                            "@_code": "YPB",
                            "group": {
                                "@_code": "EW"
                            }
                        },
                        {
                            "@_code": "ES",
                            "group": {
                                "@_code": "EW"
                            }
                        },
                        {
                            "@_code": "EW3",
                            "group": {
                                "@_code": "EW"
                            }
                        },
                        {
                            "@_code": "E2A",
                            "group": {
                                "@_code": "EW"
                            }
                        },
                        {
                            "@_code": "S3C",
                            "group": {
                                "@_code": "OS"
                            }
                        },
                        {
                            "@_code": "EW",
                            "group": {
                                "@_code": "EW"
                            }
                        },
                        {
                            "@_code": "EV3",
                            "group": {
                                "@_code": "OS"
                            }
                        },
                        {
                            "@_code": "S1A",
                            "group": {
                                "@_code": "OS"
                            }
                        },
                        {
                            "@_code": "E1A",
                            "group": {
                                "@_code": "EW"
                            }
                        },
                        {
                            "@_code": "EW1",
                            "group": {
                                "@_code": "EW"
                            }
                        },
                        {
                            "@_code": "EV1",
                            "group": {
                                "@_code": "OS"
                            }
                        },
                        {
                            "@_code": "EV4",
                            "group": {
                                "@_code": "OS"
                            }
                        },
                        {
                            "@_code": "EW4",
                            "group": {
                                "@_code": "EW"
                            }
                        },
                        {
                            "@_code": "S1C",
                            "group": {
                                "@_code": "OS"
                            }
                        },
                        {
                            "@_code": "EV2",
                            "group": {
                                "@_code": "OS"
                            }
                        },
                        {
                            "@_code": "EW2",
                            "group": {
                                "@_code": "EW"
                            }
                        },
                        {
                            "@_code": "E1C",
                            "group": {
                                "@_code": "EW"
                            }
                        },
                        {
                            "@_code": "S2A",
                            "group": {
                                "@_code": "OS"
                            }
                        },
                        {
                            "@_code": "S3A",
                            "group": {
                                "@_code": "OS"
                            }
                        },
                        {
                            "@_code": "S4C",
                            "group": {
                                "@_code": "OS"
                            }
                        },
                        {
                            "@_code": "E4C",
                            "group": {
                                "@_code": "EW"
                            }
                        },
                        {
                            "@_code": "0SO",
                            "group": {
                                "@_code": "$Q"
                            }
                        },
                        {
                            "@_code": "E4A",
                            "group": {
                                "@_code": "EW"
                            }
                        },
                        {
                            "@_code": "S4A",
                            "group": {
                                "@_code": "OS"
                            }
                        },
                        {
                            "@_code": "EW1",
                            "group": {
                                "@_code": "1V"
                            }
                        },
                        {
                            "@_code": "E1A",
                            "group": {
                                "@_code": "1V"
                            }
                        },
                        {
                            "@_code": "E2A",
                            "group": {
                                "@_code": "1V"
                            }
                        },
                        {
                            "@_code": "ES",
                            "group": {
                                "@_code": "1V"
                            }
                        },
                        {
                            "@_code": "E1C",
                            "group": {
                                "@_code": "1V"
                            }
                        },
                        {
                            "@_code": "EW",
                            "group": {
                                "@_code": "1V"
                            }
                        },
                        {
                            "@_code": "EW3",
                            "group": {
                                "@_code": "1V"
                            }
                        },
                        {
                            "@_code": "E3A",
                            "group": {
                                "@_code": "1V"
                            }
                        },
                        {
                            "@_code": "EW2",
                            "group": {
                                "@_code": "1V"
                            }
                        },
                        {
                            "@_code": "E4A",
                            "group": {
                                "@_code": "1V"
                            }
                        },
                        {
                            "@_code": "E2C",
                            "group": {
                                "@_code": "1V"
                            }
                        },
                        {
                            "@_code": "E3C",
                            "group": {
                                "@_code": "1V"
                            }
                        },
                        {
                            "@_code": "EV2",
                            "group": {
                                "@_code": "4V"
                            }
                        },
                        {
                            "@_code": "EW4",
                            "group": {
                                "@_code": "1V"
                            }
                        },
                        {
                            "@_code": "YPB",
                            "group": {
                                "@_code": "1V"
                            }
                        },
                        {
                            "@_code": "E4C",
                            "group": {
                                "@_code": "1V"
                            }
                        },
                        {
                            "@_code": "S1C",
                            "group": {
                                "@_code": "4V"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "311H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "311IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.2",
                            "host-ip": [
                                "205.209.223.70",
                                "205.209.221.70"
                            ],
                            "port": 14311,
                            "feed": "A"
                        },
                        {
                            "@_id": "311IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.2",
                            "host-ip": [
                                "205.209.212.70",
                                "205.209.211.70"
                            ],
                            "port": 15311,
                            "feed": "B"
                        },
                        {
                            "@_id": "311NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.44",
                            "host-ip": [
                                "205.209.222.82",
                                "205.209.222.76"
                            ],
                            "port": 14311,
                            "feed": "A"
                        },
                        {
                            "@_id": "311NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.44",
                            "host-ip": [
                                "205.209.213.51",
                                "205.209.214.51"
                            ],
                            "port": 15311,
                            "feed": "B"
                        },
                        {
                            "@_id": "311SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.23",
                            "host-ip": [
                                "205.209.222.84",
                                "205.209.222.80"
                            ],
                            "port": 14311,
                            "feed": "A"
                        },
                        {
                            "@_id": "311SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.23",
                            "host-ip": [
                                "205.209.214.55",
                                "205.209.213.55"
                            ],
                            "port": 15311,
                            "feed": "B"
                        },
                        {
                            "@_id": "311SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.2",
                            "host-ip": [
                                "205.209.222.114",
                                "205.209.222.115"
                            ],
                            "port": 23311,
                            "feed": "A"
                        },
                        {
                            "@_id": "311SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.65",
                            "host-ip": [
                                "205.209.213.67",
                                "205.209.214.67"
                            ],
                            "port": 22311,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 312,
                "@_label": "CME Globex Interest Rate Futures",
                "products": {
                    "product": [
                        {
                            "@_code": "GLB",
                            "group": {
                                "@_code": "EM"
                            }
                        },
                        {
                            "@_code": "GE",
                            "group": {
                                "@_code": "GE"
                            }
                        },
                        {
                            "@_code": "SR3",
                            "group": {
                                "@_code": "SS"
                            }
                        },
                        {
                            "@_code": "SON",
                            "group": {
                                "@_code": "S8"
                            }
                        },
                        {
                            "@_code": "0GE",
                            "group": {
                                "@_code": "$D"
                            }
                        },
                        {
                            "@_code": "MPC",
                            "group": {
                                "@_code": "S9"
                            }
                        },
                        {
                            "@_code": "SPX",
                            "group": {
                                "@_code": 4
                            }
                        },
                        {
                            "@_code": "SR1",
                            "group": {
                                "@_code": "SS"
                            }
                        },
                        {
                            "@_code": "SR1",
                            "group": {
                                "@_code": "SY"
                            }
                        },
                        {
                            "@_code": "TR1",
                            "group": {
                                "@_code": 4
                            }
                        },
                        {
                            "@_code": "TR6",
                            "group": {
                                "@_code": 4
                            }
                        },
                        {
                            "@_code": "TR3",
                            "group": {
                                "@_code": 4
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "312H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "312IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.3",
                            "host-ip": [
                                "205.209.223.80",
                                "205.209.221.80"
                            ],
                            "port": 14312,
                            "feed": "A"
                        },
                        {
                            "@_id": "312IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.3",
                            "host-ip": [
                                "205.209.212.80",
                                "205.209.211.80"
                            ],
                            "port": 15312,
                            "feed": "B"
                        },
                        {
                            "@_id": "312NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.45",
                            "host-ip": [
                                "205.209.222.82",
                                "205.209.222.76"
                            ],
                            "port": 14312,
                            "feed": "A"
                        },
                        {
                            "@_id": "312NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.45",
                            "host-ip": [
                                "205.209.213.51",
                                "205.209.214.51"
                            ],
                            "port": 15312,
                            "feed": "B"
                        },
                        {
                            "@_id": "312SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.24",
                            "host-ip": [
                                "205.209.222.84",
                                "205.209.222.80"
                            ],
                            "port": 14312,
                            "feed": "A"
                        },
                        {
                            "@_id": "312SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.24",
                            "host-ip": [
                                "205.209.214.55",
                                "205.209.213.55"
                            ],
                            "port": 15312,
                            "feed": "B"
                        },
                        {
                            "@_id": "312SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.3",
                            "host-ip": [
                                "205.209.222.114",
                                "205.209.222.115"
                            ],
                            "port": 23312,
                            "feed": "A"
                        },
                        {
                            "@_id": "312SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.66",
                            "host-ip": [
                                "205.209.213.67",
                                "205.209.214.67"
                            ],
                            "port": 22312,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 313,
                "@_label": "CME Globex Interest Rate Options",
                "products": {
                    "product": [
                        {
                            "@_code": "S4",
                            "group": {
                                "@_code": "J4"
                            }
                        },
                        {
                            "@_code": "GE2",
                            "group": {
                                "@_code": "E2"
                            }
                        },
                        {
                            "@_code": "GE3",
                            "group": {
                                "@_code": "E3"
                            }
                        },
                        {
                            "@_code": "S3",
                            "group": {
                                "@_code": "J3"
                            }
                        },
                        {
                            "@_code": "GE5",
                            "group": {
                                "@_code": "E5"
                            }
                        },
                        {
                            "@_code": "S0",
                            "group": {
                                "@_code": "J1"
                            }
                        },
                        {
                            "@_code": "S2",
                            "group": {
                                "@_code": "J2"
                            }
                        },
                        {
                            "@_code": "GE0",
                            "group": {
                                "@_code": "E0"
                            }
                        },
                        {
                            "@_code": "GE4",
                            "group": {
                                "@_code": "E4"
                            }
                        },
                        {
                            "@_code": "S5",
                            "group": {
                                "@_code": "J5"
                            }
                        },
                        {
                            "@_code": "SR3",
                            "group": {
                                "@_code": "JE"
                            }
                        },
                        {
                            "@_code": "0GG",
                            "group": {
                                "@_code": "$R"
                            }
                        },
                        {
                            "@_code": "SPO",
                            "group": {
                                "@_code": "8I"
                            }
                        },
                        {
                            "@_code": "GE",
                            "group": {
                                "@_code": "ZE"
                            }
                        },
                        {
                            "@_code": "TS3",
                            "group": {
                                "@_code": "J6"
                            }
                        },
                        {
                            "@_code": "TE2",
                            "group": {
                                "@_code": "G3"
                            }
                        },
                        {
                            "@_code": "TE4",
                            "group": {
                                "@_code": "G4"
                            }
                        },
                        {
                            "@_code": "TS2",
                            "group": {
                                "@_code": "JT"
                            }
                        },
                        {
                            "@_code": "TS4",
                            "group": {
                                "@_code": "J9"
                            }
                        },
                        {
                            "@_code": "TE3",
                            "group": {
                                "@_code": "G6"
                            }
                        },
                        {
                            "@_code": "S31",
                            "group": {
                                "@_code": "J3"
                            }
                        },
                        {
                            "@_code": "S01",
                            "group": {
                                "@_code": "J1"
                            }
                        },
                        {
                            "@_code": "E21",
                            "group": {
                                "@_code": "E2"
                            }
                        },
                        {
                            "@_code": "S21",
                            "group": {
                                "@_code": "J2"
                            }
                        },
                        {
                            "@_code": "E01",
                            "group": {
                                "@_code": "E0"
                            }
                        },
                        {
                            "@_code": "SR1",
                            "group": {
                                "@_code": "JA"
                            }
                        },
                        {
                            "@_code": "E31",
                            "group": {
                                "@_code": "E3"
                            }
                        },
                        {
                            "@_code": "S03",
                            "group": {
                                "@_code": "J1"
                            }
                        },
                        {
                            "@_code": "S23",
                            "group": {
                                "@_code": "J2"
                            }
                        },
                        {
                            "@_code": "E03",
                            "group": {
                                "@_code": "E0"
                            }
                        },
                        {
                            "@_code": "E23",
                            "group": {
                                "@_code": "E2"
                            }
                        },
                        {
                            "@_code": "S33",
                            "group": {
                                "@_code": "J3"
                            }
                        },
                        {
                            "@_code": "E33",
                            "group": {
                                "@_code": "E3"
                            }
                        },
                        {
                            "@_code": "GE2",
                            "group": {
                                "@_code": "U$"
                            }
                        },
                        {
                            "@_code": "GE3",
                            "group": {
                                "@_code": "U$"
                            }
                        },
                        {
                            "@_code": "GE",
                            "group": {
                                "@_code": "U$"
                            }
                        },
                        {
                            "@_code": "GE4",
                            "group": {
                                "@_code": "U$"
                            }
                        },
                        {
                            "@_code": "GE0",
                            "group": {
                                "@_code": "U$"
                            }
                        },
                        {
                            "@_code": "SR3",
                            "group": {
                                "@_code": "U$"
                            }
                        },
                        {
                            "@_code": "TE2",
                            "group": {
                                "@_code": "U$"
                            }
                        },
                        {
                            "@_code": "TE3",
                            "group": {
                                "@_code": "U$"
                            }
                        },
                        {
                            "@_code": "TE4",
                            "group": {
                                "@_code": "U$"
                            }
                        },
                        {
                            "@_code": "E01",
                            "group": {
                                "@_code": "U$"
                            }
                        },
                        {
                            "@_code": "E03",
                            "group": {
                                "@_code": "U$"
                            }
                        },
                        {
                            "@_code": "E21",
                            "group": {
                                "@_code": "U$"
                            }
                        },
                        {
                            "@_code": "GE5",
                            "group": {
                                "@_code": "U$"
                            }
                        },
                        {
                            "@_code": "E31",
                            "group": {
                                "@_code": "U$"
                            }
                        },
                        {
                            "@_code": "S01",
                            "group": {
                                "@_code": "U$"
                            }
                        },
                        {
                            "@_code": "S03",
                            "group": {
                                "@_code": "U$"
                            }
                        },
                        {
                            "@_code": "S0",
                            "group": {
                                "@_code": "U$"
                            }
                        },
                        {
                            "@_code": "E33",
                            "group": {
                                "@_code": "U$"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "313H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "313IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.4",
                            "host-ip": [
                                "205.209.221.79",
                                "205.209.223.79"
                            ],
                            "port": 14313,
                            "feed": "A"
                        },
                        {
                            "@_id": "313IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.4",
                            "host-ip": [
                                "205.209.211.79",
                                "205.209.212.79"
                            ],
                            "port": 15313,
                            "feed": "B"
                        },
                        {
                            "@_id": "313NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.46",
                            "host-ip": [
                                "205.209.222.82",
                                "205.209.222.76"
                            ],
                            "port": 14313,
                            "feed": "A"
                        },
                        {
                            "@_id": "313NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.46",
                            "host-ip": [
                                "205.209.213.51",
                                "205.209.214.51"
                            ],
                            "port": 15313,
                            "feed": "B"
                        },
                        {
                            "@_id": "313SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.25",
                            "host-ip": [
                                "205.209.222.84",
                                "205.209.222.80"
                            ],
                            "port": 14313,
                            "feed": "A"
                        },
                        {
                            "@_id": "313SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.25",
                            "host-ip": [
                                "205.209.214.55",
                                "205.209.213.55"
                            ],
                            "port": 15313,
                            "feed": "B"
                        },
                        {
                            "@_id": "313SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.4",
                            "host-ip": [
                                "205.209.222.114",
                                "205.209.222.115"
                            ],
                            "port": 23313,
                            "feed": "A"
                        },
                        {
                            "@_id": "313SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.67",
                            "host-ip": [
                                "205.209.213.67",
                                "205.209.214.67"
                            ],
                            "port": 22313,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 314,
                "@_label": "CME Globex FX Futures",
                "products": {
                    "product": [
                        {
                            "@_code": "SIR",
                            "group": {
                                "@_code": "6P"
                            }
                        },
                        {
                            "@_code": "MIR",
                            "group": {
                                "@_code": "6P"
                            }
                        },
                        {
                            "@_code": "ZAR",
                            "group": {
                                "@_code": "6Z"
                            }
                        },
                        {
                            "@_code": "MSF",
                            "group": {
                                "@_code": "6S"
                            }
                        },
                        {
                            "@_code": "CNH",
                            "group": {
                                "@_code": "RM"
                            }
                        },
                        {
                            "@_code": "MNH",
                            "group": {
                                "@_code": "RM"
                            }
                        },
                        {
                            "@_code": "RMB",
                            "group": {
                                "@_code": "F8"
                            }
                        },
                        {
                            "@_code": "RME",
                            "group": {
                                "@_code": "F9"
                            }
                        },
                        {
                            "@_code": "6B",
                            "group": {
                                "@_code": "6B"
                            }
                        },
                        {
                            "@_code": "KRW",
                            "group": {
                                "@_code": "6K"
                            }
                        },
                        {
                            "@_code": "6Z",
                            "group": {
                                "@_code": "6Z"
                            }
                        },
                        {
                            "@_code": "6J",
                            "group": {
                                "@_code": "6J"
                            }
                        },
                        {
                            "@_code": "6A",
                            "group": {
                                "@_code": "6A"
                            }
                        },
                        {
                            "@_code": "6S",
                            "group": {
                                "@_code": "6S"
                            }
                        },
                        {
                            "@_code": "MJY",
                            "group": {
                                "@_code": "6J"
                            }
                        },
                        {
                            "@_code": "J7",
                            "group": {
                                "@_code": "6J"
                            }
                        },
                        {
                            "@_code": "ILS",
                            "group": {
                                "@_code": "XI"
                            }
                        },
                        {
                            "@_code": "M6B",
                            "group": {
                                "@_code": "6B"
                            }
                        },
                        {
                            "@_code": "M6A",
                            "group": {
                                "@_code": "6A"
                            }
                        },
                        {
                            "@_code": "0AU",
                            "group": {
                                "@_code": "$F"
                            }
                        },
                        {
                            "@_code": "GBPUSD",
                            "group": {
                                "@_code": "6B"
                            }
                        },
                        {
                            "@_code": "AUDUSD",
                            "group": {
                                "@_code": "6A"
                            }
                        },
                        {
                            "@_code": "AUDUSD",
                            "group": {
                                "@_code": 1
                            }
                        },
                        {
                            "@_code": "USDJPY",
                            "group": {
                                "@_code": "6J"
                            }
                        },
                        {
                            "@_code": "USDCHF",
                            "group": {
                                "@_code": "6S"
                            }
                        },
                        {
                            "@_code": "USDCHF",
                            "group": {
                                "@_code": 1
                            }
                        },
                        {
                            "@_code": "GBPUSD",
                            "group": {
                                "@_code": 1
                            }
                        },
                        {
                            "@_code": "USDJPY",
                            "group": {
                                "@_code": 1
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "314H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "314IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.5",
                            "host-ip": [
                                "205.209.221.53",
                                "205.209.223.54"
                            ],
                            "port": 14314,
                            "feed": "A"
                        },
                        {
                            "@_id": "314IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.5",
                            "host-ip": [
                                "205.209.212.51",
                                "205.209.211.52"
                            ],
                            "port": 15314,
                            "feed": "B"
                        },
                        {
                            "@_id": "314NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.47",
                            "host-ip": [
                                "205.209.222.75",
                                "205.209.222.81"
                            ],
                            "port": 14314,
                            "feed": "A"
                        },
                        {
                            "@_id": "314NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.47",
                            "host-ip": [
                                "205.209.214.50",
                                "205.209.213.50"
                            ],
                            "port": 15314,
                            "feed": "B"
                        },
                        {
                            "@_id": "314SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.26",
                            "host-ip": [
                                "205.209.222.83",
                                "205.209.222.79"
                            ],
                            "port": 14314,
                            "feed": "A"
                        },
                        {
                            "@_id": "314SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.26",
                            "host-ip": [
                                "205.209.213.54",
                                "205.209.214.54"
                            ],
                            "port": 15314,
                            "feed": "B"
                        },
                        {
                            "@_id": "314SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.5",
                            "host-ip": [
                                "205.209.222.113",
                                "205.209.222.112"
                            ],
                            "port": 23314,
                            "feed": "A"
                        },
                        {
                            "@_id": "314SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.68",
                            "host-ip": [
                                "205.209.213.66",
                                "205.209.214.66"
                            ],
                            "port": 22314,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 315,
                "@_label": "CME Globex FX Options",
                "products": {
                    "product": [
                        {
                            "@_code": "VXS",
                            "group": {
                                "@_code": "3S"
                            }
                        },
                        {
                            "@_code": "JPU",
                            "group": {
                                "@_code": "QJ"
                            }
                        },
                        {
                            "@_code": "GBU",
                            "group": {
                                "@_code": "YB"
                            }
                        },
                        {
                            "@_code": "VXA",
                            "group": {
                                "@_code": "3A"
                            }
                        },
                        {
                            "@_code": "VG2",
                            "group": {
                                "@_code": "B3"
                            }
                        },
                        {
                            "@_code": "ADU",
                            "group": {
                                "@_code": "XA"
                            }
                        },
                        {
                            "@_code": "RME",
                            "group": {
                                "@_code": "8O"
                            }
                        },
                        {
                            "@_code": "0AD",
                            "group": {
                                "@_code": "$1"
                            }
                        },
                        {
                            "@_code": "ILS",
                            "group": {
                                "@_code": "I0"
                            }
                        },
                        {
                            "@_code": "WA2",
                            "group": {
                                "@_code": "XA"
                            }
                        },
                        {
                            "@_code": "KRW",
                            "group": {
                                "@_code": "0K"
                            }
                        },
                        {
                            "@_code": "VXB",
                            "group": {
                                "@_code": "B3"
                            }
                        },
                        {
                            "@_code": "CHU",
                            "group": {
                                "@_code": "YS"
                            }
                        },
                        {
                            "@_code": "MA2",
                            "group": {
                                "@_code": "XA"
                            }
                        },
                        {
                            "@_code": "VXJ",
                            "group": {
                                "@_code": "3Y"
                            }
                        },
                        {
                            "@_code": "IS2",
                            "group": {
                                "@_code": "I0"
                            }
                        },
                        {
                            "@_code": "VG1",
                            "group": {
                                "@_code": "B3"
                            }
                        },
                        {
                            "@_code": "WG4",
                            "group": {
                                "@_code": "YB"
                            }
                        },
                        {
                            "@_code": "MA4",
                            "group": {
                                "@_code": "XA"
                            }
                        },
                        {
                            "@_code": "WJ2",
                            "group": {
                                "@_code": "QJ"
                            }
                        },
                        {
                            "@_code": "RO",
                            "group": {
                                "@_code": "A4"
                            }
                        },
                        {
                            "@_code": "VA2",
                            "group": {
                                "@_code": "3A"
                            }
                        },
                        {
                            "@_code": "RMB",
                            "group": {
                                "@_code": "0R"
                            }
                        },
                        {
                            "@_code": "VJ2",
                            "group": {
                                "@_code": "3Y"
                            }
                        },
                        {
                            "@_code": "MB2",
                            "group": {
                                "@_code": "YB"
                            }
                        },
                        {
                            "@_code": "VAB",
                            "group": {
                                "@_code": "3A"
                            }
                        },
                        {
                            "@_code": "2AD",
                            "group": {
                                "@_code": "XA"
                            }
                        },
                        {
                            "@_code": "WA4",
                            "group": {
                                "@_code": "XA"
                            }
                        },
                        {
                            "@_code": "VA4",
                            "group": {
                                "@_code": "3A"
                            }
                        },
                        {
                            "@_code": "KR1",
                            "group": {
                                "@_code": "0K"
                            }
                        },
                        {
                            "@_code": "RE1",
                            "group": {
                                "@_code": "8O"
                            }
                        },
                        {
                            "@_code": "WG2",
                            "group": {
                                "@_code": "YB"
                            }
                        },
                        {
                            "@_code": "VA1",
                            "group": {
                                "@_code": "3A"
                            }
                        },
                        {
                            "@_code": "WJ4",
                            "group": {
                                "@_code": "QJ"
                            }
                        },
                        {
                            "@_code": "4SF",
                            "group": {
                                "@_code": "YS"
                            }
                        },
                        {
                            "@_code": "IS4",
                            "group": {
                                "@_code": "I0"
                            }
                        },
                        {
                            "@_code": "IS3",
                            "group": {
                                "@_code": "I0"
                            }
                        },
                        {
                            "@_code": "VJ1",
                            "group": {
                                "@_code": "3Y"
                            }
                        },
                        {
                            "@_code": "VA3",
                            "group": {
                                "@_code": "3A"
                            }
                        },
                        {
                            "@_code": "4BP",
                            "group": {
                                "@_code": "YB"
                            }
                        },
                        {
                            "@_code": "WG1",
                            "group": {
                                "@_code": "YB"
                            }
                        },
                        {
                            "@_code": "2JY",
                            "group": {
                                "@_code": "QJ"
                            }
                        },
                        {
                            "@_code": "RB1",
                            "group": {
                                "@_code": "0R"
                            }
                        },
                        {
                            "@_code": "4JY",
                            "group": {
                                "@_code": "QJ"
                            }
                        },
                        {
                            "@_code": "VSD",
                            "group": {
                                "@_code": "3S"
                            }
                        },
                        {
                            "@_code": "MB1",
                            "group": {
                                "@_code": "YB"
                            }
                        },
                        {
                            "@_code": "MJ2",
                            "group": {
                                "@_code": "QJ"
                            }
                        },
                        {
                            "@_code": "VG4",
                            "group": {
                                "@_code": "B3"
                            }
                        },
                        {
                            "@_code": "VBD",
                            "group": {
                                "@_code": "B3"
                            }
                        },
                        {
                            "@_code": "4AD",
                            "group": {
                                "@_code": "XA"
                            }
                        },
                        {
                            "@_code": "KR3",
                            "group": {
                                "@_code": "0K"
                            }
                        },
                        {
                            "@_code": "4N",
                            "group": {
                                "@_code": "A4"
                            }
                        },
                        {
                            "@_code": "VAD",
                            "group": {
                                "@_code": "3A"
                            }
                        },
                        {
                            "@_code": "RB3",
                            "group": {
                                "@_code": "0R"
                            }
                        },
                        {
                            "@_code": "VJD",
                            "group": {
                                "@_code": "3Y"
                            }
                        },
                        {
                            "@_code": "WA1",
                            "group": {
                                "@_code": "XA"
                            }
                        },
                        {
                            "@_code": "3AD",
                            "group": {
                                "@_code": "XA"
                            }
                        },
                        {
                            "@_code": "MJ1",
                            "group": {
                                "@_code": "QJ"
                            }
                        },
                        {
                            "@_code": "WJ1",
                            "group": {
                                "@_code": "QJ"
                            }
                        },
                        {
                            "@_code": "RE3",
                            "group": {
                                "@_code": "8O"
                            }
                        },
                        {
                            "@_code": "2N",
                            "group": {
                                "@_code": "A4"
                            }
                        },
                        {
                            "@_code": "2SF",
                            "group": {
                                "@_code": "YS"
                            }
                        },
                        {
                            "@_code": "VJB",
                            "group": {
                                "@_code": "3Y"
                            }
                        },
                        {
                            "@_code": "VG3",
                            "group": {
                                "@_code": "B3"
                            }
                        },
                        {
                            "@_code": "2BP",
                            "group": {
                                "@_code": "YB"
                            }
                        },
                        {
                            "@_code": "WJ3",
                            "group": {
                                "@_code": "QJ"
                            }
                        },
                        {
                            "@_code": "VSB",
                            "group": {
                                "@_code": "3S"
                            }
                        },
                        {
                            "@_code": "KR4",
                            "group": {
                                "@_code": "0K"
                            }
                        },
                        {
                            "@_code": "RB4",
                            "group": {
                                "@_code": "0R"
                            }
                        },
                        {
                            "@_code": "VBB",
                            "group": {
                                "@_code": "B3"
                            }
                        },
                        {
                            "@_code": "RE4",
                            "group": {
                                "@_code": "8O"
                            }
                        },
                        {
                            "@_code": "MA1",
                            "group": {
                                "@_code": "XA"
                            }
                        },
                        {
                            "@_code": "WA3",
                            "group": {
                                "@_code": "XA"
                            }
                        },
                        {
                            "@_code": "WG3",
                            "group": {
                                "@_code": "YB"
                            }
                        },
                        {
                            "@_code": "VJ4",
                            "group": {
                                "@_code": "3Y"
                            }
                        },
                        {
                            "@_code": "VSC",
                            "group": {
                                "@_code": "3S"
                            }
                        },
                        {
                            "@_code": "VJC",
                            "group": {
                                "@_code": "3Y"
                            }
                        },
                        {
                            "@_code": "VJ3",
                            "group": {
                                "@_code": "3Y"
                            }
                        },
                        {
                            "@_code": "MB3",
                            "group": {
                                "@_code": "YB"
                            }
                        },
                        {
                            "@_code": "MA3",
                            "group": {
                                "@_code": "XA"
                            }
                        },
                        {
                            "@_code": "3BP",
                            "group": {
                                "@_code": "YB"
                            }
                        },
                        {
                            "@_code": "3JY",
                            "group": {
                                "@_code": "QJ"
                            }
                        },
                        {
                            "@_code": "RB2",
                            "group": {
                                "@_code": "0R"
                            }
                        },
                        {
                            "@_code": "3N",
                            "group": {
                                "@_code": "A4"
                            }
                        },
                        {
                            "@_code": "RE2",
                            "group": {
                                "@_code": "8O"
                            }
                        },
                        {
                            "@_code": "KR2",
                            "group": {
                                "@_code": "0K"
                            }
                        },
                        {
                            "@_code": "VAC",
                            "group": {
                                "@_code": "3A"
                            }
                        },
                        {
                            "@_code": "VBC",
                            "group": {
                                "@_code": "B3"
                            }
                        },
                        {
                            "@_code": "3SF",
                            "group": {
                                "@_code": "YS"
                            }
                        },
                        {
                            "@_code": "MB4",
                            "group": {
                                "@_code": "YB"
                            }
                        },
                        {
                            "@_code": "MJ3",
                            "group": {
                                "@_code": "QJ"
                            }
                        },
                        {
                            "@_code": "MB5",
                            "group": {
                                "@_code": "YB"
                            }
                        },
                        {
                            "@_code": "MJ5",
                            "group": {
                                "@_code": "QJ"
                            }
                        },
                        {
                            "@_code": "MA5",
                            "group": {
                                "@_code": "XA"
                            }
                        },
                        {
                            "@_code": "MJ4",
                            "group": {
                                "@_code": "QJ"
                            }
                        },
                        {
                            "@_code": "ADU",
                            "group": {
                                "@_code": "0A"
                            }
                        },
                        {
                            "@_code": "JPU",
                            "group": {
                                "@_code": "2J"
                            }
                        },
                        {
                            "@_code": "GBU",
                            "group": {
                                "@_code": "2B"
                            }
                        },
                        {
                            "@_code": "CHU",
                            "group": {
                                "@_code": "2S"
                            }
                        },
                        {
                            "@_code": "MJ2",
                            "group": {
                                "@_code": "2J"
                            }
                        },
                        {
                            "@_code": "3BP",
                            "group": {
                                "@_code": "2B"
                            }
                        },
                        {
                            "@_code": "WA1",
                            "group": {
                                "@_code": "0A"
                            }
                        },
                        {
                            "@_code": "WG1",
                            "group": {
                                "@_code": "2B"
                            }
                        },
                        {
                            "@_code": "2SF",
                            "group": {
                                "@_code": "2S"
                            }
                        },
                        {
                            "@_code": "2BP",
                            "group": {
                                "@_code": "2B"
                            }
                        },
                        {
                            "@_code": "2AD",
                            "group": {
                                "@_code": "0A"
                            }
                        },
                        {
                            "@_code": "3AD",
                            "group": {
                                "@_code": "0A"
                            }
                        },
                        {
                            "@_code": "WG4",
                            "group": {
                                "@_code": "2B"
                            }
                        },
                        {
                            "@_code": "WG3",
                            "group": {
                                "@_code": "2B"
                            }
                        },
                        {
                            "@_code": "3JY",
                            "group": {
                                "@_code": "2J"
                            }
                        },
                        {
                            "@_code": "4BP",
                            "group": {
                                "@_code": "2B"
                            }
                        },
                        {
                            "@_code": "WJ3",
                            "group": {
                                "@_code": "2J"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "315H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "315IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.6",
                            "host-ip": [
                                "205.209.223.54",
                                "205.209.221.53"
                            ],
                            "port": 14315,
                            "feed": "A"
                        },
                        {
                            "@_id": "315IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.6",
                            "host-ip": [
                                "205.209.211.52",
                                "205.209.212.51"
                            ],
                            "port": 15315,
                            "feed": "B"
                        },
                        {
                            "@_id": "315NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.48",
                            "host-ip": [
                                "205.209.222.73",
                                "205.209.222.85"
                            ],
                            "port": 14315,
                            "feed": "A"
                        },
                        {
                            "@_id": "315NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.48",
                            "host-ip": [
                                "205.209.214.48",
                                "205.209.213.48"
                            ],
                            "port": 15315,
                            "feed": "B"
                        },
                        {
                            "@_id": "315SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.27",
                            "host-ip": [
                                "205.209.222.87",
                                "205.209.222.77"
                            ],
                            "port": 14315,
                            "feed": "A"
                        },
                        {
                            "@_id": "315SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.27",
                            "host-ip": [
                                "205.209.213.52",
                                "205.209.214.52"
                            ],
                            "port": 15315,
                            "feed": "B"
                        },
                        {
                            "@_id": "315SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.6",
                            "host-ip": [
                                "205.209.222.109",
                                "205.209.222.108"
                            ],
                            "port": 23315,
                            "feed": "A"
                        },
                        {
                            "@_id": "315SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.69",
                            "host-ip": [
                                "205.209.214.64",
                                "205.209.213.64"
                            ],
                            "port": 22315,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 316,
                "@_label": "CME Globex Commodity Futures",
                "products": {
                    "product": [
                        {
                            "@_code": "GDK",
                            "group": {
                                "@_code": "DC"
                            }
                        },
                        {
                            "@_code": "H2",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "D0",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "DY",
                            "group": {
                                "@_code": "DY"
                            }
                        },
                        {
                            "@_code": "CB",
                            "group": {
                                "@_code": "CB"
                            }
                        },
                        {
                            "@_code": "LAV",
                            "group": {
                                "@_code": "HI"
                            }
                        },
                        {
                            "@_code": "G0",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "D2",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "G2",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "HQ",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "SFR",
                            "group": {
                                "@_code": "HI"
                            }
                        },
                        {
                            "@_code": "GNF",
                            "group": {
                                "@_code": "DY"
                            }
                        },
                        {
                            "@_code": "H0",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "KS",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "H4",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "JQ",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "GF",
                            "group": {
                                "@_code": "GF"
                            }
                        },
                        {
                            "@_code": "CSC",
                            "group": {
                                "@_code": "DC"
                            }
                        },
                        {
                            "@_code": "H5",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "KQ",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "LET",
                            "group": {
                                "@_code": "TH"
                            }
                        },
                        {
                            "@_code": "HE",
                            "group": {
                                "@_code": "HE"
                            }
                        },
                        {
                            "@_code": "K5",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "DC",
                            "group": {
                                "@_code": "DC"
                            }
                        },
                        {
                            "@_code": "K2",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "BLK",
                            "group": {
                                "@_code": "DC"
                            }
                        },
                        {
                            "@_code": "K0",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "K1",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "HS",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "H1",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "K4",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "KSK",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "H3",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "K3",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "GFT",
                            "group": {
                                "@_code": "TH"
                            }
                        },
                        {
                            "@_code": "KQK",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "HET",
                            "group": {
                                "@_code": "TH"
                            }
                        },
                        {
                            "@_code": "LAX",
                            "group": {
                                "@_code": "HI"
                            }
                        },
                        {
                            "@_code": "KQN",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "GIE",
                            "group": {
                                "@_code": "GA"
                            }
                        },
                        {
                            "@_code": "G2N",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "LBS",
                            "group": {
                                "@_code": "LU"
                            }
                        },
                        {
                            "@_code": "GD",
                            "group": {
                                "@_code": "GD"
                            }
                        },
                        {
                            "@_code": "0HE",
                            "group": {
                                "@_code": "$K"
                            }
                        },
                        {
                            "@_code": "H0X",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "BOS",
                            "group": {
                                "@_code": "HI"
                            }
                        },
                        {
                            "@_code": "H3X",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "G0K",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "CUS",
                            "group": {
                                "@_code": "HI"
                            }
                        },
                        {
                            "@_code": "D0X",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "LE",
                            "group": {
                                "@_code": "LE"
                            }
                        },
                        {
                            "@_code": "D2X",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "CHI",
                            "group": {
                                "@_code": "HI"
                            }
                        },
                        {
                            "@_code": "G6Z",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "G2K",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "K3N",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "K2N",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "K7K",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "LE",
                            "group": {
                                "@_code": "HE"
                            }
                        },
                        {
                            "@_code": "G6",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "WDC",
                            "group": {
                                "@_code": "HI"
                            }
                        },
                        {
                            "@_code": "SDG",
                            "group": {
                                "@_code": "HI"
                            }
                        },
                        {
                            "@_code": "NYM",
                            "group": {
                                "@_code": "HI"
                            }
                        },
                        {
                            "@_code": "MIA",
                            "group": {
                                "@_code": "HI"
                            }
                        },
                        {
                            "@_code": "DEN",
                            "group": {
                                "@_code": "HI"
                            }
                        },
                        {
                            "@_code": "K1N",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "H1X",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "K0N",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "H4X",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "G6N",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "HSX",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "D2Z",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "D0Z",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "G6K",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "G0N",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "K5K",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "H2X",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "K1K",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "H5X",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "K7N",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "K7",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "HQX",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "G6X",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "H7X",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "K2K",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "K3K",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "K4K",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "K0K",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "HSZ",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "HQZ",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "K4N",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "H0Z",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "KSN",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "H3Z",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "OPF",
                            "group": {
                                "@_code": "UC"
                            }
                        },
                        {
                            "@_code": "K5N",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "GDT",
                            "group": {
                                "@_code": "GT"
                            }
                        },
                        {
                            "@_code": "H1Z",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "H2Z",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "CPO",
                            "group": {
                                "@_code": "UC"
                            }
                        },
                        {
                            "@_code": "H7Z",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "H4Z",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "H5Z",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "GIT",
                            "group": {
                                "@_code": "GH"
                            }
                        },
                        {
                            "@_code": "Q04",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "POG",
                            "group": {
                                "@_code": "UC"
                            }
                        },
                        {
                            "@_code": "H7",
                            "group": {
                                "@_code": "HW"
                            }
                        },
                        {
                            "@_code": "Q02",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "PRK",
                            "group": {
                                "@_code": "PF"
                            }
                        },
                        {
                            "@_code": "Q06",
                            "group": {
                                "@_code": 5
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "316H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "316IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.7",
                            "host-ip": [
                                "205.209.221.71",
                                "205.209.223.71"
                            ],
                            "port": 14316,
                            "feed": "A"
                        },
                        {
                            "@_id": "316IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.7",
                            "host-ip": [
                                "205.209.212.71",
                                "205.209.211.71"
                            ],
                            "port": 15316,
                            "feed": "B"
                        },
                        {
                            "@_id": "316NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.49",
                            "host-ip": [
                                "205.209.222.86",
                                "205.209.222.74"
                            ],
                            "port": 14316,
                            "feed": "A"
                        },
                        {
                            "@_id": "316NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.49",
                            "host-ip": [
                                "205.209.213.49",
                                "205.209.214.49"
                            ],
                            "port": 15316,
                            "feed": "B"
                        },
                        {
                            "@_id": "316SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.28",
                            "host-ip": [
                                "205.209.222.88",
                                "205.209.222.78"
                            ],
                            "port": 14316,
                            "feed": "A"
                        },
                        {
                            "@_id": "316SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.28",
                            "host-ip": [
                                "205.209.214.53",
                                "205.209.213.53"
                            ],
                            "port": 15316,
                            "feed": "B"
                        },
                        {
                            "@_id": "316SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.7",
                            "host-ip": [
                                "205.209.222.110",
                                "205.209.222.111"
                            ],
                            "port": 23316,
                            "feed": "A"
                        },
                        {
                            "@_id": "316SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.70",
                            "host-ip": [
                                "205.209.213.65",
                                "205.209.214.65"
                            ],
                            "port": 22316,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 317,
                "@_label": "CME Globex Commodity Options",
                "products": {
                    "product": [
                        {
                            "@_code": "JQ",
                            "group": {
                                "@_code": "A2"
                            }
                        },
                        {
                            "@_code": "CB",
                            "group": {
                                "@_code": "C0"
                            }
                        },
                        {
                            "@_code": "LE",
                            "group": {
                                "@_code": "L0"
                            }
                        },
                        {
                            "@_code": "GNF",
                            "group": {
                                "@_code": "N7"
                            }
                        },
                        {
                            "@_code": "GDK",
                            "group": {
                                "@_code": "D8"
                            }
                        },
                        {
                            "@_code": "HE",
                            "group": {
                                "@_code": "0H"
                            }
                        },
                        {
                            "@_code": "DC",
                            "group": {
                                "@_code": "A6"
                            }
                        },
                        {
                            "@_code": "GF",
                            "group": {
                                "@_code": "F0"
                            }
                        },
                        {
                            "@_code": "BLK",
                            "group": {
                                "@_code": "CK"
                            }
                        },
                        {
                            "@_code": "DY",
                            "group": {
                                "@_code": "Y0"
                            }
                        },
                        {
                            "@_code": "CSC",
                            "group": {
                                "@_code": "CQ"
                            }
                        },
                        {
                            "@_code": "0HO",
                            "group": {
                                "@_code": "$B"
                            }
                        },
                        {
                            "@_code": "L0A",
                            "group": {
                                "@_code": "L2"
                            }
                        },
                        {
                            "@_code": "L0C",
                            "group": {
                                "@_code": "L2"
                            }
                        },
                        {
                            "@_code": "POO",
                            "group": {
                                "@_code": "U4"
                            }
                        },
                        {
                            "@_code": "LBS",
                            "group": {
                                "@_code": "W3"
                            }
                        },
                        {
                            "@_code": "L0B",
                            "group": {
                                "@_code": "L2"
                            }
                        },
                        {
                            "@_code": "D0X",
                            "group": {
                                "@_code": "W7"
                            }
                        },
                        {
                            "@_code": "DC",
                            "group": {
                                "@_code": "C0"
                            }
                        },
                        {
                            "@_code": "GDK",
                            "group": {
                                "@_code": "N7"
                            }
                        },
                        {
                            "@_code": "H4X",
                            "group": {
                                "@_code": "W7"
                            }
                        },
                        {
                            "@_code": "DY",
                            "group": {
                                "@_code": "C0"
                            }
                        },
                        {
                            "@_code": "GDK",
                            "group": {
                                "@_code": "L0"
                            }
                        },
                        {
                            "@_code": "H4",
                            "group": {
                                "@_code": "W7"
                            }
                        },
                        {
                            "@_code": "H3",
                            "group": {
                                "@_code": "W7"
                            }
                        },
                        {
                            "@_code": "H5",
                            "group": {
                                "@_code": "W7"
                            }
                        },
                        {
                            "@_code": "HQ",
                            "group": {
                                "@_code": "W7"
                            }
                        },
                        {
                            "@_code": "H1",
                            "group": {
                                "@_code": "W7"
                            }
                        },
                        {
                            "@_code": "H2",
                            "group": {
                                "@_code": "W7"
                            }
                        },
                        {
                            "@_code": "H7X",
                            "group": {
                                "@_code": "W7"
                            }
                        },
                        {
                            "@_code": "CSC",
                            "group": {
                                "@_code": "N7"
                            }
                        },
                        {
                            "@_code": "HS",
                            "group": {
                                "@_code": "W7"
                            }
                        },
                        {
                            "@_code": "H3Z",
                            "group": {
                                "@_code": "W7"
                            }
                        },
                        {
                            "@_code": "GF",
                            "group": {
                                "@_code": "CQ"
                            }
                        },
                        {
                            "@_code": "BLK",
                            "group": {
                                "@_code": "CQ"
                            }
                        },
                        {
                            "@_code": "CSC",
                            "group": {
                                "@_code": "C0"
                            }
                        },
                        {
                            "@_code": "GDK",
                            "group": {
                                "@_code": "C0"
                            }
                        },
                        {
                            "@_code": "GNF",
                            "group": {
                                "@_code": "F0"
                            }
                        },
                        {
                            "@_code": "LE",
                            "group": {
                                "@_code": "L1"
                            }
                        },
                        {
                            "@_code": "DC",
                            "group": {
                                "@_code": "A9"
                            }
                        },
                        {
                            "@_code": "GDK",
                            "group": {
                                "@_code": "A9"
                            }
                        },
                        {
                            "@_code": "HE",
                            "group": {
                                "@_code": "1H"
                            }
                        },
                        {
                            "@_code": "GF",
                            "group": {
                                "@_code": "F1"
                            }
                        },
                        {
                            "@_code": "GNF",
                            "group": {
                                "@_code": "N8"
                            }
                        },
                        {
                            "@_code": "CSC",
                            "group": {
                                "@_code": "CX"
                            }
                        },
                        {
                            "@_code": "CB",
                            "group": {
                                "@_code": "C3"
                            }
                        },
                        {
                            "@_code": "DY",
                            "group": {
                                "@_code": "Y3"
                            }
                        },
                        {
                            "@_code": "BLK",
                            "group": {
                                "@_code": "CX"
                            }
                        },
                        {
                            "@_code": "LBS",
                            "group": {
                                "@_code": "W4"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "317H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "317IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.8",
                            "host-ip": [
                                "205.209.221.74",
                                "205.209.223.74"
                            ],
                            "port": 14317,
                            "feed": "A"
                        },
                        {
                            "@_id": "317IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.8",
                            "host-ip": [
                                "205.209.212.74",
                                "205.209.211.74"
                            ],
                            "port": 15317,
                            "feed": "B"
                        },
                        {
                            "@_id": "317NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.50",
                            "host-ip": [
                                "205.209.222.73",
                                "205.209.222.85"
                            ],
                            "port": 14317,
                            "feed": "A"
                        },
                        {
                            "@_id": "317NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.50",
                            "host-ip": [
                                "205.209.214.48",
                                "205.209.213.48"
                            ],
                            "port": 15317,
                            "feed": "B"
                        },
                        {
                            "@_id": "317SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.29",
                            "host-ip": [
                                "205.209.222.87",
                                "205.209.222.77"
                            ],
                            "port": 14317,
                            "feed": "A"
                        },
                        {
                            "@_id": "317SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.29",
                            "host-ip": [
                                "205.209.213.52",
                                "205.209.214.52"
                            ],
                            "port": 15317,
                            "feed": "B"
                        },
                        {
                            "@_id": "317SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.8",
                            "host-ip": [
                                "205.209.222.109",
                                "205.209.222.108"
                            ],
                            "port": 23317,
                            "feed": "A"
                        },
                        {
                            "@_id": "317SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.71",
                            "host-ip": [
                                "205.209.213.64",
                                "205.209.214.64"
                            ],
                            "port": 22317,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 318,
                "@_label": "CME Globex Equity Futures - excludes E-mini S&amp;P 500",
                "products": {
                    "product": [
                        {
                            "@_code": "NIT",
                            "group": {
                                "@_code": "N6"
                            }
                        },
                        {
                            "@_code": "NIY",
                            "group": {
                                "@_code": "N1"
                            }
                        },
                        {
                            "@_code": "SLT",
                            "group": {
                                "@_code": "MR"
                            }
                        },
                        {
                            "@_code": "RSG",
                            "group": {
                                "@_code": "RG"
                            }
                        },
                        {
                            "@_code": "NKD",
                            "group": {
                                "@_code": "NK"
                            }
                        },
                        {
                            "@_code": "XFT",
                            "group": {
                                "@_code": "TF"
                            }
                        },
                        {
                            "@_code": "RLT",
                            "group": {
                                "@_code": "RT"
                            }
                        },
                        {
                            "@_code": "RGT",
                            "group": {
                                "@_code": "R2"
                            }
                        },
                        {
                            "@_code": "TRI",
                            "group": {
                                "@_code": "0B"
                            }
                        },
                        {
                            "@_code": "RSV",
                            "group": {
                                "@_code": "RV"
                            }
                        },
                        {
                            "@_code": "0NI",
                            "group": {
                                "@_code": "#1"
                            }
                        },
                        {
                            "@_code": "FTC",
                            "group": {
                                "@_code": "C1"
                            }
                        },
                        {
                            "@_code": "EQ1",
                            "group": {
                                "@_code": "4T"
                            }
                        },
                        {
                            "@_code": "EST",
                            "group": {
                                "@_code": "SB"
                            }
                        },
                        {
                            "@_code": "XIT",
                            "group": {
                                "@_code": "TN"
                            }
                        },
                        {
                            "@_code": "BIT",
                            "group": {
                                "@_code": "TQ"
                            }
                        },
                        {
                            "@_code": "ENY",
                            "group": {
                                "@_code": "N1"
                            }
                        },
                        {
                            "@_code": "R1T",
                            "group": {
                                "@_code": "R1"
                            }
                        },
                        {
                            "@_code": "SDI",
                            "group": {
                                "@_code": "SD"
                            }
                        },
                        {
                            "@_code": "IBV",
                            "group": {
                                "@_code": "IB"
                            }
                        },
                        {
                            "@_code": "XVT",
                            "group": {
                                "@_code": "TL"
                            }
                        },
                        {
                            "@_code": "RVT",
                            "group": {
                                "@_code": "R3"
                            }
                        },
                        {
                            "@_code": "XPT",
                            "group": {
                                "@_code": "TY"
                            }
                        },
                        {
                            "@_code": "XAZ",
                            "group": {
                                "@_code": "XB"
                            }
                        },
                        {
                            "@_code": "SU",
                            "group": {
                                "@_code": "SU"
                            }
                        },
                        {
                            "@_code": "XAP",
                            "group": {
                                "@_code": "XP"
                            }
                        },
                        {
                            "@_code": "FTT",
                            "group": {
                                "@_code": "FU"
                            }
                        },
                        {
                            "@_code": "EMT",
                            "group": {
                                "@_code": "PB"
                            }
                        },
                        {
                            "@_code": "DVT",
                            "group": {
                                "@_code": "DT"
                            }
                        },
                        {
                            "@_code": "XZT",
                            "group": {
                                "@_code": "TX"
                            }
                        },
                        {
                            "@_code": "XET",
                            "group": {
                                "@_code": "TK"
                            }
                        },
                        {
                            "@_code": "XKT",
                            "group": {
                                "@_code": "TV"
                            }
                        },
                        {
                            "@_code": "EIT",
                            "group": {
                                "@_code": "ED"
                            }
                        },
                        {
                            "@_code": "0MS",
                            "group": {
                                "@_code": "$M"
                            }
                        },
                        {
                            "@_code": "FTB",
                            "group": {
                                "@_code": "FU"
                            }
                        },
                        {
                            "@_code": "XAU",
                            "group": {
                                "@_code": "XU"
                            }
                        },
                        {
                            "@_code": "NKT",
                            "group": {
                                "@_code": "ND"
                            }
                        },
                        {
                            "@_code": "XAY",
                            "group": {
                                "@_code": "XN"
                            }
                        },
                        {
                            "@_code": "XUT",
                            "group": {
                                "@_code": "TZ"
                            }
                        },
                        {
                            "@_code": "RS1",
                            "group": {
                                "@_code": "RL"
                            }
                        },
                        {
                            "@_code": "IPO",
                            "group": {
                                "@_code": "IX"
                            }
                        },
                        {
                            "@_code": "RTY",
                            "group": {
                                "@_code": "RY"
                            }
                        },
                        {
                            "@_code": "NQ",
                            "group": {
                                "@_code": "NQ"
                            }
                        },
                        {
                            "@_code": "TPB",
                            "group": {
                                "@_code": "BJ"
                            }
                        },
                        {
                            "@_code": "SP",
                            "group": {
                                "@_code": "SP"
                            }
                        },
                        {
                            "@_code": "XYT",
                            "group": {
                                "@_code": "TC"
                            }
                        },
                        {
                            "@_code": "2GT",
                            "group": {
                                "@_code": "RB"
                            }
                        },
                        {
                            "@_code": "FT5",
                            "group": {
                                "@_code": "C5"
                            }
                        },
                        {
                            "@_code": "TRB",
                            "group": {
                                "@_code": "TB"
                            }
                        },
                        {
                            "@_code": "EI",
                            "group": {
                                "@_code": "EA"
                            }
                        },
                        {
                            "@_code": "XAE",
                            "group": {
                                "@_code": "XY"
                            }
                        },
                        {
                            "@_code": "QCN",
                            "group": {
                                "@_code": "QN"
                            }
                        },
                        {
                            "@_code": "XAR",
                            "group": {
                                "@_code": "XR"
                            }
                        },
                        {
                            "@_code": "R1R",
                            "group": {
                                "@_code": "0B"
                            }
                        },
                        {
                            "@_code": "TPY",
                            "group": {
                                "@_code": "TJ"
                            }
                        },
                        {
                            "@_code": "XRT",
                            "group": {
                                "@_code": "T2"
                            }
                        },
                        {
                            "@_code": "XAV",
                            "group": {
                                "@_code": "XL"
                            }
                        },
                        {
                            "@_code": "XAK",
                            "group": {
                                "@_code": "XG"
                            }
                        },
                        {
                            "@_code": "IPT",
                            "group": {
                                "@_code": "IT"
                            }
                        },
                        {
                            "@_code": "SG",
                            "group": {
                                "@_code": "SG"
                            }
                        },
                        {
                            "@_code": "XBT",
                            "group": {
                                "@_code": "TU"
                            }
                        },
                        {
                            "@_code": "XAF",
                            "group": {
                                "@_code": "XF"
                            }
                        },
                        {
                            "@_code": "0MD",
                            "group": {
                                "@_code": "$M"
                            }
                        },
                        {
                            "@_code": "SMC",
                            "group": {
                                "@_code": "SC"
                            }
                        },
                        {
                            "@_code": "MNQ",
                            "group": {
                                "@_code": "NQ"
                            }
                        },
                        {
                            "@_code": "2VT",
                            "group": {
                                "@_code": "RD"
                            }
                        },
                        {
                            "@_code": "ESG",
                            "group": {
                                "@_code": "S4"
                            }
                        },
                        {
                            "@_code": "FT1",
                            "group": {
                                "@_code": "FZ"
                            }
                        },
                        {
                            "@_code": "XAI",
                            "group": {
                                "@_code": "XO"
                            }
                        },
                        {
                            "@_code": "BTC",
                            "group": {
                                "@_code": "BF"
                            }
                        },
                        {
                            "@_code": "R1B",
                            "group": {
                                "@_code": "RK"
                            }
                        },
                        {
                            "@_code": "NQT",
                            "group": {
                                "@_code": "NB"
                            }
                        },
                        {
                            "@_code": "R2T",
                            "group": {
                                "@_code": "RH"
                            }
                        },
                        {
                            "@_code": "RTQ",
                            "group": {
                                "@_code": "RE"
                            }
                        },
                        {
                            "@_code": "VLQ",
                            "group": {
                                "@_code": "NQ"
                            }
                        },
                        {
                            "@_code": "MES",
                            "group": {
                                "@_code": "MS"
                            }
                        },
                        {
                            "@_code": "EGT",
                            "group": {
                                "@_code": "S6"
                            }
                        },
                        {
                            "@_code": "ES1",
                            "group": {
                                "@_code": "SK"
                            }
                        },
                        {
                            "@_code": "R2G",
                            "group": {
                                "@_code": "RA"
                            }
                        },
                        {
                            "@_code": "EMD",
                            "group": {
                                "@_code": "ME"
                            }
                        },
                        {
                            "@_code": "N1T",
                            "group": {
                                "@_code": "NH"
                            }
                        },
                        {
                            "@_code": "R2V",
                            "group": {
                                "@_code": "RC"
                            }
                        },
                        {
                            "@_code": "N1R",
                            "group": {
                                "@_code": "0B"
                            }
                        },
                        {
                            "@_code": "ES2",
                            "group": {
                                "@_code": "SK"
                            }
                        },
                        {
                            "@_code": "XAB",
                            "group": {
                                "@_code": "XM"
                            }
                        },
                        {
                            "@_code": "SLP",
                            "group": {
                                "@_code": "MP"
                            }
                        },
                        {
                            "@_code": "FTU",
                            "group": {
                                "@_code": "FZ"
                            }
                        },
                        {
                            "@_code": "R2R",
                            "group": {
                                "@_code": "0B"
                            }
                        },
                        {
                            "@_code": "NKD",
                            "group": {
                                "@_code": "N1"
                            }
                        },
                        {
                            "@_code": "ESQ",
                            "group": {
                                "@_code": "3T"
                            }
                        },
                        {
                            "@_code": "M2K",
                            "group": {
                                "@_code": "RY"
                            }
                        },
                        {
                            "@_code": "BIO",
                            "group": {
                                "@_code": "BQ"
                            }
                        },
                        {
                            "@_code": "NQQ",
                            "group": {
                                "@_code": "NT"
                            }
                        },
                        {
                            "@_code": "DVE",
                            "group": {
                                "@_code": "DV"
                            }
                        },
                        {
                            "@_code": "SDA",
                            "group": {
                                "@_code": "SD"
                            }
                        },
                        {
                            "@_code": "ASR",
                            "group": {
                                "@_code": "0B"
                            }
                        },
                        {
                            "@_code": "AST",
                            "group": {
                                "@_code": "BV"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "318H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "318IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.9",
                            "host-ip": [
                                "205.209.223.75",
                                "205.209.221.75"
                            ],
                            "port": 14318,
                            "feed": "A"
                        },
                        {
                            "@_id": "318IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.9",
                            "host-ip": [
                                "205.209.211.75",
                                "205.209.212.75"
                            ],
                            "port": 15318,
                            "feed": "B"
                        },
                        {
                            "@_id": "318NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.51",
                            "host-ip": [
                                "205.209.222.75",
                                "205.209.222.81"
                            ],
                            "port": 14318,
                            "feed": "A"
                        },
                        {
                            "@_id": "318NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.51",
                            "host-ip": [
                                "205.209.213.50",
                                "205.209.214.50"
                            ],
                            "port": 15318,
                            "feed": "B"
                        },
                        {
                            "@_id": "318SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.30",
                            "host-ip": [
                                "205.209.222.79",
                                "205.209.222.83"
                            ],
                            "port": 14318,
                            "feed": "A"
                        },
                        {
                            "@_id": "318SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.30",
                            "host-ip": [
                                "205.209.214.54",
                                "205.209.213.54"
                            ],
                            "port": 15318,
                            "feed": "B"
                        },
                        {
                            "@_id": "318SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.9",
                            "host-ip": [
                                "205.209.222.112",
                                "205.209.222.113"
                            ],
                            "port": 23318,
                            "feed": "A"
                        },
                        {
                            "@_id": "318SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.72",
                            "host-ip": [
                                "205.209.213.66",
                                "205.209.214.66"
                            ],
                            "port": 22318,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 319,
                "@_label": "CME Globex Equity Options - excludes E-mini S&amp;P 500",
                "products": {
                    "product": [
                        {
                            "@_code": "QN3",
                            "group": {
                                "@_code": "NW"
                            }
                        },
                        {
                            "@_code": "ME3",
                            "group": {
                                "@_code": "MC"
                            }
                        },
                        {
                            "@_code": "BTC",
                            "group": {
                                "@_code": "B2"
                            }
                        },
                        {
                            "@_code": "NKW",
                            "group": {
                                "@_code": "N3"
                            }
                        },
                        {
                            "@_code": "SMC",
                            "group": {
                                "@_code": "7S"
                            }
                        },
                        {
                            "@_code": "EMD",
                            "group": {
                                "@_code": "MC"
                            }
                        },
                        {
                            "@_code": "RTM",
                            "group": {
                                "@_code": "R4"
                            }
                        },
                        {
                            "@_code": "NKY",
                            "group": {
                                "@_code": "N4"
                            }
                        },
                        {
                            "@_code": "NQ",
                            "group": {
                                "@_code": "QZ"
                            }
                        },
                        {
                            "@_code": "RTO",
                            "group": {
                                "@_code": "R4"
                            }
                        },
                        {
                            "@_code": "QNE",
                            "group": {
                                "@_code": "NW"
                            }
                        },
                        {
                            "@_code": "R3E",
                            "group": {
                                "@_code": "R4"
                            }
                        },
                        {
                            "@_code": "QN2",
                            "group": {
                                "@_code": "NW"
                            }
                        },
                        {
                            "@_code": "R1E",
                            "group": {
                                "@_code": "R4"
                            }
                        },
                        {
                            "@_code": "0NK",
                            "group": {
                                "@_code": "#2"
                            }
                        },
                        {
                            "@_code": "QN4",
                            "group": {
                                "@_code": "NW"
                            }
                        },
                        {
                            "@_code": "MQE",
                            "group": {
                                "@_code": "NE"
                            }
                        },
                        {
                            "@_code": "R2E",
                            "group": {
                                "@_code": "R4"
                            }
                        },
                        {
                            "@_code": "MQ1",
                            "group": {
                                "@_code": "NE"
                            }
                        },
                        {
                            "@_code": "MQ2",
                            "group": {
                                "@_code": "NE"
                            }
                        },
                        {
                            "@_code": "MQ3",
                            "group": {
                                "@_code": "NE"
                            }
                        },
                        {
                            "@_code": "R4E",
                            "group": {
                                "@_code": "R4"
                            }
                        },
                        {
                            "@_code": "QN1",
                            "group": {
                                "@_code": "NW"
                            }
                        },
                        {
                            "@_code": "MQ4",
                            "group": {
                                "@_code": "NE"
                            }
                        },
                        {
                            "@_code": "MNQ",
                            "group": {
                                "@_code": "NE"
                            }
                        },
                        {
                            "@_code": "QN1",
                            "group": {
                                "@_code": "2V"
                            }
                        },
                        {
                            "@_code": "RTO",
                            "group": {
                                "@_code": "R5"
                            }
                        },
                        {
                            "@_code": "NQ",
                            "group": {
                                "@_code": "2V"
                            }
                        },
                        {
                            "@_code": "R3E",
                            "group": {
                                "@_code": "R5"
                            }
                        },
                        {
                            "@_code": "MQ1",
                            "group": {
                                "@_code": "NF"
                            }
                        },
                        {
                            "@_code": "QN3",
                            "group": {
                                "@_code": "2V"
                            }
                        },
                        {
                            "@_code": "MQ3",
                            "group": {
                                "@_code": "NF"
                            }
                        },
                        {
                            "@_code": "R1E",
                            "group": {
                                "@_code": "R5"
                            }
                        },
                        {
                            "@_code": "QNE",
                            "group": {
                                "@_code": "2V"
                            }
                        },
                        {
                            "@_code": "BTC",
                            "group": {
                                "@_code": "B4"
                            }
                        },
                        {
                            "@_code": "QN2",
                            "group": {
                                "@_code": "2V"
                            }
                        },
                        {
                            "@_code": "MNQ",
                            "group": {
                                "@_code": "NF"
                            }
                        },
                        {
                            "@_code": "QN4",
                            "group": {
                                "@_code": "2V"
                            }
                        },
                        {
                            "@_code": "RTM",
                            "group": {
                                "@_code": "R5"
                            }
                        },
                        {
                            "@_code": "R2E",
                            "group": {
                                "@_code": "R5"
                            }
                        },
                        {
                            "@_code": "R4E",
                            "group": {
                                "@_code": "R5"
                            }
                        },
                        {
                            "@_code": "MQ2",
                            "group": {
                                "@_code": "NF"
                            }
                        },
                        {
                            "@_code": "EMD",
                            "group": {
                                "@_code": "8V"
                            }
                        },
                        {
                            "@_code": "MQE",
                            "group": {
                                "@_code": "NF"
                            }
                        },
                        {
                            "@_code": "MQ4",
                            "group": {
                                "@_code": "NF"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "319H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "319IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.10",
                            "host-ip": [
                                "205.209.223.75",
                                "205.209.221.75"
                            ],
                            "port": 14319,
                            "feed": "A"
                        },
                        {
                            "@_id": "319IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.10",
                            "host-ip": [
                                "205.209.211.75",
                                "205.209.212.75"
                            ],
                            "port": 15319,
                            "feed": "B"
                        },
                        {
                            "@_id": "319NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.52",
                            "host-ip": [
                                "205.209.222.76",
                                "205.209.222.82"
                            ],
                            "port": 14319,
                            "feed": "A"
                        },
                        {
                            "@_id": "319NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.52",
                            "host-ip": [
                                "205.209.214.51",
                                "205.209.213.51"
                            ],
                            "port": 15319,
                            "feed": "B"
                        },
                        {
                            "@_id": "319SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.31",
                            "host-ip": [
                                "205.209.222.80",
                                "205.209.222.84"
                            ],
                            "port": 14319,
                            "feed": "A"
                        },
                        {
                            "@_id": "319SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.31",
                            "host-ip": [
                                "205.209.214.55",
                                "205.209.213.55"
                            ],
                            "port": 15319,
                            "feed": "B"
                        },
                        {
                            "@_id": "319SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.10",
                            "host-ip": [
                                "205.209.222.114",
                                "205.209.222.115"
                            ],
                            "port": 23319,
                            "feed": "A"
                        },
                        {
                            "@_id": "319SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.73",
                            "host-ip": [
                                "205.209.214.67",
                                "205.209.213.67"
                            ],
                            "port": 22319,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 320,
                "@_label": "CME Globex FX Futures II",
                "products": {
                    "product": [
                        {
                            "@_code": "6L",
                            "group": {
                                "@_code": "6L"
                            }
                        },
                        {
                            "@_code": "6C",
                            "group": {
                                "@_code": "6C"
                            }
                        },
                        {
                            "@_code": "6R",
                            "group": {
                                "@_code": "6R"
                            }
                        },
                        {
                            "@_code": "CHL",
                            "group": {
                                "@_code": "6H"
                            }
                        },
                        {
                            "@_code": "6M",
                            "group": {
                                "@_code": "6M"
                            }
                        },
                        {
                            "@_code": "PSF",
                            "group": {
                                "@_code": "F6"
                            }
                        },
                        {
                            "@_code": "CHP",
                            "group": {
                                "@_code": "CH"
                            }
                        },
                        {
                            "@_code": "RP",
                            "group": {
                                "@_code": "FB"
                            }
                        },
                        {
                            "@_code": "6E",
                            "group": {
                                "@_code": "6E"
                            }
                        },
                        {
                            "@_code": "TRL",
                            "group": {
                                "@_code": "6T"
                            }
                        },
                        {
                            "@_code": "AJY",
                            "group": {
                                "@_code": "F3"
                            }
                        },
                        {
                            "@_code": "M6E",
                            "group": {
                                "@_code": "6E"
                            }
                        },
                        {
                            "@_code": "EHF",
                            "group": {
                                "@_code": "NU"
                            }
                        },
                        {
                            "@_code": "MCD",
                            "group": {
                                "@_code": "6C"
                            }
                        },
                        {
                            "@_code": "ENK",
                            "group": {
                                "@_code": "FM"
                            }
                        },
                        {
                            "@_code": "SJY",
                            "group": {
                                "@_code": "FY"
                            }
                        },
                        {
                            "@_code": "CJY",
                            "group": {
                                "@_code": "F7"
                            }
                        },
                        {
                            "@_code": "HUF",
                            "group": {
                                "@_code": "FH"
                            }
                        },
                        {
                            "@_code": "EAD",
                            "group": {
                                "@_code": "FK"
                            }
                        },
                        {
                            "@_code": "E7",
                            "group": {
                                "@_code": "6E"
                            }
                        },
                        {
                            "@_code": "06E",
                            "group": {
                                "@_code": "#C"
                            }
                        },
                        {
                            "@_code": "RF",
                            "group": {
                                "@_code": "FF"
                            }
                        },
                        {
                            "@_code": "ANE",
                            "group": {
                                "@_code": "F4"
                            }
                        },
                        {
                            "@_code": "ECK",
                            "group": {
                                "@_code": "FQ"
                            }
                        },
                        {
                            "@_code": "6N",
                            "group": {
                                "@_code": "6N"
                            }
                        },
                        {
                            "@_code": "ESK",
                            "group": {
                                "@_code": "FS"
                            }
                        },
                        {
                            "@_code": "ECD",
                            "group": {
                                "@_code": "FG"
                            }
                        },
                        {
                            "@_code": "EPZ",
                            "group": {
                                "@_code": "FP"
                            }
                        },
                        {
                            "@_code": "SEK",
                            "group": {
                                "@_code": "SE"
                            }
                        },
                        {
                            "@_code": "PJY",
                            "group": {
                                "@_code": "F5"
                            }
                        },
                        {
                            "@_code": "RY",
                            "group": {
                                "@_code": "FJ"
                            }
                        },
                        {
                            "@_code": "ACD",
                            "group": {
                                "@_code": "F2"
                            }
                        },
                        {
                            "@_code": "NOK",
                            "group": {
                                "@_code": "NO"
                            }
                        },
                        {
                            "@_code": "PLN",
                            "group": {
                                "@_code": "PN"
                            }
                        },
                        {
                            "@_code": "CZK",
                            "group": {
                                "@_code": "CZ"
                            }
                        },
                        {
                            "@_code": "NZDUSD",
                            "group": {
                                "@_code": "6F"
                            }
                        },
                        {
                            "@_code": "USDCAD",
                            "group": {
                                "@_code": "6C"
                            }
                        },
                        {
                            "@_code": "USDMXN",
                            "group": {
                                "@_code": "6M"
                            }
                        },
                        {
                            "@_code": "EURUSD",
                            "group": {
                                "@_code": "6E"
                            }
                        },
                        {
                            "@_code": "USDMXN",
                            "group": {
                                "@_code": 2
                            }
                        },
                        {
                            "@_code": "USDCAD",
                            "group": {
                                "@_code": 2
                            }
                        },
                        {
                            "@_code": "NZDUSD",
                            "group": {
                                "@_code": 2
                            }
                        },
                        {
                            "@_code": "EURUSD",
                            "group": {
                                "@_code": 2
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "320H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "320IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.11",
                            "host-ip": [
                                "205.209.221.72",
                                "205.209.223.72"
                            ],
                            "port": 14320,
                            "feed": "A"
                        },
                        {
                            "@_id": "320IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.11",
                            "host-ip": [
                                "205.209.212.72",
                                "205.209.211.72"
                            ],
                            "port": 15320,
                            "feed": "B"
                        },
                        {
                            "@_id": "320NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.53",
                            "host-ip": [
                                "205.209.222.85",
                                "205.209.222.73"
                            ],
                            "port": 14320,
                            "feed": "A"
                        },
                        {
                            "@_id": "320NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.53",
                            "host-ip": [
                                "205.209.214.48",
                                "205.209.213.48"
                            ],
                            "port": 15320,
                            "feed": "B"
                        },
                        {
                            "@_id": "320SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.32",
                            "host-ip": [
                                "205.209.222.77",
                                "205.209.222.87"
                            ],
                            "port": 14320,
                            "feed": "A"
                        },
                        {
                            "@_id": "320SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.32",
                            "host-ip": [
                                "205.209.214.52",
                                "205.209.213.52"
                            ],
                            "port": 15320,
                            "feed": "B"
                        },
                        {
                            "@_id": "320SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.26",
                            "host-ip": [
                                "205.209.222.109",
                                "205.209.222.108"
                            ],
                            "port": 23320,
                            "feed": "A"
                        },
                        {
                            "@_id": "320SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.89",
                            "host-ip": [
                                "205.209.214.64",
                                "205.209.213.64"
                            ],
                            "port": 22320,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 321,
                "@_label": "CME Globex FX Options II",
                "products": {
                    "product": [
                        {
                            "@_code": "VXT",
                            "group": {
                                "@_code": "3E"
                            }
                        },
                        {
                            "@_code": "MO4",
                            "group": {
                                "@_code": "XE"
                            }
                        },
                        {
                            "@_code": "2R",
                            "group": {
                                "@_code": "OR"
                            }
                        },
                        {
                            "@_code": "CAU",
                            "group": {
                                "@_code": "CD"
                            }
                        },
                        {
                            "@_code": "CKO",
                            "group": {
                                "@_code": "FR"
                            }
                        },
                        {
                            "@_code": "2EU",
                            "group": {
                                "@_code": "XE"
                            }
                        },
                        {
                            "@_code": "MD4",
                            "group": {
                                "@_code": "CD"
                            }
                        },
                        {
                            "@_code": "EPL",
                            "group": {
                                "@_code": "8M"
                            }
                        },
                        {
                            "@_code": "VC2",
                            "group": {
                                "@_code": "3C"
                            }
                        },
                        {
                            "@_code": "6M",
                            "group": {
                                "@_code": "MO"
                            }
                        },
                        {
                            "@_code": "6R",
                            "group": {
                                "@_code": "UO"
                            }
                        },
                        {
                            "@_code": "4E",
                            "group": {
                                "@_code": "8E"
                            }
                        },
                        {
                            "@_code": "ECZ",
                            "group": {
                                "@_code": "8A"
                            }
                        },
                        {
                            "@_code": "MO1",
                            "group": {
                                "@_code": "XE"
                            }
                        },
                        {
                            "@_code": "RF",
                            "group": {
                                "@_code": "8C"
                            }
                        },
                        {
                            "@_code": "RY",
                            "group": {
                                "@_code": "8H"
                            }
                        },
                        {
                            "@_code": "HFO",
                            "group": {
                                "@_code": "8K"
                            }
                        },
                        {
                            "@_code": "EHU",
                            "group": {
                                "@_code": "X8"
                            }
                        },
                        {
                            "@_code": "RP",
                            "group": {
                                "@_code": "8E"
                            }
                        },
                        {
                            "@_code": "PLZ",
                            "group": {
                                "@_code": "P6"
                            }
                        },
                        {
                            "@_code": "EUU",
                            "group": {
                                "@_code": "XE"
                            }
                        },
                        {
                            "@_code": "MO2",
                            "group": {
                                "@_code": "XE"
                            }
                        },
                        {
                            "@_code": "6N",
                            "group": {
                                "@_code": "2N"
                            }
                        },
                        {
                            "@_code": "WE2",
                            "group": {
                                "@_code": "XE"
                            }
                        },
                        {
                            "@_code": "VE2",
                            "group": {
                                "@_code": "3E"
                            }
                        },
                        {
                            "@_code": "VTB",
                            "group": {
                                "@_code": "3E"
                            }
                        },
                        {
                            "@_code": "WD1",
                            "group": {
                                "@_code": "CD"
                            }
                        },
                        {
                            "@_code": "VXC",
                            "group": {
                                "@_code": "3C"
                            }
                        },
                        {
                            "@_code": "MD2",
                            "group": {
                                "@_code": "CD"
                            }
                        },
                        {
                            "@_code": "6R1",
                            "group": {
                                "@_code": "UO"
                            }
                        },
                        {
                            "@_code": "2CD",
                            "group": {
                                "@_code": "CD"
                            }
                        },
                        {
                            "@_code": "BR",
                            "group": {
                                "@_code": "OR"
                            }
                        },
                        {
                            "@_code": "VC1",
                            "group": {
                                "@_code": "3C"
                            }
                        },
                        {
                            "@_code": "VE4",
                            "group": {
                                "@_code": "3E"
                            }
                        },
                        {
                            "@_code": "WE1",
                            "group": {
                                "@_code": "XE"
                            }
                        },
                        {
                            "@_code": "4R",
                            "group": {
                                "@_code": "OR"
                            }
                        },
                        {
                            "@_code": "4CD",
                            "group": {
                                "@_code": "CD"
                            }
                        },
                        {
                            "@_code": "VC4",
                            "group": {
                                "@_code": "3C"
                            }
                        },
                        {
                            "@_code": "WD4",
                            "group": {
                                "@_code": "CD"
                            }
                        },
                        {
                            "@_code": "VCB",
                            "group": {
                                "@_code": "3C"
                            }
                        },
                        {
                            "@_code": "VCD",
                            "group": {
                                "@_code": "3C"
                            }
                        },
                        {
                            "@_code": "4EU",
                            "group": {
                                "@_code": "XE"
                            }
                        },
                        {
                            "@_code": "WE4",
                            "group": {
                                "@_code": "XE"
                            }
                        },
                        {
                            "@_code": "6R3",
                            "group": {
                                "@_code": "UO"
                            }
                        },
                        {
                            "@_code": "VE1",
                            "group": {
                                "@_code": "3E"
                            }
                        },
                        {
                            "@_code": "4H",
                            "group": {
                                "@_code": "8H"
                            }
                        },
                        {
                            "@_code": "MO3",
                            "group": {
                                "@_code": "XE"
                            }
                        },
                        {
                            "@_code": "WD2",
                            "group": {
                                "@_code": "CD"
                            }
                        },
                        {
                            "@_code": "00E",
                            "group": {
                                "@_code": "#D"
                            }
                        },
                        {
                            "@_code": "4Z",
                            "group": {
                                "@_code": "2N"
                            }
                        },
                        {
                            "@_code": "4I",
                            "group": {
                                "@_code": "8C"
                            }
                        },
                        {
                            "@_code": "6R4",
                            "group": {
                                "@_code": "UO"
                            }
                        },
                        {
                            "@_code": "VTD",
                            "group": {
                                "@_code": "3E"
                            }
                        },
                        {
                            "@_code": "VE3",
                            "group": {
                                "@_code": "3E"
                            }
                        },
                        {
                            "@_code": "2Z",
                            "group": {
                                "@_code": "2N"
                            }
                        },
                        {
                            "@_code": "4M",
                            "group": {
                                "@_code": "MO"
                            }
                        },
                        {
                            "@_code": "2E",
                            "group": {
                                "@_code": "8E"
                            }
                        },
                        {
                            "@_code": "1R",
                            "group": {
                                "@_code": "OR"
                            }
                        },
                        {
                            "@_code": "2I",
                            "group": {
                                "@_code": "8C"
                            }
                        },
                        {
                            "@_code": "2H",
                            "group": {
                                "@_code": "8H"
                            }
                        },
                        {
                            "@_code": "MD1",
                            "group": {
                                "@_code": "CD"
                            }
                        },
                        {
                            "@_code": "3EU",
                            "group": {
                                "@_code": "XE"
                            }
                        },
                        {
                            "@_code": "WE3",
                            "group": {
                                "@_code": "XE"
                            }
                        },
                        {
                            "@_code": "2M",
                            "group": {
                                "@_code": "MO"
                            }
                        },
                        {
                            "@_code": "MD3",
                            "group": {
                                "@_code": "CD"
                            }
                        },
                        {
                            "@_code": "3CD",
                            "group": {
                                "@_code": "CD"
                            }
                        },
                        {
                            "@_code": "3M",
                            "group": {
                                "@_code": "MO"
                            }
                        },
                        {
                            "@_code": "WD3",
                            "group": {
                                "@_code": "CD"
                            }
                        },
                        {
                            "@_code": "VTC",
                            "group": {
                                "@_code": "3E"
                            }
                        },
                        {
                            "@_code": "3H",
                            "group": {
                                "@_code": "8H"
                            }
                        },
                        {
                            "@_code": "3I",
                            "group": {
                                "@_code": "8C"
                            }
                        },
                        {
                            "@_code": "3R",
                            "group": {
                                "@_code": "OR"
                            }
                        },
                        {
                            "@_code": "VCC",
                            "group": {
                                "@_code": "3C"
                            }
                        },
                        {
                            "@_code": "3Z",
                            "group": {
                                "@_code": "2N"
                            }
                        },
                        {
                            "@_code": "3E",
                            "group": {
                                "@_code": "8E"
                            }
                        },
                        {
                            "@_code": "VC3",
                            "group": {
                                "@_code": "3C"
                            }
                        },
                        {
                            "@_code": "MO5",
                            "group": {
                                "@_code": "XE"
                            }
                        },
                        {
                            "@_code": "MD5",
                            "group": {
                                "@_code": "CD"
                            }
                        },
                        {
                            "@_code": "EUU",
                            "group": {
                                "@_code": "2E"
                            }
                        },
                        {
                            "@_code": "CAU",
                            "group": {
                                "@_code": "2C"
                            }
                        },
                        {
                            "@_code": "WE1",
                            "group": {
                                "@_code": "2E"
                            }
                        },
                        {
                            "@_code": "6M",
                            "group": {
                                "@_code": "0M"
                            }
                        },
                        {
                            "@_code": "3EU",
                            "group": {
                                "@_code": "2E"
                            }
                        },
                        {
                            "@_code": "6R1",
                            "group": {
                                "@_code": "0Z"
                            }
                        },
                        {
                            "@_code": "WE2",
                            "group": {
                                "@_code": "2E"
                            }
                        },
                        {
                            "@_code": "4EU",
                            "group": {
                                "@_code": "2E"
                            }
                        },
                        {
                            "@_code": "2EU",
                            "group": {
                                "@_code": "2E"
                            }
                        },
                        {
                            "@_code": "MO2",
                            "group": {
                                "@_code": "2E"
                            }
                        },
                        {
                            "@_code": "2CD",
                            "group": {
                                "@_code": "2C"
                            }
                        },
                        {
                            "@_code": "WD3",
                            "group": {
                                "@_code": "2C"
                            }
                        },
                        {
                            "@_code": "6R",
                            "group": {
                                "@_code": "0Z"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "321H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "321IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.12",
                            "host-ip": [
                                "205.209.223.72",
                                "205.209.221.72"
                            ],
                            "port": 14321,
                            "feed": "A"
                        },
                        {
                            "@_id": "321IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.12",
                            "host-ip": [
                                "205.209.211.72",
                                "205.209.212.72"
                            ],
                            "port": 15321,
                            "feed": "B"
                        },
                        {
                            "@_id": "321NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.54",
                            "host-ip": [
                                "205.209.222.86",
                                "205.209.222.74"
                            ],
                            "port": 14321,
                            "feed": "A"
                        },
                        {
                            "@_id": "321NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.54",
                            "host-ip": [
                                "205.209.213.49",
                                "205.209.214.49"
                            ],
                            "port": 15321,
                            "feed": "B"
                        },
                        {
                            "@_id": "321SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.33",
                            "host-ip": [
                                "205.209.222.78",
                                "205.209.222.88"
                            ],
                            "port": 14321,
                            "feed": "A"
                        },
                        {
                            "@_id": "321SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.33",
                            "host-ip": [
                                "205.209.213.53",
                                "205.209.214.53"
                            ],
                            "port": 15321,
                            "feed": "B"
                        },
                        {
                            "@_id": "321SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.27",
                            "host-ip": [
                                "205.209.222.110",
                                "205.209.222.111"
                            ],
                            "port": 23321,
                            "feed": "A"
                        },
                        {
                            "@_id": "321SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.90",
                            "host-ip": [
                                "205.209.214.65",
                                "205.209.213.65"
                            ],
                            "port": 22321,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 323,
                "@_label": "CME Globex Equity Options - Micro SP 500 Option",
                "products": {
                    "product": [
                        {
                            "@_code": "0MS",
                            "group": {
                                "@_code": "#X"
                            }
                        },
                        {
                            "@_code": "EX3",
                            "group": {
                                "@_code": "EO"
                            }
                        },
                        {
                            "@_code": "EX1",
                            "group": {
                                "@_code": "EO"
                            }
                        },
                        {
                            "@_code": "EX2",
                            "group": {
                                "@_code": "EO"
                            }
                        },
                        {
                            "@_code": "MES",
                            "group": {
                                "@_code": "EO"
                            }
                        },
                        {
                            "@_code": "EX",
                            "group": {
                                "@_code": "EO"
                            }
                        },
                        {
                            "@_code": "EX4",
                            "group": {
                                "@_code": "EO"
                            }
                        },
                        {
                            "@_code": "EX3",
                            "group": {
                                "@_code": "EN"
                            }
                        },
                        {
                            "@_code": "EX2",
                            "group": {
                                "@_code": "EN"
                            }
                        },
                        {
                            "@_code": "EX1",
                            "group": {
                                "@_code": "EN"
                            }
                        },
                        {
                            "@_code": "MES",
                            "group": {
                                "@_code": "EN"
                            }
                        },
                        {
                            "@_code": "EX",
                            "group": {
                                "@_code": "EN"
                            }
                        },
                        {
                            "@_code": "EX4",
                            "group": {
                                "@_code": "EN"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "323H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "323IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.70",
                            "host-ip": [
                                "205.209.223.70",
                                "205.209.221.70"
                            ],
                            "port": 14346,
                            "feed": "A"
                        },
                        {
                            "@_id": "323IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.70",
                            "host-ip": [
                                "205.209.211.70",
                                "205.209.212.70"
                            ],
                            "port": 15346,
                            "feed": "B"
                        },
                        {
                            "@_id": "323NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.112",
                            "host-ip": [
                                "205.209.222.81",
                                "205.209.222.75"
                            ],
                            "port": 14346,
                            "feed": "A"
                        },
                        {
                            "@_id": "323NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.112",
                            "host-ip": [
                                "205.209.214.50",
                                "205.209.213.50"
                            ],
                            "port": 15346,
                            "feed": "B"
                        },
                        {
                            "@_id": "323SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.91",
                            "host-ip": [
                                "205.209.222.83",
                                "205.209.222.79"
                            ],
                            "port": 14346,
                            "feed": "A"
                        },
                        {
                            "@_id": "323SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.91",
                            "host-ip": [
                                "205.209.214.54",
                                "205.209.213.54"
                            ],
                            "port": 15346,
                            "feed": "B"
                        },
                        {
                            "@_id": "323SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.35",
                            "host-ip": [
                                "205.209.222.112",
                                "205.209.222.113"
                            ],
                            "port": 23346,
                            "feed": "A"
                        },
                        {
                            "@_id": "323SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.98",
                            "host-ip": [
                                "205.209.214.66",
                                "205.209.213.66"
                            ],
                            "port": 22346,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 340,
                "@_label": "CBOT Globex Commodity Futures",
                "products": {
                    "product": [
                        {
                            "@_code": "EH",
                            "group": {
                                "@_code": "EH"
                            }
                        },
                        {
                            "@_code": "SBT",
                            "group": {
                                "@_code": "TA"
                            }
                        },
                        {
                            "@_code": "MKC",
                            "group": {
                                "@_code": "MH"
                            }
                        },
                        {
                            "@_code": "ZS",
                            "group": {
                                "@_code": "ZS"
                            }
                        },
                        {
                            "@_code": "BCX",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "KET",
                            "group": {
                                "@_code": "TW"
                            }
                        },
                        {
                            "@_code": "UME",
                            "group": {
                                "@_code": "UF"
                            }
                        },
                        {
                            "@_code": "QM2",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "ZC",
                            "group": {
                                "@_code": "ZC"
                            }
                        },
                        {
                            "@_code": "QC3",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "ZCT",
                            "group": {
                                "@_code": "TP"
                            }
                        },
                        {
                            "@_code": "ZL",
                            "group": {
                                "@_code": "ZS"
                            }
                        },
                        {
                            "@_code": "ZWT",
                            "group": {
                                "@_code": "TW"
                            }
                        },
                        {
                            "@_code": "QS2",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "QO2",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "SQ2",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "QCW",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "QC4",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "QW3",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "KE",
                            "group": {
                                "@_code": "KE"
                            }
                        },
                        {
                            "@_code": "ZO",
                            "group": {
                                "@_code": "ZO"
                            }
                        },
                        {
                            "@_code": "S7C",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "UFB",
                            "group": {
                                "@_code": "UF"
                            }
                        },
                        {
                            "@_code": "QC8",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "ZWC",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "AW",
                            "group": {
                                "@_code": "AW"
                            }
                        },
                        {
                            "@_code": "QW6",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "WQ6",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "ZW",
                            "group": {
                                "@_code": "ZW"
                            }
                        },
                        {
                            "@_code": "QS9",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "KC7",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "XW",
                            "group": {
                                "@_code": "XW"
                            }
                        },
                        {
                            "@_code": "WMK",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "SQ5",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "DRS",
                            "group": {
                                "@_code": "RS"
                            }
                        },
                        {
                            "@_code": "QC6",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "ZM",
                            "group": {
                                "@_code": "ZS"
                            }
                        },
                        {
                            "@_code": "CKS",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "SAS",
                            "group": {
                                "@_code": "AS"
                            }
                        },
                        {
                            "@_code": "XK",
                            "group": {
                                "@_code": "XK"
                            }
                        },
                        {
                            "@_code": "ZMT",
                            "group": {
                                "@_code": "TA"
                            }
                        },
                        {
                            "@_code": "KE",
                            "group": {
                                "@_code": "KB"
                            }
                        },
                        {
                            "@_code": "QO4",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "QM4",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "KZS",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "QM6",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "KNS",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "QO6",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "QW2",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "XC",
                            "group": {
                                "@_code": "XC"
                            }
                        },
                        {
                            "@_code": "ZR",
                            "group": {
                                "@_code": "ZR"
                            }
                        },
                        {
                            "@_code": "ZLT",
                            "group": {
                                "@_code": "TA"
                            }
                        },
                        {
                            "@_code": "K6S",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "QC2",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "QKC",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "C3S",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "DFN",
                            "group": {
                                "@_code": "UF"
                            }
                        },
                        {
                            "@_code": "UNO",
                            "group": {
                                "@_code": "UF"
                            }
                        },
                        {
                            "@_code": "Z3W",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "QCC",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "QS5",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "AUW",
                            "group": {
                                "@_code": "AH"
                            }
                        },
                        {
                            "@_code": "QS0",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "QC7",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "SOM",
                            "group": {
                                "@_code": "ZS"
                            }
                        },
                        {
                            "@_code": "DRT",
                            "group": {
                                "@_code": "LH"
                            }
                        },
                        {
                            "@_code": "BWF",
                            "group": {
                                "@_code": "WP"
                            }
                        },
                        {
                            "@_code": "FZE",
                            "group": {
                                "@_code": "EH"
                            }
                        },
                        {
                            "@_code": "QX5",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "BCF",
                            "group": {
                                "@_code": "CS"
                            }
                        },
                        {
                            "@_code": "AWT",
                            "group": {
                                "@_code": "B7"
                            }
                        },
                        {
                            "@_code": "UFE",
                            "group": {
                                "@_code": "UF"
                            }
                        },
                        {
                            "@_code": "QS1",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "QM5",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "QO5",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "00C",
                            "group": {
                                "@_code": "#E"
                            }
                        },
                        {
                            "@_code": "QS3",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "UFV",
                            "group": {
                                "@_code": "UF"
                            }
                        },
                        {
                            "@_code": "QM3",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "BSF",
                            "group": {
                                "@_code": "FE"
                            }
                        },
                        {
                            "@_code": "QO3",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "QS8",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "MFC",
                            "group": {
                                "@_code": "UF"
                            }
                        },
                        {
                            "@_code": "MCX",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "CKW",
                            "group": {
                                "@_code": 5
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "340H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "340IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.64",
                            "host-ip": [
                                "205.209.223.71",
                                "205.209.221.71"
                            ],
                            "port": 14340,
                            "feed": "A"
                        },
                        {
                            "@_id": "340IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.64",
                            "host-ip": [
                                "205.209.211.71",
                                "205.209.212.71"
                            ],
                            "port": 15340,
                            "feed": "B"
                        },
                        {
                            "@_id": "340NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.106",
                            "host-ip": [
                                "205.209.222.86",
                                "205.209.222.74"
                            ],
                            "port": 14340,
                            "feed": "A"
                        },
                        {
                            "@_id": "340NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.106",
                            "host-ip": [
                                "205.209.213.49",
                                "205.209.214.49"
                            ],
                            "port": 15340,
                            "feed": "B"
                        },
                        {
                            "@_id": "340SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.85",
                            "host-ip": [
                                "205.209.222.78",
                                "205.209.222.88"
                            ],
                            "port": 14340,
                            "feed": "A"
                        },
                        {
                            "@_id": "340SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.85",
                            "host-ip": [
                                "205.209.214.53",
                                "205.209.213.53"
                            ],
                            "port": 15340,
                            "feed": "B"
                        },
                        {
                            "@_id": "340SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.29",
                            "host-ip": [
                                "205.209.222.111",
                                "205.209.222.110"
                            ],
                            "port": 23340,
                            "feed": "A"
                        },
                        {
                            "@_id": "340SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.92",
                            "host-ip": [
                                "205.209.213.65",
                                "205.209.214.65"
                            ],
                            "port": 22340,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 341,
                "@_label": "CBOT Globex Commodity Options",
                "products": {
                    "product": [
                        {
                            "@_code": "KCW",
                            "group": {
                                "@_code": "KW"
                            }
                        },
                        {
                            "@_code": "ZCW",
                            "group": {
                                "@_code": "Q3"
                            }
                        },
                        {
                            "@_code": "ZS1",
                            "group": {
                                "@_code": "SQ"
                            }
                        },
                        {
                            "@_code": "OZL",
                            "group": {
                                "@_code": "0O"
                            }
                        },
                        {
                            "@_code": "OEH",
                            "group": {
                                "@_code": "5X"
                            }
                        },
                        {
                            "@_code": "CKZ",
                            "group": {
                                "@_code": "K3"
                            }
                        },
                        {
                            "@_code": "OMD",
                            "group": {
                                "@_code": "ML"
                            }
                        },
                        {
                            "@_code": "OZM",
                            "group": {
                                "@_code": "ML"
                            }
                        },
                        {
                            "@_code": "KWE",
                            "group": {
                                "@_code": "OK"
                            }
                        },
                        {
                            "@_code": "OZR",
                            "group": {
                                "@_code": "RR"
                            }
                        },
                        {
                            "@_code": "OE1",
                            "group": {
                                "@_code": "OK"
                            }
                        },
                        {
                            "@_code": "OCD",
                            "group": {
                                "@_code": "OC"
                            }
                        },
                        {
                            "@_code": "OKE",
                            "group": {
                                "@_code": "OK"
                            }
                        },
                        {
                            "@_code": "CZM",
                            "group": {
                                "@_code": "M1"
                            }
                        },
                        {
                            "@_code": "BCE",
                            "group": {
                                "@_code": "SV"
                            }
                        },
                        {
                            "@_code": "0OC",
                            "group": {
                                "@_code": "$2"
                            }
                        },
                        {
                            "@_code": "SC7",
                            "group": {
                                "@_code": "Q1"
                            }
                        },
                        {
                            "@_code": "ZM1",
                            "group": {
                                "@_code": "ML"
                            }
                        },
                        {
                            "@_code": "MKW",
                            "group": {
                                "@_code": "M6"
                            }
                        },
                        {
                            "@_code": "CZL",
                            "group": {
                                "@_code": "X1"
                            }
                        },
                        {
                            "@_code": "OZS",
                            "group": {
                                "@_code": "SQ"
                            }
                        },
                        {
                            "@_code": "MC4",
                            "group": {
                                "@_code": "M1"
                            }
                        },
                        {
                            "@_code": "CZC",
                            "group": {
                                "@_code": "Y1"
                            }
                        },
                        {
                            "@_code": "OWD",
                            "group": {
                                "@_code": "OW"
                            }
                        },
                        {
                            "@_code": "OZC",
                            "group": {
                                "@_code": "OC"
                            }
                        },
                        {
                            "@_code": "NC4",
                            "group": {
                                "@_code": "X1"
                            }
                        },
                        {
                            "@_code": "OLD",
                            "group": {
                                "@_code": "0O"
                            }
                        },
                        {
                            "@_code": "ZL1",
                            "group": {
                                "@_code": "0O"
                            }
                        },
                        {
                            "@_code": "OSD",
                            "group": {
                                "@_code": "SQ"
                            }
                        },
                        {
                            "@_code": "SZ4",
                            "group": {
                                "@_code": "Q1"
                            }
                        },
                        {
                            "@_code": "ZC1",
                            "group": {
                                "@_code": "OC"
                            }
                        },
                        {
                            "@_code": "CZS",
                            "group": {
                                "@_code": "Q1"
                            }
                        },
                        {
                            "@_code": "SRS",
                            "group": {
                                "@_code": "SQ"
                            }
                        },
                        {
                            "@_code": "ZW1",
                            "group": {
                                "@_code": "OW"
                            }
                        },
                        {
                            "@_code": "MCW",
                            "group": {
                                "@_code": "CW"
                            }
                        },
                        {
                            "@_code": "NC3",
                            "group": {
                                "@_code": "X1"
                            }
                        },
                        {
                            "@_code": "12C",
                            "group": {
                                "@_code": "Y1"
                            }
                        },
                        {
                            "@_code": "SZH",
                            "group": {
                                "@_code": "Q1"
                            }
                        },
                        {
                            "@_code": "OC6",
                            "group": {
                                "@_code": "X1"
                            }
                        },
                        {
                            "@_code": "NC5",
                            "group": {
                                "@_code": "X1"
                            }
                        },
                        {
                            "@_code": "12S",
                            "group": {
                                "@_code": "Q1"
                            }
                        },
                        {
                            "@_code": "OZW",
                            "group": {
                                "@_code": "OW"
                            }
                        },
                        {
                            "@_code": "MC3",
                            "group": {
                                "@_code": "M1"
                            }
                        },
                        {
                            "@_code": "MC6",
                            "group": {
                                "@_code": "M1"
                            }
                        },
                        {
                            "@_code": "CWZ",
                            "group": {
                                "@_code": "W1"
                            }
                        },
                        {
                            "@_code": "KZC",
                            "group": {
                                "@_code": "K3"
                            }
                        },
                        {
                            "@_code": "SZ1",
                            "group": {
                                "@_code": "Q1"
                            }
                        },
                        {
                            "@_code": "KWC",
                            "group": {
                                "@_code": "KW"
                            }
                        },
                        {
                            "@_code": "OZO",
                            "group": {
                                "@_code": "OO"
                            }
                        },
                        {
                            "@_code": "BWO",
                            "group": {
                                "@_code": "W2"
                            }
                        },
                        {
                            "@_code": "CZW",
                            "group": {
                                "@_code": "W1"
                            }
                        },
                        {
                            "@_code": "SZ8",
                            "group": {
                                "@_code": "Q1"
                            }
                        },
                        {
                            "@_code": "12K",
                            "group": {
                                "@_code": "K3"
                            }
                        },
                        {
                            "@_code": "WC6",
                            "group": {
                                "@_code": "W1"
                            }
                        },
                        {
                            "@_code": "MC5",
                            "group": {
                                "@_code": "M1"
                            }
                        },
                        {
                            "@_code": "SZ9",
                            "group": {
                                "@_code": "Q1"
                            }
                        },
                        {
                            "@_code": "CZ9",
                            "group": {
                                "@_code": "Y1"
                            }
                        },
                        {
                            "@_code": "SZ3",
                            "group": {
                                "@_code": "Q1"
                            }
                        },
                        {
                            "@_code": "ZW2",
                            "group": {
                                "@_code": "OW"
                            }
                        },
                        {
                            "@_code": "12W",
                            "group": {
                                "@_code": "W1"
                            }
                        },
                        {
                            "@_code": "SZ0",
                            "group": {
                                "@_code": "Q1"
                            }
                        },
                        {
                            "@_code": "ZC4",
                            "group": {
                                "@_code": "OC"
                            }
                        },
                        {
                            "@_code": "ZS4",
                            "group": {
                                "@_code": "SQ"
                            }
                        },
                        {
                            "@_code": "ZL4",
                            "group": {
                                "@_code": "0O"
                            }
                        },
                        {
                            "@_code": "ZC2",
                            "group": {
                                "@_code": "OC"
                            }
                        },
                        {
                            "@_code": "OE4",
                            "group": {
                                "@_code": "OK"
                            }
                        },
                        {
                            "@_code": "ZW4",
                            "group": {
                                "@_code": "OW"
                            }
                        },
                        {
                            "@_code": "ZM4",
                            "group": {
                                "@_code": "ML"
                            }
                        },
                        {
                            "@_code": "CZ7",
                            "group": {
                                "@_code": "Y1"
                            }
                        },
                        {
                            "@_code": "KC6",
                            "group": {
                                "@_code": "K3"
                            }
                        },
                        {
                            "@_code": "WC3",
                            "group": {
                                "@_code": "W1"
                            }
                        },
                        {
                            "@_code": "ZL2",
                            "group": {
                                "@_code": "0O"
                            }
                        },
                        {
                            "@_code": "CK3",
                            "group": {
                                "@_code": "K3"
                            }
                        },
                        {
                            "@_code": "CZ8",
                            "group": {
                                "@_code": "Y1"
                            }
                        },
                        {
                            "@_code": "OE2",
                            "group": {
                                "@_code": "OK"
                            }
                        },
                        {
                            "@_code": "SZK",
                            "group": {
                                "@_code": "Q1"
                            }
                        },
                        {
                            "@_code": "OZR",
                            "group": {
                                "@_code": "0O"
                            }
                        },
                        {
                            "@_code": "WCM",
                            "group": {
                                "@_code": "W1"
                            }
                        },
                        {
                            "@_code": "ZS2",
                            "group": {
                                "@_code": "SQ"
                            }
                        },
                        {
                            "@_code": "CZ6",
                            "group": {
                                "@_code": "Y1"
                            }
                        },
                        {
                            "@_code": "KCR",
                            "group": {
                                "@_code": "K3"
                            }
                        },
                        {
                            "@_code": "ZM2",
                            "group": {
                                "@_code": "ML"
                            }
                        },
                        {
                            "@_code": "SZ5",
                            "group": {
                                "@_code": "Q1"
                            }
                        },
                        {
                            "@_code": "ZCW",
                            "group": {
                                "@_code": "ML"
                            }
                        },
                        {
                            "@_code": "BWO",
                            "group": {
                                "@_code": "SQ"
                            }
                        },
                        {
                            "@_code": "OCD",
                            "group": {
                                "@_code": "OK"
                            }
                        },
                        {
                            "@_code": "OSD",
                            "group": {
                                "@_code": "X1"
                            }
                        },
                        {
                            "@_code": "OLD",
                            "group": {
                                "@_code": "Y1"
                            }
                        },
                        {
                            "@_code": "BSO",
                            "group": {
                                "@_code": "CG"
                            }
                        },
                        {
                            "@_code": "OZC",
                            "group": {
                                "@_code": "CY"
                            }
                        },
                        {
                            "@_code": "OZS",
                            "group": {
                                "@_code": "PZ"
                            }
                        },
                        {
                            "@_code": "ZC1",
                            "group": {
                                "@_code": "CY"
                            }
                        },
                        {
                            "@_code": "OZW",
                            "group": {
                                "@_code": "WZ"
                            }
                        },
                        {
                            "@_code": "OZM",
                            "group": {
                                "@_code": "MY"
                            }
                        },
                        {
                            "@_code": "OKE",
                            "group": {
                                "@_code": "1G"
                            }
                        },
                        {
                            "@_code": "OZL",
                            "group": {
                                "@_code": "OZ"
                            }
                        },
                        {
                            "@_code": "OZO",
                            "group": {
                                "@_code": "O9"
                            }
                        },
                        {
                            "@_code": "ZW2",
                            "group": {
                                "@_code": "WZ"
                            }
                        },
                        {
                            "@_code": "ZW1",
                            "group": {
                                "@_code": "WZ"
                            }
                        },
                        {
                            "@_code": "CZ6",
                            "group": {
                                "@_code": "Y2"
                            }
                        },
                        {
                            "@_code": "OCD",
                            "group": {
                                "@_code": "CY"
                            }
                        },
                        {
                            "@_code": "ZS1",
                            "group": {
                                "@_code": "PZ"
                            }
                        },
                        {
                            "@_code": "OSD",
                            "group": {
                                "@_code": "PZ"
                            }
                        },
                        {
                            "@_code": "OWD",
                            "group": {
                                "@_code": "WZ"
                            }
                        },
                        {
                            "@_code": "ZC2",
                            "group": {
                                "@_code": "CY"
                            }
                        },
                        {
                            "@_code": "KCW",
                            "group": {
                                "@_code": "KX"
                            }
                        },
                        {
                            "@_code": "ZC4",
                            "group": {
                                "@_code": "CY"
                            }
                        },
                        {
                            "@_code": "ZS2",
                            "group": {
                                "@_code": "PZ"
                            }
                        },
                        {
                            "@_code": "CZW",
                            "group": {
                                "@_code": "Z2"
                            }
                        },
                        {
                            "@_code": "CZC",
                            "group": {
                                "@_code": "Y2"
                            }
                        },
                        {
                            "@_code": "ZS4",
                            "group": {
                                "@_code": "PZ"
                            }
                        },
                        {
                            "@_code": "OZR",
                            "group": {
                                "@_code": "R6"
                            }
                        },
                        {
                            "@_code": "CZ7",
                            "group": {
                                "@_code": "Y2"
                            }
                        },
                        {
                            "@_code": "KZC",
                            "group": {
                                "@_code": "K4"
                            }
                        },
                        {
                            "@_code": "WCM",
                            "group": {
                                "@_code": "Z2"
                            }
                        },
                        {
                            "@_code": "ZM2",
                            "group": {
                                "@_code": "MY"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "341H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "341IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.65",
                            "host-ip": [
                                "205.209.221.74",
                                "205.209.223.74"
                            ],
                            "port": 14341,
                            "feed": "A"
                        },
                        {
                            "@_id": "341IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.65",
                            "host-ip": [
                                "205.209.211.74",
                                "205.209.212.74"
                            ],
                            "port": 15341,
                            "feed": "B"
                        },
                        {
                            "@_id": "341NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.107",
                            "host-ip": [
                                "205.209.222.81",
                                "205.209.222.75"
                            ],
                            "port": 14341,
                            "feed": "A"
                        },
                        {
                            "@_id": "341NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.107",
                            "host-ip": [
                                "205.209.214.50",
                                "205.209.213.50"
                            ],
                            "port": 15341,
                            "feed": "B"
                        },
                        {
                            "@_id": "341SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.86",
                            "host-ip": [
                                "205.209.222.79",
                                "205.209.222.83"
                            ],
                            "port": 14341,
                            "feed": "A"
                        },
                        {
                            "@_id": "341SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.86",
                            "host-ip": [
                                "205.209.214.54",
                                "205.209.213.54"
                            ],
                            "port": 15341,
                            "feed": "B"
                        },
                        {
                            "@_id": "341SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.30",
                            "host-ip": [
                                "205.209.222.113",
                                "205.209.222.112"
                            ],
                            "port": 23341,
                            "feed": "A"
                        },
                        {
                            "@_id": "341SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.93",
                            "host-ip": [
                                "205.209.213.66",
                                "205.209.214.66"
                            ],
                            "port": 22341,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 342,
                "@_label": "CBOT Globex Equity Index Futures",
                "products": {
                    "product": [
                        {
                            "@_code": "DTT",
                            "group": {
                                "@_code": "DH"
                            }
                        },
                        {
                            "@_code": "DTR",
                            "group": {
                                "@_code": "0B"
                            }
                        },
                        {
                            "@_code": "YMT",
                            "group": {
                                "@_code": "DB"
                            }
                        },
                        {
                            "@_code": "YM",
                            "group": {
                                "@_code": "YM"
                            }
                        },
                        {
                            "@_code": "RX",
                            "group": {
                                "@_code": "RX"
                            }
                        },
                        {
                            "@_code": "MYM",
                            "group": {
                                "@_code": "YM"
                            }
                        },
                        {
                            "@_code": "REX",
                            "group": {
                                "@_code": "TO"
                            }
                        },
                        {
                            "@_code": "0YM",
                            "group": {
                                "@_code": "$W"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "342H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "342IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.66",
                            "host-ip": [
                                "205.209.221.75",
                                "205.209.223.75"
                            ],
                            "port": 14342,
                            "feed": "A"
                        },
                        {
                            "@_id": "342IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.66",
                            "host-ip": [
                                "205.209.212.75",
                                "205.209.211.75"
                            ],
                            "port": 15342,
                            "feed": "B"
                        },
                        {
                            "@_id": "342NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.108",
                            "host-ip": [
                                "205.209.222.73",
                                "205.209.222.85"
                            ],
                            "port": 14342,
                            "feed": "A"
                        },
                        {
                            "@_id": "342NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.108",
                            "host-ip": [
                                "205.209.213.48",
                                "205.209.214.48"
                            ],
                            "port": 15342,
                            "feed": "B"
                        },
                        {
                            "@_id": "342SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.87",
                            "host-ip": [
                                "205.209.222.77",
                                "205.209.222.87"
                            ],
                            "port": 14342,
                            "feed": "A"
                        },
                        {
                            "@_id": "342SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.87",
                            "host-ip": [
                                "205.209.214.52",
                                "205.209.213.52"
                            ],
                            "port": 15342,
                            "feed": "B"
                        },
                        {
                            "@_id": "342SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.31",
                            "host-ip": [
                                "205.209.222.108",
                                "205.209.222.109"
                            ],
                            "port": 23342,
                            "feed": "A"
                        },
                        {
                            "@_id": "342SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.94",
                            "host-ip": [
                                "205.209.213.64",
                                "205.209.214.64"
                            ],
                            "port": 22342,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 343,
                "@_label": "CBOT Globex Equity Index Options",
                "products": {
                    "product": [
                        {
                            "@_code": "YM3",
                            "group": {
                                "@_code": "OL"
                            }
                        },
                        {
                            "@_code": "YM1",
                            "group": {
                                "@_code": "OL"
                            }
                        },
                        {
                            "@_code": "YM2",
                            "group": {
                                "@_code": "OL"
                            }
                        },
                        {
                            "@_code": "OYM",
                            "group": {
                                "@_code": "C9"
                            }
                        },
                        {
                            "@_code": "EYM",
                            "group": {
                                "@_code": "OL"
                            }
                        },
                        {
                            "@_code": "0OY",
                            "group": {
                                "@_code": "#F"
                            }
                        },
                        {
                            "@_code": "OYM",
                            "group": {
                                "@_code": "M5"
                            }
                        },
                        {
                            "@_code": "YM3",
                            "group": {
                                "@_code": "M5"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "343H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "343IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.67",
                            "host-ip": [
                                "205.209.223.75",
                                "205.209.221.75"
                            ],
                            "port": 14343,
                            "feed": "A"
                        },
                        {
                            "@_id": "343IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.67",
                            "host-ip": [
                                "205.209.211.75",
                                "205.209.212.75"
                            ],
                            "port": 15343,
                            "feed": "B"
                        },
                        {
                            "@_id": "343NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.109",
                            "host-ip": [
                                "205.209.222.73",
                                "205.209.222.85"
                            ],
                            "port": 14343,
                            "feed": "A"
                        },
                        {
                            "@_id": "343NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.109",
                            "host-ip": [
                                "205.209.214.48",
                                "205.209.213.48"
                            ],
                            "port": 15343,
                            "feed": "B"
                        },
                        {
                            "@_id": "343SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.88",
                            "host-ip": [
                                "205.209.222.87",
                                "205.209.222.77"
                            ],
                            "port": 14343,
                            "feed": "A"
                        },
                        {
                            "@_id": "343SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.88",
                            "host-ip": [
                                "205.209.214.52",
                                "205.209.213.52"
                            ],
                            "port": 15343,
                            "feed": "B"
                        },
                        {
                            "@_id": "343SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.32",
                            "host-ip": [
                                "205.209.222.109",
                                "205.209.222.108"
                            ],
                            "port": 23343,
                            "feed": "A"
                        },
                        {
                            "@_id": "343SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.95",
                            "host-ip": [
                                "205.209.214.64",
                                "205.209.213.64"
                            ],
                            "port": 22343,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 344,
                "@_label": "CBOT Globex Interest Rate Futures",
                "products": {
                    "product": [
                        {
                            "@_code": "TN",
                            "group": {
                                "@_code": "Z1"
                            }
                        },
                        {
                            "@_code": "ZB",
                            "group": {
                                "@_code": "ZB"
                            }
                        },
                        {
                            "@_code": "ZN",
                            "group": {
                                "@_code": "ZN"
                            }
                        },
                        {
                            "@_code": "UB",
                            "group": {
                                "@_code": "ZU"
                            }
                        },
                        {
                            "@_code": "B2A",
                            "group": {
                                "@_code": 6
                            }
                        },
                        {
                            "@_code": "LIB",
                            "group": {
                                "@_code": "E6"
                            }
                        },
                        {
                            "@_code": "F1A",
                            "group": {
                                "@_code": 6
                            }
                        },
                        {
                            "@_code": "FYA",
                            "group": {
                                "@_code": "SA"
                            }
                        },
                        {
                            "@_code": "YIL",
                            "group": {
                                "@_code": "EK"
                            }
                        },
                        {
                            "@_code": "T1A",
                            "group": {
                                "@_code": 6
                            }
                        },
                        {
                            "@_code": "LIW",
                            "group": {
                                "@_code": "E1"
                            }
                        },
                        {
                            "@_code": "LIC",
                            "group": {
                                "@_code": "EI"
                            }
                        },
                        {
                            "@_code": "TYA",
                            "group": {
                                "@_code": "TI"
                            }
                        },
                        {
                            "@_code": "UBA",
                            "group": {
                                "@_code": "TI"
                            }
                        },
                        {
                            "@_code": "TYA",
                            "group": {
                                "@_code": "SH"
                            }
                        },
                        {
                            "@_code": "TNA",
                            "group": {
                                "@_code": "TI"
                            }
                        },
                        {
                            "@_code": "UTA",
                            "group": {
                                "@_code": "TI"
                            }
                        },
                        {
                            "@_code": "U2A",
                            "group": {
                                "@_code": 6
                            }
                        },
                        {
                            "@_code": "FYA",
                            "group": {
                                "@_code": "TI"
                            }
                        },
                        {
                            "@_code": "TVA",
                            "group": {
                                "@_code": "SR"
                            }
                        },
                        {
                            "@_code": "F1U",
                            "group": {
                                "@_code": "SF"
                            }
                        },
                        {
                            "@_code": "YIC",
                            "group": {
                                "@_code": "EB"
                            }
                        },
                        {
                            "@_code": "S1U",
                            "group": {
                                "@_code": "S7"
                            }
                        },
                        {
                            "@_code": "B1U",
                            "group": {
                                "@_code": "SM"
                            }
                        },
                        {
                            "@_code": "ZF",
                            "group": {
                                "@_code": "ZF"
                            }
                        },
                        {
                            "@_code": "N1U",
                            "group": {
                                "@_code": "SN"
                            }
                        },
                        {
                            "@_code": "T1U",
                            "group": {
                                "@_code": "SJ"
                            }
                        },
                        {
                            "@_code": "YID",
                            "group": {
                                "@_code": "EB"
                            }
                        },
                        {
                            "@_code": "U1A",
                            "group": {
                                "@_code": 6
                            }
                        },
                        {
                            "@_code": "EDW",
                            "group": {
                                "@_code": "ER"
                            }
                        },
                        {
                            "@_code": "YIY",
                            "group": {
                                "@_code": "EJ"
                            }
                        },
                        {
                            "@_code": "EIW",
                            "group": {
                                "@_code": "ER"
                            }
                        },
                        {
                            "@_code": "EID",
                            "group": {
                                "@_code": "ER"
                            }
                        },
                        {
                            "@_code": "YIW",
                            "group": {
                                "@_code": "EB"
                            }
                        },
                        {
                            "@_code": "ECW",
                            "group": {
                                "@_code": "ER"
                            }
                        },
                        {
                            "@_code": "ETC",
                            "group": {
                                "@_code": "ER"
                            }
                        },
                        {
                            "@_code": "YIA",
                            "group": {
                                "@_code": "EB"
                            }
                        },
                        {
                            "@_code": "YII",
                            "group": {
                                "@_code": "EJ"
                            }
                        },
                        {
                            "@_code": "TNA",
                            "group": {
                                "@_code": "SX"
                            }
                        },
                        {
                            "@_code": "N1A",
                            "group": {
                                "@_code": 6
                            }
                        },
                        {
                            "@_code": "EIC",
                            "group": {
                                "@_code": "ER"
                            }
                        },
                        {
                            "@_code": "YIT",
                            "group": {
                                "@_code": "EB"
                            }
                        },
                        {
                            "@_code": "EBB",
                            "group": {
                                "@_code": "ER"
                            }
                        },
                        {
                            "@_code": "EEE",
                            "group": {
                                "@_code": "ER"
                            }
                        },
                        {
                            "@_code": "B1A",
                            "group": {
                                "@_code": 6
                            }
                        },
                        {
                            "@_code": "EAT",
                            "group": {
                                "@_code": "ER"
                            }
                        },
                        {
                            "@_code": "EDI",
                            "group": {
                                "@_code": "ER"
                            }
                        },
                        {
                            "@_code": "YIE",
                            "group": {
                                "@_code": "EK"
                            }
                        },
                        {
                            "@_code": "YIO",
                            "group": {
                                "@_code": "EK"
                            }
                        },
                        {
                            "@_code": "UT1",
                            "group": {
                                "@_code": 6
                            }
                        },
                        {
                            "@_code": "YIB",
                            "group": {
                                "@_code": "EJ"
                            }
                        },
                        {
                            "@_code": "EIY",
                            "group": {
                                "@_code": "ER"
                            }
                        },
                        {
                            "@_code": "UTA",
                            "group": {
                                "@_code": "S3"
                            }
                        },
                        {
                            "@_code": "ETW",
                            "group": {
                                "@_code": "ER"
                            }
                        },
                        {
                            "@_code": "UBB",
                            "group": {
                                "@_code": "SZ"
                            }
                        },
                        {
                            "@_code": "EYY",
                            "group": {
                                "@_code": "ER"
                            }
                        },
                        {
                            "@_code": "UTB",
                            "group": {
                                "@_code": "S3"
                            }
                        },
                        {
                            "@_code": "UBA",
                            "group": {
                                "@_code": "SZ"
                            }
                        },
                        {
                            "@_code": "T1S",
                            "group": {
                                "@_code": "SJ"
                            }
                        },
                        {
                            "@_code": "E1U",
                            "group": {
                                "@_code": "S2"
                            }
                        },
                        {
                            "@_code": "N1S",
                            "group": {
                                "@_code": "SN"
                            }
                        },
                        {
                            "@_code": "F1S",
                            "group": {
                                "@_code": "SF"
                            }
                        },
                        {
                            "@_code": "E1S",
                            "group": {
                                "@_code": "S2"
                            }
                        },
                        {
                            "@_code": "LIL",
                            "group": {
                                "@_code": "E8"
                            }
                        },
                        {
                            "@_code": "LIO",
                            "group": {
                                "@_code": "E8"
                            }
                        },
                        {
                            "@_code": "LIY",
                            "group": {
                                "@_code": "E7"
                            }
                        },
                        {
                            "@_code": "LII",
                            "group": {
                                "@_code": "E7"
                            }
                        },
                        {
                            "@_code": "LIE",
                            "group": {
                                "@_code": "EC"
                            }
                        },
                        {
                            "@_code": "LID",
                            "group": {
                                "@_code": "E1"
                            }
                        },
                        {
                            "@_code": "LIT",
                            "group": {
                                "@_code": "EI"
                            }
                        },
                        {
                            "@_code": "Z3N",
                            "group": {
                                "@_code": "Z3"
                            }
                        },
                        {
                            "@_code": "B1S",
                            "group": {
                                "@_code": "SM"
                            }
                        },
                        {
                            "@_code": "S1S",
                            "group": {
                                "@_code": "S7"
                            }
                        },
                        {
                            "@_code": "ZT",
                            "group": {
                                "@_code": "ZT"
                            }
                        },
                        {
                            "@_code": "00N",
                            "group": {
                                "@_code": "$T"
                            }
                        },
                        {
                            "@_code": "ETV",
                            "group": {
                                "@_code": "EV"
                            }
                        },
                        {
                            "@_code": "FIX",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "TAF",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "NOL",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "EFV",
                            "group": {
                                "@_code": "EV"
                            }
                        },
                        {
                            "@_code": "FOL",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "NCB",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "NON",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "TYT",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "NBY",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "TOU",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "FOB",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "TUN",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "EVN",
                            "group": {
                                "@_code": "EV"
                            }
                        },
                        {
                            "@_code": "FIT",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "TYX",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "TUB",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "NIB",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "ETR",
                            "group": {
                                "@_code": "EV"
                            }
                        },
                        {
                            "@_code": "FYN",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "FYT",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "EFN",
                            "group": {
                                "@_code": "EV"
                            }
                        },
                        {
                            "@_code": "TOF",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "TUT",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "TUF",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "FNU",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "ETN",
                            "group": {
                                "@_code": "EV"
                            }
                        },
                        {
                            "@_code": "TUX",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "NUB",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "EOF",
                            "group": {
                                "@_code": "EV"
                            }
                        },
                        {
                            "@_code": "TUL",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "TFY",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "NOB",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "BOB",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "BUB",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "TEX",
                            "group": {
                                "@_code": "IV"
                            }
                        },
                        {
                            "@_code": "TOB",
                            "group": {
                                "@_code": "IV"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "344H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "344IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.68",
                            "host-ip": [
                                "205.209.223.81",
                                "205.209.221.81"
                            ],
                            "port": 14344,
                            "feed": "A"
                        },
                        {
                            "@_id": "344IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.68",
                            "host-ip": [
                                "205.209.211.81",
                                "205.209.212.81"
                            ],
                            "port": 15344,
                            "feed": "B"
                        },
                        {
                            "@_id": "344NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.110",
                            "host-ip": [
                                "205.209.222.75",
                                "205.209.222.81"
                            ],
                            "port": 14344,
                            "feed": "A"
                        },
                        {
                            "@_id": "344NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.110",
                            "host-ip": [
                                "205.209.214.50",
                                "205.209.213.50"
                            ],
                            "port": 15344,
                            "feed": "B"
                        },
                        {
                            "@_id": "344SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.89",
                            "host-ip": [
                                "205.209.222.83",
                                "205.209.222.79"
                            ],
                            "port": 14344,
                            "feed": "A"
                        },
                        {
                            "@_id": "344SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.89",
                            "host-ip": [
                                "205.209.214.54",
                                "205.209.213.54"
                            ],
                            "port": 15344,
                            "feed": "B"
                        },
                        {
                            "@_id": "344SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.33",
                            "host-ip": [
                                "205.209.222.113",
                                "205.209.222.112"
                            ],
                            "port": 23344,
                            "feed": "A"
                        },
                        {
                            "@_id": "344SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.96",
                            "host-ip": [
                                "205.209.213.66",
                                "205.209.214.66"
                            ],
                            "port": 22344,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 345,
                "@_label": "CBOT Globex Interest Rate Options",
                "products": {
                    "product": [
                        {
                            "@_code": "OZN",
                            "group": {
                                "@_code": "TE"
                            }
                        },
                        {
                            "@_code": "ZT1",
                            "group": {
                                "@_code": "N2"
                            }
                        },
                        {
                            "@_code": "OTN",
                            "group": {
                                "@_code": "T1"
                            }
                        },
                        {
                            "@_code": "OZF",
                            "group": {
                                "@_code": "0N"
                            }
                        },
                        {
                            "@_code": "OZB",
                            "group": {
                                "@_code": "UZ"
                            }
                        },
                        {
                            "@_code": "UB1",
                            "group": {
                                "@_code": "UB"
                            }
                        },
                        {
                            "@_code": "TN1",
                            "group": {
                                "@_code": "T1"
                            }
                        },
                        {
                            "@_code": "ZN1",
                            "group": {
                                "@_code": "TE"
                            }
                        },
                        {
                            "@_code": "OUB",
                            "group": {
                                "@_code": "UB"
                            }
                        },
                        {
                            "@_code": "WB2",
                            "group": {
                                "@_code": "UZ"
                            }
                        },
                        {
                            "@_code": "WU2",
                            "group": {
                                "@_code": "UB"
                            }
                        },
                        {
                            "@_code": "WX2",
                            "group": {
                                "@_code": "T1"
                            }
                        },
                        {
                            "@_code": "OZT",
                            "group": {
                                "@_code": "N2"
                            }
                        },
                        {
                            "@_code": "ZB1",
                            "group": {
                                "@_code": "UZ"
                            }
                        },
                        {
                            "@_code": "OZQ",
                            "group": {
                                "@_code": "CF"
                            }
                        },
                        {
                            "@_code": "WF2",
                            "group": {
                                "@_code": "0N"
                            }
                        },
                        {
                            "@_code": "0YN",
                            "group": {
                                "@_code": "$U"
                            }
                        },
                        {
                            "@_code": "ZQ6",
                            "group": {
                                "@_code": "C6"
                            }
                        },
                        {
                            "@_code": "WY2",
                            "group": {
                                "@_code": "TE"
                            }
                        },
                        {
                            "@_code": "WB3",
                            "group": {
                                "@_code": "UZ"
                            }
                        },
                        {
                            "@_code": "ZF1",
                            "group": {
                                "@_code": "0N"
                            }
                        },
                        {
                            "@_code": "WX3",
                            "group": {
                                "@_code": "T1"
                            }
                        },
                        {
                            "@_code": "WF3",
                            "group": {
                                "@_code": "0N"
                            }
                        },
                        {
                            "@_code": "ZQ1",
                            "group": {
                                "@_code": "C7"
                            }
                        },
                        {
                            "@_code": "WY3",
                            "group": {
                                "@_code": "TE"
                            }
                        },
                        {
                            "@_code": "WT3",
                            "group": {
                                "@_code": "N2"
                            }
                        },
                        {
                            "@_code": "WU3",
                            "group": {
                                "@_code": "UB"
                            }
                        },
                        {
                            "@_code": "WT2",
                            "group": {
                                "@_code": "N2"
                            }
                        },
                        {
                            "@_code": "UB4",
                            "group": {
                                "@_code": "UB"
                            }
                        },
                        {
                            "@_code": "ZB4",
                            "group": {
                                "@_code": "UZ"
                            }
                        },
                        {
                            "@_code": "WB1",
                            "group": {
                                "@_code": "UZ"
                            }
                        },
                        {
                            "@_code": "TN4",
                            "group": {
                                "@_code": "T1"
                            }
                        },
                        {
                            "@_code": "WU1",
                            "group": {
                                "@_code": "UB"
                            }
                        },
                        {
                            "@_code": "WY1",
                            "group": {
                                "@_code": "TE"
                            }
                        },
                        {
                            "@_code": "WT1",
                            "group": {
                                "@_code": "N2"
                            }
                        },
                        {
                            "@_code": "WX1",
                            "group": {
                                "@_code": "T1"
                            }
                        },
                        {
                            "@_code": "ZF4",
                            "group": {
                                "@_code": "0N"
                            }
                        },
                        {
                            "@_code": "ZN4",
                            "group": {
                                "@_code": "TE"
                            }
                        },
                        {
                            "@_code": "WF1",
                            "group": {
                                "@_code": "0N"
                            }
                        },
                        {
                            "@_code": "ZT4",
                            "group": {
                                "@_code": "N2"
                            }
                        },
                        {
                            "@_code": "ZN2",
                            "group": {
                                "@_code": "TE"
                            }
                        },
                        {
                            "@_code": "UB2",
                            "group": {
                                "@_code": "UB"
                            }
                        },
                        {
                            "@_code": "ZF2",
                            "group": {
                                "@_code": "0N"
                            }
                        },
                        {
                            "@_code": "TN2",
                            "group": {
                                "@_code": "T1"
                            }
                        },
                        {
                            "@_code": "ZT2",
                            "group": {
                                "@_code": "N2"
                            }
                        },
                        {
                            "@_code": "ZB2",
                            "group": {
                                "@_code": "UZ"
                            }
                        },
                        {
                            "@_code": "OZB",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "OZF",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "OZN",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "WY1",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "ZB1",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "ZB2",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "WB1",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "ZN2",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "ZN1",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "ZN4",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "ZF1",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "WB2",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "ZB4",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "OZT",
                            "group": {
                                "@_code": "2$"
                            }
                        },
                        {
                            "@_code": "WY2",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "OUB",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "ZF2",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "WF1",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "OTN",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "WB3",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "WY3",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "WF3",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "WF2",
                            "group": {
                                "@_code": "T$"
                            }
                        },
                        {
                            "@_code": "ZF4",
                            "group": {
                                "@_code": "T$"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "345H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "345IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.69",
                            "host-ip": [
                                "205.209.223.76",
                                "205.209.221.76"
                            ],
                            "port": 14345,
                            "feed": "A"
                        },
                        {
                            "@_id": "345IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.69",
                            "host-ip": [
                                "205.209.211.76",
                                "205.209.212.76"
                            ],
                            "port": 15345,
                            "feed": "B"
                        },
                        {
                            "@_id": "345NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.111",
                            "host-ip": [
                                "205.209.222.81",
                                "205.209.222.75"
                            ],
                            "port": 14345,
                            "feed": "A"
                        },
                        {
                            "@_id": "345NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.111",
                            "host-ip": [
                                "205.209.213.50",
                                "205.209.214.50"
                            ],
                            "port": 15345,
                            "feed": "B"
                        },
                        {
                            "@_id": "345SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.90",
                            "host-ip": [
                                "205.209.222.83",
                                "205.209.222.79"
                            ],
                            "port": 14345,
                            "feed": "A"
                        },
                        {
                            "@_id": "345SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.90",
                            "host-ip": [
                                "205.209.214.54",
                                "205.209.213.54"
                            ],
                            "port": 15345,
                            "feed": "B"
                        },
                        {
                            "@_id": "345SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.34",
                            "host-ip": [
                                "205.209.222.113",
                                "205.209.222.112"
                            ],
                            "port": 23345,
                            "feed": "A"
                        },
                        {
                            "@_id": "345SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.97",
                            "host-ip": [
                                "205.209.213.66",
                                "205.209.214.66"
                            ],
                            "port": 22345,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 348,
                "@_label": "CBOT Globex Interest Rate Futures II",
                "products": {
                    "product": [
                        {
                            "@_code": "ZQ",
                            "group": {
                                "@_code": "ZQ"
                            }
                        },
                        {
                            "@_code": "0ZQ",
                            "group": {
                                "@_code": "#3"
                            }
                        },
                        {
                            "@_code": "ZQ",
                            "group": {
                                "@_code": "SY"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "348H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "348IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.71",
                            "host-ip": [
                                "205.209.223.80",
                                "205.209.221.80"
                            ],
                            "port": 14348,
                            "feed": "A"
                        },
                        {
                            "@_id": "348IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.71",
                            "host-ip": [
                                "205.209.211.80",
                                "205.209.212.80"
                            ],
                            "port": 15348,
                            "feed": "B"
                        },
                        {
                            "@_id": "348NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.113",
                            "host-ip": [
                                "205.209.222.85",
                                "205.209.222.73"
                            ],
                            "port": 14348,
                            "feed": "A"
                        },
                        {
                            "@_id": "348NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.113",
                            "host-ip": [
                                "205.209.213.48",
                                "205.209.214.48"
                            ],
                            "port": 15348,
                            "feed": "B"
                        },
                        {
                            "@_id": "348SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.92",
                            "host-ip": [
                                "205.209.222.77",
                                "205.209.222.87"
                            ],
                            "port": 14348,
                            "feed": "A"
                        },
                        {
                            "@_id": "348SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.92",
                            "host-ip": [
                                "205.209.214.52",
                                "205.209.213.52"
                            ],
                            "port": 15348,
                            "feed": "B"
                        },
                        {
                            "@_id": "348SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.39",
                            "host-ip": [
                                "205.209.222.108",
                                "205.209.222.109"
                            ],
                            "port": 23348,
                            "feed": "A"
                        },
                        {
                            "@_id": "348SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.102",
                            "host-ip": [
                                "205.209.214.64",
                                "205.209.213.64"
                            ],
                            "port": 22348,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 360,
                "@_label": "COMEX Globex Futures",
                "products": {
                    "product": [
                        {
                            "@_code": "0GC",
                            "group": {
                                "@_code": "#8"
                            }
                        },
                        {
                            "@_code": "HG",
                            "group": {
                                "@_code": "HG"
                            }
                        },
                        {
                            "@_code": "QC",
                            "group": {
                                "@_code": "HG"
                            }
                        },
                        {
                            "@_code": "ALI",
                            "group": {
                                "@_code": "AL"
                            }
                        },
                        {
                            "@_code": "GC",
                            "group": {
                                "@_code": "GC"
                            }
                        },
                        {
                            "@_code": "SGU",
                            "group": {
                                "@_code": "AG"
                            }
                        },
                        {
                            "@_code": "UX",
                            "group": {
                                "@_code": "UX"
                            }
                        },
                        {
                            "@_code": "MGC",
                            "group": {
                                "@_code": "GC"
                            }
                        },
                        {
                            "@_code": "SIT",
                            "group": {
                                "@_code": "MT"
                            }
                        },
                        {
                            "@_code": "QO",
                            "group": {
                                "@_code": "GC"
                            }
                        },
                        {
                            "@_code": "ZNC",
                            "group": {
                                "@_code": "ZX"
                            }
                        },
                        {
                            "@_code": "GCK",
                            "group": {
                                "@_code": "GC"
                            }
                        },
                        {
                            "@_code": "SIL",
                            "group": {
                                "@_code": "SI"
                            }
                        },
                        {
                            "@_code": "SSP",
                            "group": {
                                "@_code": "SL"
                            }
                        },
                        {
                            "@_code": "4GC",
                            "group": {
                                "@_code": "GC"
                            }
                        },
                        {
                            "@_code": "SI",
                            "group": {
                                "@_code": "SI"
                            }
                        },
                        {
                            "@_code": "GSP",
                            "group": {
                                "@_code": "GL"
                            }
                        },
                        {
                            "@_code": "AUP",
                            "group": {
                                "@_code": "ST"
                            }
                        },
                        {
                            "@_code": "GCT",
                            "group": {
                                "@_code": "TG"
                            }
                        },
                        {
                            "@_code": "MJP",
                            "group": {
                                "@_code": "ST"
                            }
                        },
                        {
                            "@_code": "SGC",
                            "group": {
                                "@_code": "AG"
                            }
                        },
                        {
                            "@_code": "QI",
                            "group": {
                                "@_code": "SI"
                            }
                        },
                        {
                            "@_code": "GSR",
                            "group": {
                                "@_code": "GV"
                            }
                        },
                        {
                            "@_code": "MGT",
                            "group": {
                                "@_code": "TG"
                            }
                        },
                        {
                            "@_code": "GC",
                            "group": {
                                "@_code": "GL"
                            }
                        },
                        {
                            "@_code": "HGF",
                            "group": {
                                "@_code": "TR"
                            }
                        },
                        {
                            "@_code": "LED",
                            "group": {
                                "@_code": "LD"
                            }
                        },
                        {
                            "@_code": "GPS",
                            "group": {
                                "@_code": "GP"
                            }
                        },
                        {
                            "@_code": "TIO",
                            "group": {
                                "@_code": "IO"
                            }
                        },
                        {
                            "@_code": "HRC",
                            "group": {
                                "@_code": "HR"
                            }
                        },
                        {
                            "@_code": "SI",
                            "group": {
                                "@_code": "SL"
                            }
                        },
                        {
                            "@_code": "TIC",
                            "group": {
                                "@_code": "MA"
                            }
                        },
                        {
                            "@_code": "EDP",
                            "group": {
                                "@_code": "ST"
                            }
                        },
                        {
                            "@_code": "HGT",
                            "group": {
                                "@_code": "HT"
                            }
                        },
                        {
                            "@_code": "AEP",
                            "group": {
                                "@_code": "ST"
                            }
                        },
                        {
                            "@_code": "CUP",
                            "group": {
                                "@_code": "ST"
                            }
                        },
                        {
                            "@_code": "SHR",
                            "group": {
                                "@_code": "ST"
                            }
                        },
                        {
                            "@_code": "GCD",
                            "group": {
                                "@_code": "GM"
                            }
                        },
                        {
                            "@_code": "HRP",
                            "group": {
                                "@_code": "ST"
                            }
                        },
                        {
                            "@_code": "HGS",
                            "group": {
                                "@_code": "HG"
                            }
                        },
                        {
                            "@_code": "HDG",
                            "group": {
                                "@_code": "HD"
                            }
                        },
                        {
                            "@_code": "A38",
                            "group": {
                                "@_code": "ST"
                            }
                        },
                        {
                            "@_code": "EHR",
                            "group": {
                                "@_code": "MA"
                            }
                        },
                        {
                            "@_code": "BUS",
                            "group": {
                                "@_code": "MA"
                            }
                        },
                        {
                            "@_code": "ALB",
                            "group": {
                                "@_code": "ST"
                            }
                        },
                        {
                            "@_code": "ALA",
                            "group": {
                                "@_code": "ST"
                            }
                        },
                        {
                            "@_code": "FSF",
                            "group": {
                                "@_code": "MA"
                            }
                        },
                        {
                            "@_code": "HG0",
                            "group": {
                                "@_code": "HT"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "360H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "360IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.192",
                            "host-ip": [
                                "205.209.223.79",
                                "205.209.221.79"
                            ],
                            "port": 14360,
                            "feed": "A"
                        },
                        {
                            "@_id": "360IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.192",
                            "host-ip": [
                                "205.209.212.79",
                                "205.209.211.79"
                            ],
                            "port": 15360,
                            "feed": "B"
                        },
                        {
                            "@_id": "360NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.212",
                            "host-ip": [
                                "205.209.222.74",
                                "205.209.222.86"
                            ],
                            "port": 14360,
                            "feed": "A"
                        },
                        {
                            "@_id": "360NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.212",
                            "host-ip": [
                                "205.209.214.49",
                                "205.209.213.49"
                            ],
                            "port": 15360,
                            "feed": "B"
                        },
                        {
                            "@_id": "360SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.202",
                            "host-ip": [
                                "205.209.222.88",
                                "205.209.222.78"
                            ],
                            "port": 14360,
                            "feed": "A"
                        },
                        {
                            "@_id": "360SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.202",
                            "host-ip": [
                                "205.209.213.53",
                                "205.209.214.53"
                            ],
                            "port": 15360,
                            "feed": "B"
                        },
                        {
                            "@_id": "360SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.21",
                            "host-ip": [
                                "205.209.222.111",
                                "205.209.222.110"
                            ],
                            "port": 23360,
                            "feed": "A"
                        },
                        {
                            "@_id": "360SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.84",
                            "host-ip": [
                                "205.209.213.65",
                                "205.209.214.65"
                            ],
                            "port": 22360,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 361,
                "@_label": "COMEX Globex Options",
                "products": {
                    "product": [
                        {
                            "@_code": "OG",
                            "group": {
                                "@_code": "OG"
                            }
                        },
                        {
                            "@_code": "SO",
                            "group": {
                                "@_code": "SO"
                            }
                        },
                        {
                            "@_code": "OG1",
                            "group": {
                                "@_code": "OG"
                            }
                        },
                        {
                            "@_code": "HXE",
                            "group": {
                                "@_code": "1U"
                            }
                        },
                        {
                            "@_code": "ICT",
                            "group": {
                                "@_code": "I5"
                            }
                        },
                        {
                            "@_code": "HRO",
                            "group": {
                                "@_code": "H1"
                            }
                        },
                        {
                            "@_code": "SO1",
                            "group": {
                                "@_code": "SO"
                            }
                        },
                        {
                            "@_code": "OG3",
                            "group": {
                                "@_code": "OG"
                            }
                        },
                        {
                            "@_code": "OG2",
                            "group": {
                                "@_code": "OG"
                            }
                        },
                        {
                            "@_code": "SO3",
                            "group": {
                                "@_code": "SO"
                            }
                        },
                        {
                            "@_code": "0OG",
                            "group": {
                                "@_code": "#B"
                            }
                        },
                        {
                            "@_code": "H3E",
                            "group": {
                                "@_code": "1U"
                            }
                        },
                        {
                            "@_code": "H1E",
                            "group": {
                                "@_code": "1U"
                            }
                        },
                        {
                            "@_code": "SO2",
                            "group": {
                                "@_code": "SO"
                            }
                        },
                        {
                            "@_code": "OG4",
                            "group": {
                                "@_code": "OG"
                            }
                        },
                        {
                            "@_code": "SO4",
                            "group": {
                                "@_code": "SO"
                            }
                        },
                        {
                            "@_code": "H4E",
                            "group": {
                                "@_code": "1U"
                            }
                        },
                        {
                            "@_code": "H2E",
                            "group": {
                                "@_code": "1U"
                            }
                        },
                        {
                            "@_code": "HRO",
                            "group": {
                                "@_code": "SO"
                            }
                        },
                        {
                            "@_code": "SO",
                            "group": {
                                "@_code": "H1"
                            }
                        },
                        {
                            "@_code": "SO",
                            "group": {
                                "@_code": "OG"
                            }
                        },
                        {
                            "@_code": "OG",
                            "group": {
                                "@_code": "SO"
                            }
                        },
                        {
                            "@_code": "ALO",
                            "group": {
                                "@_code": "AB"
                            }
                        },
                        {
                            "@_code": "SO",
                            "group": {
                                "@_code": "S1"
                            }
                        },
                        {
                            "@_code": "OG",
                            "group": {
                                "@_code": "1Y"
                            }
                        },
                        {
                            "@_code": "HXE",
                            "group": {
                                "@_code": "2U"
                            }
                        },
                        {
                            "@_code": "OG1",
                            "group": {
                                "@_code": "1Y"
                            }
                        },
                        {
                            "@_code": "SO2",
                            "group": {
                                "@_code": "S1"
                            }
                        },
                        {
                            "@_code": "OG2",
                            "group": {
                                "@_code": "1Y"
                            }
                        },
                        {
                            "@_code": "OG4",
                            "group": {
                                "@_code": "1Y"
                            }
                        },
                        {
                            "@_code": "SO1",
                            "group": {
                                "@_code": "S1"
                            }
                        },
                        {
                            "@_code": "OG3",
                            "group": {
                                "@_code": "1Y"
                            }
                        },
                        {
                            "@_code": "SO4",
                            "group": {
                                "@_code": "S1"
                            }
                        },
                        {
                            "@_code": "H1E",
                            "group": {
                                "@_code": "2U"
                            }
                        },
                        {
                            "@_code": "SO3",
                            "group": {
                                "@_code": "S1"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "361H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "361IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.193",
                            "host-ip": [
                                "205.209.221.77",
                                "205.209.223.77"
                            ],
                            "port": 14361,
                            "feed": "A"
                        },
                        {
                            "@_id": "361IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.193",
                            "host-ip": [
                                "205.209.212.77",
                                "205.209.211.77"
                            ],
                            "port": 15361,
                            "feed": "B"
                        },
                        {
                            "@_id": "361NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.213",
                            "host-ip": [
                                "205.209.222.86",
                                "205.209.222.74"
                            ],
                            "port": 14361,
                            "feed": "A"
                        },
                        {
                            "@_id": "361NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.213",
                            "host-ip": [
                                "205.209.213.49",
                                "205.209.214.49"
                            ],
                            "port": 15361,
                            "feed": "B"
                        },
                        {
                            "@_id": "361SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.203",
                            "host-ip": [
                                "205.209.222.88",
                                "205.209.222.78"
                            ],
                            "port": 14361,
                            "feed": "A"
                        },
                        {
                            "@_id": "361SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.203",
                            "host-ip": [
                                "205.209.214.53",
                                "205.209.213.53"
                            ],
                            "port": 15361,
                            "feed": "B"
                        },
                        {
                            "@_id": "361SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.25",
                            "host-ip": [
                                "205.209.222.110",
                                "205.209.222.111"
                            ],
                            "port": 23361,
                            "feed": "A"
                        },
                        {
                            "@_id": "361SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.88",
                            "host-ip": [
                                "205.209.214.65",
                                "205.209.213.65"
                            ],
                            "port": 22361,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 380,
                "@_label": "NYMEX Globex Emissions Futures",
                "products": {
                    "product": [
                        {
                            "@_code": "RGI",
                            "group": {
                                "@_code": "VX"
                            }
                        },
                        {
                            "@_code": "C8C",
                            "group": {
                                "@_code": "VX"
                            }
                        },
                        {
                            "@_code": "C7C",
                            "group": {
                                "@_code": "VX"
                            }
                        },
                        {
                            "@_code": "LCF",
                            "group": {
                                "@_code": "VX"
                            }
                        },
                        {
                            "@_code": "CC0",
                            "group": {
                                "@_code": "VX"
                            }
                        },
                        {
                            "@_code": "0UL",
                            "group": {
                                "@_code": "$O"
                            }
                        },
                        {
                            "@_code": "C9C",
                            "group": {
                                "@_code": "VX"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "380H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "380IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.128",
                            "host-ip": [
                                "205.209.221.77",
                                "205.209.223.77"
                            ],
                            "port": 14380,
                            "feed": "A"
                        },
                        {
                            "@_id": "380IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.128",
                            "host-ip": [
                                "205.209.212.77",
                                "205.209.211.77"
                            ],
                            "port": 15380,
                            "feed": "B"
                        },
                        {
                            "@_id": "380NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.170",
                            "host-ip": [
                                "205.209.222.76",
                                "205.209.222.82"
                            ],
                            "port": 14380,
                            "feed": "A"
                        },
                        {
                            "@_id": "380NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.170",
                            "host-ip": [
                                "205.209.214.51",
                                "205.209.213.51"
                            ],
                            "port": 15380,
                            "feed": "B"
                        },
                        {
                            "@_id": "380SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.149",
                            "host-ip": [
                                "205.209.222.84",
                                "205.209.222.80"
                            ],
                            "port": 14380,
                            "feed": "A"
                        },
                        {
                            "@_id": "380SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.149",
                            "host-ip": [
                                "205.209.214.55",
                                "205.209.213.55"
                            ],
                            "port": 15380,
                            "feed": "B"
                        },
                        {
                            "@_id": "380SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.11",
                            "host-ip": [
                                "205.209.222.114",
                                "205.209.222.115"
                            ],
                            "port": 23380,
                            "feed": "A"
                        },
                        {
                            "@_id": "380SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.74",
                            "host-ip": [
                                "205.209.214.67",
                                "205.209.213.67"
                            ],
                            "port": 22380,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 381,
                "@_label": "NYMEX Globex Emissions Options",
                "products": "",
                "connections": {
                    "connection": [
                        {
                            "@_id": "381H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "381IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.129",
                            "host-ip": [
                                "205.209.223.77",
                                "205.209.221.77"
                            ],
                            "port": 14381,
                            "feed": "A"
                        },
                        {
                            "@_id": "381IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.129",
                            "host-ip": [
                                "205.209.212.77",
                                "205.209.211.77"
                            ],
                            "port": 15381,
                            "feed": "B"
                        },
                        {
                            "@_id": "381NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.171",
                            "host-ip": [
                                "205.209.222.76",
                                "205.209.222.82"
                            ],
                            "port": 14381,
                            "feed": "A"
                        },
                        {
                            "@_id": "381NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.171",
                            "host-ip": [
                                "205.209.214.51",
                                "205.209.213.51"
                            ],
                            "port": 15381,
                            "feed": "B"
                        },
                        {
                            "@_id": "381SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.150",
                            "host-ip": [
                                "205.209.222.80",
                                "205.209.222.84"
                            ],
                            "port": 14381,
                            "feed": "A"
                        },
                        {
                            "@_id": "381SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.150",
                            "host-ip": [
                                "205.209.213.55",
                                "205.209.214.55"
                            ],
                            "port": 15381,
                            "feed": "B"
                        },
                        {
                            "@_id": "381SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.12",
                            "host-ip": [
                                "205.209.222.114",
                                "205.209.222.115"
                            ],
                            "port": 23381,
                            "feed": "A"
                        },
                        {
                            "@_id": "381SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.75",
                            "host-ip": [
                                "205.209.213.67",
                                "205.209.214.67"
                            ],
                            "port": 22381,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 382,
                "@_label": "NYMEX Globex Crude &amp; Crude Refined Futures",
                "products": {
                    "product": [
                        {
                            "@_code": "ANT",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "IBS",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "SMU",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "BDB",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "A6W",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "WTT",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "A59",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "SDM",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "RT",
                            "group": {
                                "@_code": "WS"
                            }
                        },
                        {
                            "@_code": "SMW",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "FCN",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "MPE",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "HOB",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "GBR",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "MME",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "NFG",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "7U",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "HTT",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "GLI",
                            "group": {
                                "@_code": "OP"
                            }
                        },
                        {
                            "@_code": "ABH",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "MPX",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "BZ",
                            "group": {
                                "@_code": "OP"
                            }
                        },
                        {
                            "@_code": "WS",
                            "group": {
                                "@_code": "WS"
                            }
                        },
                        {
                            "@_code": "QU",
                            "group": {
                                "@_code": "CL"
                            }
                        },
                        {
                            "@_code": "NCP",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "RBF",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "CL",
                            "group": {
                                "@_code": "WS"
                            }
                        },
                        {
                            "@_code": "VR",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "RHS",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "CLT",
                            "group": {
                                "@_code": "CT"
                            }
                        },
                        {
                            "@_code": "4U",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "HOT",
                            "group": {
                                "@_code": "CT"
                            }
                        },
                        {
                            "@_code": "CFB",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "FOR",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "NYT",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "GCC",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "CSW",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "SF3",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "CIL",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "B7H",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "NFC",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "QH",
                            "group": {
                                "@_code": "CL"
                            }
                        },
                        {
                            "@_code": "CLS",
                            "group": {
                                "@_code": "TS"
                            }
                        },
                        {
                            "@_code": "CLL",
                            "group": {
                                "@_code": "TM"
                            }
                        },
                        {
                            "@_code": "MFR",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "X0",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "DBT",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "CFC",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "MFB",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "MSE",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "A33",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "28A",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "HGB",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "MHE",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "EO1",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "H7Y",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "QM",
                            "group": {
                                "@_code": "CL"
                            }
                        },
                        {
                            "@_code": "LSW",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "BB",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "CSN",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "CC5",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "A6L",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "RHB",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "EWG",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "HTA",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": 63,
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "HIL",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "BBT",
                            "group": {
                                "@_code": "CT"
                            }
                        },
                        {
                            "@_code": "WCE",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "AUI",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "FBD",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "AE5",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "NLS",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "MB",
                            "group": {
                                "@_code": "IE"
                            }
                        },
                        {
                            "@_code": "RBT",
                            "group": {
                                "@_code": "CT"
                            }
                        },
                        {
                            "@_code": "AYV",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "Z4",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "UNB",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "CA2",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "MEB",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "GCG",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "3A",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "LBB",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "HTI",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "HCL",
                            "group": {
                                "@_code": "IE"
                            }
                        },
                        {
                            "@_code": "STT",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "NYF",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": 38,
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "CMB",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "BH9",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "EGB",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "AFF",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "GFC",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "UPB",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "WCC",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "WCW",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "X7",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "EPN",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "CAY",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "GSW",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "SRB",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "OO6",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "CL",
                            "group": {
                                "@_code": "CL"
                            }
                        },
                        {
                            "@_code": "AKZ",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "8D",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": 88,
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "TW",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "EGN",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "LWB",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "MM",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "A0D",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AEZ",
                            "group": {
                                "@_code": "EE"
                            }
                        },
                        {
                            "@_code": "ABY",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "1T",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "BK",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "BB",
                            "group": {
                                "@_code": "WS"
                            }
                        },
                        {
                            "@_code": "UCM",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "HCL",
                            "group": {
                                "@_code": "HC"
                            }
                        },
                        {
                            "@_code": "1CE",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "GHS",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "3B",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "AKX",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AFH",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "STS",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "CL",
                            "group": {
                                "@_code": "IE"
                            }
                        },
                        {
                            "@_code": "SF1",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "GHB",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "AWQ",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AV0",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "4B",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "STI",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AVK",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "MNC",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "CCM",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "GCI",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "BPU",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "DAB",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "AYX",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "MMF",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "MBM",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "SSW",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "ESS",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "AA6",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "GMS",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "EL1",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "MGH",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "A43",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "A6A",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "CQ",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "GCU",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "7P",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "UMB",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "FO",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "FSS",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "NYG",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "ADB",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "5B",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "MGF",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": 29,
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "B1",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "8W",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "AZ5",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "4V",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "Z1B",
                            "group": {
                                "@_code": "EE"
                            }
                        },
                        {
                            "@_code": "EP1",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "GCB",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "GMB",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "A6B",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "A1W",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "CBC",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "AVZ",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "8S",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "LPS",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "MJB",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "ZXY",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "RB",
                            "group": {
                                "@_code": "CL"
                            }
                        },
                        {
                            "@_code": "HIB",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "R5E",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "EOB",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AFK",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AET",
                            "group": {
                                "@_code": "EE"
                            }
                        },
                        {
                            "@_code": "AGA",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "HCY",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "MNE",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "MEW",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "9Q",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "EN",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "A3G",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AQA",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "WTL",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "4A",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "ME",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "AJ9",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "MXB",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "EBE",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AZ7",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AY",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "MFD",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "UN",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "RBB",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "MJC",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "A1V",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "ATY",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "FOA",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "AJB",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "7FT",
                            "group": {
                                "@_code": "EG"
                            }
                        },
                        {
                            "@_code": "WHB",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "STR",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "BOO",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "MNS",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "EWN",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "MDR",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "HTE",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "WTI",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": 26,
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "7D",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "EFF",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "7V",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "3V",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "DBB",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "BR7",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "TIL",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "WHD",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "EVC",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "BZ",
                            "group": {
                                "@_code": "IE"
                            }
                        },
                        {
                            "@_code": "HO",
                            "group": {
                                "@_code": "WS"
                            }
                        },
                        {
                            "@_code": "ABF",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "GNS",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "LT",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "CU",
                            "group": {
                                "@_code": "EL"
                            }
                        },
                        {
                            "@_code": "HO",
                            "group": {
                                "@_code": "CL"
                            }
                        },
                        {
                            "@_code": "X6",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "GUD",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "5A",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "U9",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": 39,
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "GKS",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "MUD",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "NBB",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "4G",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "M1B",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "A8G",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "MAC",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "HIA",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "A1G",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "A7L",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "T7K",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "MEO",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "A1X",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "Z6",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "AZ1",
                            "group": {
                                "@_code": "EE"
                            }
                        },
                        {
                            "@_code": "BG",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AVL",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "N1B",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "1H",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "X9",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "TCS",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "SE",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "AA4",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "JA",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "ESB",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "MB",
                            "group": {
                                "@_code": "OP"
                            }
                        },
                        {
                            "@_code": "UMD",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "NCF",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "GCM",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "A1M",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "RBM",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "CRB",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AHL",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "5L",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "AOB",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "EXR",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "R53",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "NCC",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "RLX",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "MGS",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "H5G",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "HTB",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "A1P",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "JFC",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "R5O",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "S5F",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "7N",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "S53",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "4C",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "S5M",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "UA",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "WTD",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "S5O",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "A0F",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "BFR",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": 36,
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "W0",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "MFB",
                            "group": {
                                "@_code": "IE"
                            }
                        },
                        {
                            "@_code": "U7",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "GZ",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "FCB",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "AZ0",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "JFB",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "CF",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "UNS",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "HTM",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "AB7",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "AFE",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "MHS",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "R5F",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "GBA",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "H5F",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "MAB",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "A7I",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "MSG",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "A1L",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "MGN",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "WTA",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "ULB",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "GBB",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "AA8",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "H5B",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "A1D",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "CSX",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "JTB",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "MBS",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "S5B",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "SR5",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "GNB",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "ALX",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "SD",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "AWJ",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "AUT",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "MGO",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "R5B",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "AKR",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "WMD",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "ABI",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "CPD",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "A7Y",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "A1G",
                            "group": {
                                "@_code": "WS"
                            }
                        },
                        {
                            "@_code": "7S",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "SGB",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "SBM",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "CY",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "CBO",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "MEE",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "SGG",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": 27,
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "YNO",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "ATU",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "ABS",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "SFB",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "8SS",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "0C",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "CLD",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "HBC",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "UV",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "A6V",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "B8",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "HBR",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "MTS",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "HTC",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "UPM",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "R5M",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "WDB",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "MO",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "AJR",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AKL",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "0A",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "GY",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "E6",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "7X",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "ABX",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "MSD",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "F3",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "MTB",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "ZKU",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "A8B",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "0E",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "ABT",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "FOM",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "YS",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "ATP",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "MDM",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "EWB",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "A7G",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "WMB",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "AVU",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "A6X",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "RBL",
                            "group": {
                                "@_code": "TM"
                            }
                        },
                        {
                            "@_code": "XER",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "ALY",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "WTS",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "RB",
                            "group": {
                                "@_code": "WS"
                            }
                        },
                        {
                            "@_code": "WHT",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "WCH",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "MH",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "GES",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "HJC",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "BJ",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": 37,
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "DCL",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "A1Q",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "ANC",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "1E",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "GHY",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "BZ",
                            "group": {
                                "@_code": "BD"
                            }
                        },
                        {
                            "@_code": "BCR",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "NYA",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AML",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "BM",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "BF",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "BZT",
                            "group": {
                                "@_code": "CT"
                            }
                        },
                        {
                            "@_code": "MGB",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "UP5",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "MXR",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "WHZ",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "DCW",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "WNT",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "WHL",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "ZIY",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "HDB",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "MJN",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AGP",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "5Y",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "A42",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "NYR",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "2CE",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "BZL",
                            "group": {
                                "@_code": "TM"
                            }
                        },
                        {
                            "@_code": "JE",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "V7",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "SGF",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "D1N",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AGE",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "MEF",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "GNO",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "RYA",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "IBE",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "DBL",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "A3C",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "CMF",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "MBC",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "HOL",
                            "group": {
                                "@_code": "TM"
                            }
                        },
                        {
                            "@_code": "BZS",
                            "group": {
                                "@_code": "TS"
                            }
                        },
                        {
                            "@_code": "WNC",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "JET",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "FVB",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "CX",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "AA7",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "A1U",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "LL",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "GOC",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "ARY",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "RVR",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AB6",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "WBR",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "4Y",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "AA9",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "M35",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "MSB",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "UR",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "ARE",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "YF",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "CV",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "AH1",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "FOC",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AJ",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "AYH",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AA5",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AJS",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "CSX",
                            "group": {
                                "@_code": "WS"
                            }
                        },
                        {
                            "@_code": "AUB",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "BPS",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "A1D",
                            "group": {
                                "@_code": "WS"
                            }
                        },
                        {
                            "@_code": "VV",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "2C",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "CBA",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "BQ",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "WMR",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "0B",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "3CE",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "RLX",
                            "group": {
                                "@_code": "WS"
                            }
                        },
                        {
                            "@_code": "CRG",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "MQ",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "ASP",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "BUC",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "CL",
                            "group": {
                                "@_code": "WD"
                            }
                        },
                        {
                            "@_code": "MAF",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "GDL",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "MFP",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "FBT",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "DCB",
                            "group": {
                                "@_code": "BB"
                            }
                        },
                        {
                            "@_code": "6CE",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "MX",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "JNC",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "FEW",
                            "group": {
                                "@_code": "PT"
                            }
                        },
                        {
                            "@_code": "NOO",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "CT",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "EFM",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "0CU",
                            "group": {
                                "@_code": "#7"
                            }
                        },
                        {
                            "@_code": "FL",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "GDH",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "AXA",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "AF",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "LLR",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "MPX",
                            "group": {
                                "@_code": "WS"
                            }
                        },
                        {
                            "@_code": "AGX",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "A5U",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "ARI",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AJL",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "ENS",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": 23,
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "BD",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "2A",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "AUS",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "MDB",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "AUF",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AT0",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AUH",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AUJ",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AFY",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "AJU",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AXB",
                            "group": {
                                "@_code": "CC"
                            }
                        },
                        {
                            "@_code": "RKA",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "A5C",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "RGF",
                            "group": {
                                "@_code": "CP"
                            }
                        },
                        {
                            "@_code": "A8T",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "BQS",
                            "group": {
                                "@_code": 9
                            }
                        },
                        {
                            "@_code": "AKS",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AUY",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "MM",
                            "group": {
                                "@_code": "WS"
                            }
                        },
                        {
                            "@_code": "AGT",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "AFI",
                            "group": {
                                "@_code": "RF"
                            }
                        },
                        {
                            "@_code": "A42",
                            "group": {
                                "@_code": "WS"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "382H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "382IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.130",
                            "host-ip": [
                                "205.209.223.78",
                                "205.209.221.78"
                            ],
                            "port": 14382,
                            "feed": "A"
                        },
                        {
                            "@_id": "382IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.130",
                            "host-ip": [
                                "205.209.211.78",
                                "205.209.212.78"
                            ],
                            "port": 15382,
                            "feed": "B"
                        },
                        {
                            "@_id": "382NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.172",
                            "host-ip": [
                                "205.209.222.76",
                                "205.209.222.82"
                            ],
                            "port": 14382,
                            "feed": "A"
                        },
                        {
                            "@_id": "382NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.172",
                            "host-ip": [
                                "205.209.213.51",
                                "205.209.214.51"
                            ],
                            "port": 15382,
                            "feed": "B"
                        },
                        {
                            "@_id": "382SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.151",
                            "host-ip": [
                                "205.209.222.84",
                                "205.209.222.80"
                            ],
                            "port": 14382,
                            "feed": "A"
                        },
                        {
                            "@_id": "382SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.151",
                            "host-ip": [
                                "205.209.214.55",
                                "205.209.213.55"
                            ],
                            "port": 15382,
                            "feed": "B"
                        },
                        {
                            "@_id": "382SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.18",
                            "host-ip": [
                                "205.209.222.114",
                                "205.209.222.115"
                            ],
                            "port": 23382,
                            "feed": "A"
                        },
                        {
                            "@_id": "382SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.81",
                            "host-ip": [
                                "205.209.214.67",
                                "205.209.213.67"
                            ],
                            "port": 22382,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 383,
                "@_label": "NYMEX Globex Crude &amp; Crude Refined Options",
                "products": {
                    "product": [
                        {
                            "@_code": "HCB",
                            "group": {
                                "@_code": "EP"
                            }
                        },
                        {
                            "@_code": "LCE",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "9C",
                            "group": {
                                "@_code": "OT"
                            }
                        },
                        {
                            "@_code": "HAP",
                            "group": {
                                "@_code": "EP"
                            }
                        },
                        {
                            "@_code": "B7A",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "AAO",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "BZO",
                            "group": {
                                "@_code": "PR"
                            }
                        },
                        {
                            "@_code": "WAY",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "ATX",
                            "group": {
                                "@_code": "EP"
                            }
                        },
                        {
                            "@_code": "OB",
                            "group": {
                                "@_code": "OB"
                            }
                        },
                        {
                            "@_code": "OSX",
                            "group": {
                                "@_code": "OT"
                            }
                        },
                        {
                            "@_code": "LO",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "BW1",
                            "group": {
                                "@_code": "OT"
                            }
                        },
                        {
                            "@_code": "BE",
                            "group": {
                                "@_code": "OT"
                            }
                        },
                        {
                            "@_code": "OH",
                            "group": {
                                "@_code": "OH"
                            }
                        },
                        {
                            "@_code": "C05",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "0SX",
                            "group": {
                                "@_code": "#9"
                            }
                        },
                        {
                            "@_code": "LM2",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "LM4",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "LO1",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "BA",
                            "group": {
                                "@_code": "OT"
                            }
                        },
                        {
                            "@_code": "OSX",
                            "group": {
                                "@_code": "PR"
                            }
                        },
                        {
                            "@_code": "ABV",
                            "group": {
                                "@_code": "OT"
                            }
                        },
                        {
                            "@_code": "CVR",
                            "group": {
                                "@_code": "OF"
                            }
                        },
                        {
                            "@_code": "ICD",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "DNM",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "C04",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "LM5",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "BW3",
                            "group": {
                                "@_code": "OT"
                            }
                        },
                        {
                            "@_code": "LO3",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "LM3",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "ODB",
                            "group": {
                                "@_code": "OT"
                            }
                        },
                        {
                            "@_code": "LM1",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "C11",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "BW4",
                            "group": {
                                "@_code": "OT"
                            }
                        },
                        {
                            "@_code": "LO4",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "LO2",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "C06",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "E5O",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "WAY",
                            "group": {
                                "@_code": "EP"
                            }
                        },
                        {
                            "@_code": "C10",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "BW2",
                            "group": {
                                "@_code": "OT"
                            }
                        },
                        {
                            "@_code": "C09",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "ATX",
                            "group": {
                                "@_code": "OB"
                            }
                        },
                        {
                            "@_code": "C02",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "B7A",
                            "group": {
                                "@_code": "PR"
                            }
                        },
                        {
                            "@_code": "C03",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "ABV",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "BZO",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "BZO",
                            "group": {
                                "@_code": "OB"
                            }
                        },
                        {
                            "@_code": "ATX",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "BZO",
                            "group": {
                                "@_code": "OT"
                            }
                        },
                        {
                            "@_code": "C12",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "OH",
                            "group": {
                                "@_code": "OT"
                            }
                        },
                        {
                            "@_code": "ATX",
                            "group": {
                                "@_code": "PR"
                            }
                        },
                        {
                            "@_code": "A6F",
                            "group": {
                                "@_code": "LO"
                            }
                        },
                        {
                            "@_code": "WTO",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "AAO",
                            "group": {
                                "@_code": "OB"
                            }
                        },
                        {
                            "@_code": "AAO",
                            "group": {
                                "@_code": "PR"
                            }
                        },
                        {
                            "@_code": "LO",
                            "group": {
                                "@_code": "OT"
                            }
                        },
                        {
                            "@_code": "HCO",
                            "group": {
                                "@_code": "H3"
                            }
                        },
                        {
                            "@_code": "OH",
                            "group": {
                                "@_code": "EP"
                            }
                        },
                        {
                            "@_code": "LO",
                            "group": {
                                "@_code": "1N"
                            }
                        },
                        {
                            "@_code": "LO1",
                            "group": {
                                "@_code": "1N"
                            }
                        },
                        {
                            "@_code": "OH",
                            "group": {
                                "@_code": "1I"
                            }
                        },
                        {
                            "@_code": "BZO",
                            "group": {
                                "@_code": "1N"
                            }
                        },
                        {
                            "@_code": "WAY",
                            "group": {
                                "@_code": "1N"
                            }
                        },
                        {
                            "@_code": "LO3",
                            "group": {
                                "@_code": "1N"
                            }
                        },
                        {
                            "@_code": "LO2",
                            "group": {
                                "@_code": "1N"
                            }
                        },
                        {
                            "@_code": "OB",
                            "group": {
                                "@_code": "1B"
                            }
                        },
                        {
                            "@_code": "ABV",
                            "group": {
                                "@_code": "1Z"
                            }
                        },
                        {
                            "@_code": "LO4",
                            "group": {
                                "@_code": "1N"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "383H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "383IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.131",
                            "host-ip": [
                                "205.209.223.77",
                                "205.209.221.77"
                            ],
                            "port": 14383,
                            "feed": "A"
                        },
                        {
                            "@_id": "383IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.131",
                            "host-ip": [
                                "205.209.211.77",
                                "205.209.212.77"
                            ],
                            "port": 15383,
                            "feed": "B"
                        },
                        {
                            "@_id": "383NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.173",
                            "host-ip": [
                                "205.209.222.73",
                                "205.209.222.85"
                            ],
                            "port": 14383,
                            "feed": "A"
                        },
                        {
                            "@_id": "383NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.173",
                            "host-ip": [
                                "205.209.214.48",
                                "205.209.213.48"
                            ],
                            "port": 15383,
                            "feed": "B"
                        },
                        {
                            "@_id": "383SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.152",
                            "host-ip": [
                                "205.209.222.77",
                                "205.209.222.87"
                            ],
                            "port": 14383,
                            "feed": "A"
                        },
                        {
                            "@_id": "383SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.152",
                            "host-ip": [
                                "205.209.214.52",
                                "205.209.213.52"
                            ],
                            "port": 15383,
                            "feed": "B"
                        },
                        {
                            "@_id": "383SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.22",
                            "host-ip": [
                                "205.209.222.109",
                                "205.209.222.108"
                            ],
                            "port": 23383,
                            "feed": "A"
                        },
                        {
                            "@_id": "383SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.85",
                            "host-ip": [
                                "205.209.214.64",
                                "205.209.213.64"
                            ],
                            "port": 22383,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 384,
                "@_label": "NYMEX Globex Metals, Softs, &amp; Alternative Market Futures",
                "products": {
                    "product": [
                        {
                            "@_code": "PLT",
                            "group": {
                                "@_code": "PE"
                            }
                        },
                        {
                            "@_code": "PAM",
                            "group": {
                                "@_code": "PD"
                            }
                        },
                        {
                            "@_code": "PA",
                            "group": {
                                "@_code": "PD"
                            }
                        },
                        {
                            "@_code": "PPS",
                            "group": {
                                "@_code": "PU"
                            }
                        },
                        {
                            "@_code": "0CJ",
                            "group": {
                                "@_code": "$G"
                            }
                        },
                        {
                            "@_code": "PL",
                            "group": {
                                "@_code": "PL"
                            }
                        },
                        {
                            "@_code": "PAT",
                            "group": {
                                "@_code": "PX"
                            }
                        },
                        {
                            "@_code": "TT",
                            "group": {
                                "@_code": "TT"
                            }
                        },
                        {
                            "@_code": "YO",
                            "group": {
                                "@_code": "YO"
                            }
                        },
                        {
                            "@_code": "CJ",
                            "group": {
                                "@_code": "CJ"
                            }
                        },
                        {
                            "@_code": "KT",
                            "group": {
                                "@_code": "KT"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "384H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "384IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.132",
                            "host-ip": [
                                "205.209.223.79",
                                "205.209.221.79"
                            ],
                            "port": 14384,
                            "feed": "A"
                        },
                        {
                            "@_id": "384IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.132",
                            "host-ip": [
                                "205.209.211.79",
                                "205.209.212.79"
                            ],
                            "port": 15384,
                            "feed": "B"
                        },
                        {
                            "@_id": "384NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.174",
                            "host-ip": [
                                "205.209.222.82",
                                "205.209.222.76"
                            ],
                            "port": 14384,
                            "feed": "A"
                        },
                        {
                            "@_id": "384NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.174",
                            "host-ip": [
                                "205.209.214.51",
                                "205.209.213.51"
                            ],
                            "port": 15384,
                            "feed": "B"
                        },
                        {
                            "@_id": "384SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.153",
                            "host-ip": [
                                "205.209.222.80",
                                "205.209.222.84"
                            ],
                            "port": 14384,
                            "feed": "A"
                        },
                        {
                            "@_id": "384SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.153",
                            "host-ip": [
                                "205.209.214.55",
                                "205.209.213.55"
                            ],
                            "port": 15384,
                            "feed": "B"
                        },
                        {
                            "@_id": "384SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.20",
                            "host-ip": [
                                "205.209.222.115",
                                "205.209.222.114"
                            ],
                            "port": 23384,
                            "feed": "A"
                        },
                        {
                            "@_id": "384SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.83",
                            "host-ip": [
                                "205.209.214.67",
                                "205.209.213.67"
                            ],
                            "port": 22384,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 385,
                "@_label": "NYMEX Globex Metals, Softs, &amp; Alternative Market Options",
                "products": {
                    "product": [
                        {
                            "@_code": "PAO",
                            "group": {
                                "@_code": "P3"
                            }
                        },
                        {
                            "@_code": "PO",
                            "group": {
                                "@_code": "P0"
                            }
                        },
                        {
                            "@_code": "0PO",
                            "group": {
                                "@_code": "#0"
                            }
                        },
                        {
                            "@_code": "PO",
                            "group": {
                                "@_code": "P1"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "385H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "385IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.133",
                            "host-ip": [
                                "205.209.223.77",
                                "205.209.221.77"
                            ],
                            "port": 14385,
                            "feed": "A"
                        },
                        {
                            "@_id": "385IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.133",
                            "host-ip": [
                                "205.209.212.77",
                                "205.209.211.77"
                            ],
                            "port": 15385,
                            "feed": "B"
                        },
                        {
                            "@_id": "385NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.175",
                            "host-ip": [
                                "205.209.222.75",
                                "205.209.222.81"
                            ],
                            "port": 14385,
                            "feed": "A"
                        },
                        {
                            "@_id": "385NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.175",
                            "host-ip": [
                                "205.209.213.50",
                                "205.209.214.50"
                            ],
                            "port": 15385,
                            "feed": "B"
                        },
                        {
                            "@_id": "385SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.154",
                            "host-ip": [
                                "205.209.222.83",
                                "205.209.222.79"
                            ],
                            "port": 14385,
                            "feed": "A"
                        },
                        {
                            "@_id": "385SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.154",
                            "host-ip": [
                                "205.209.214.54",
                                "205.209.213.54"
                            ],
                            "port": 15385,
                            "feed": "B"
                        },
                        {
                            "@_id": "385SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.24",
                            "host-ip": [
                                "205.209.222.112",
                                "205.209.222.113"
                            ],
                            "port": 23385,
                            "feed": "A"
                        },
                        {
                            "@_id": "385SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.87",
                            "host-ip": [
                                "205.209.213.66",
                                "205.209.214.66"
                            ],
                            "port": 22385,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 386,
                "@_label": "NYMEX Globex Nat Gas &amp; other Non-Crude Energy Futures",
                "products": {
                    "product": [
                        {
                            "@_code": "TMD",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "L3L",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "NG",
                            "group": {
                                "@_code": "NG"
                            }
                        },
                        {
                            "@_code": "QG",
                            "group": {
                                "@_code": "NG"
                            }
                        },
                        {
                            "@_code": "T4D",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "2FW",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "MCT",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "CPM",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "EMW",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "T2M",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "NGT",
                            "group": {
                                "@_code": "NA"
                            }
                        },
                        {
                            "@_code": "HP",
                            "group": {
                                "@_code": "HX"
                            }
                        },
                        {
                            "@_code": "GUS",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "PDJ",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "NN",
                            "group": {
                                "@_code": "NG"
                            }
                        },
                        {
                            "@_code": "NBP",
                            "group": {
                                "@_code": "HX"
                            }
                        },
                        {
                            "@_code": "ICI",
                            "group": {
                                "@_code": "CO"
                            }
                        },
                        {
                            "@_code": "T06",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "3P",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "NNE",
                            "group": {
                                "@_code": "NG"
                            }
                        },
                        {
                            "@_code": "NPG",
                            "group": {
                                "@_code": "HX"
                            }
                        },
                        {
                            "@_code": "D7L",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "CPP",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "MPP",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "JCC",
                            "group": {
                                "@_code": "GU"
                            }
                        },
                        {
                            "@_code": "TD8",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "TLD",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "EMC",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "NNT",
                            "group": {
                                "@_code": "NA"
                            }
                        },
                        {
                            "@_code": "DEB",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "3L",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "N3L",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "RPM",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "TC9",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "LNG",
                            "group": {
                                "@_code": "LN"
                            }
                        },
                        {
                            "@_code": "NHP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "R7L",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "K4L",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "DAX",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "TTE",
                            "group": {
                                "@_code": "HX"
                            }
                        },
                        {
                            "@_code": "HH",
                            "group": {
                                "@_code": "HX"
                            }
                        },
                        {
                            "@_code": "MDZ",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "VLD",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "THD",
                            "group": {
                                "@_code": "HX"
                            }
                        },
                        {
                            "@_code": "HHT",
                            "group": {
                                "@_code": "NA"
                            }
                        },
                        {
                            "@_code": "ISA",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "E9X",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "K2L",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "MLD",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "UKG",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "G44",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "4XW",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "HH6",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "E4L",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "AL6",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "2JW",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "PMF",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "MFF",
                            "group": {
                                "@_code": "CO"
                            }
                        },
                        {
                            "@_code": "3XW",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "A9N",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "NRP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "T11",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "DMA",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "GVS",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "PVP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "POC",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "STY",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "JKM",
                            "group": {
                                "@_code": "GU"
                            }
                        },
                        {
                            "@_code": "HH",
                            "group": {
                                "@_code": "NG"
                            }
                        },
                        {
                            "@_code": "T12",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "MDL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "FRS",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "DSA",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "A7E",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "J4L",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "ADE",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "DEP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "PKP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "MTF",
                            "group": {
                                "@_code": "CO"
                            }
                        },
                        {
                            "@_code": "JDL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "G8X",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "ITB",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "FAL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "PDL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "OML",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "DGY",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "AGF",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "NFD",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "AP8",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "MTI",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "HH8",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "VDL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "GLS",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "T13",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "NTP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "OVL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "MBE",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "PWL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "CG9",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "BAS",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "T18",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "DAZ",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "TTF",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "PVL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "WOL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "ZJL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "T09",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "MIP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "HPD",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "PMP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "CBB",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "PRO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "ADJ",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "A3N",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "0TF",
                            "group": {
                                "@_code": "$N"
                            }
                        },
                        {
                            "@_code": "AH3",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "A8K",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "H8U",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "M5F",
                            "group": {
                                "@_code": "CO"
                            }
                        },
                        {
                            "@_code": "U8P",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "C4Z",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "NOI",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "GYS",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "PEL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "NHO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "PYO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "T20",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "PAL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "CPB",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "NSP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "NMP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "NWP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "CGB",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "AF5",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "A8I",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "PQP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "NNP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "B2K",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "FLP",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "H2L",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "AX1",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "PPW",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "U8R",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "PGG",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "3NB",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "D3L",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "PNL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "T2D",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "GWS",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "AB3",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "EJL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "D2L",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "3ZW",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "NEP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "ZK",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "FTL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "ZGL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "AF2",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "MBB",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "EAB",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "AL8",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "ACM",
                            "group": {
                                "@_code": "CO"
                            }
                        },
                        {
                            "@_code": "1S",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "WPL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "7EM",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "AC0",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "ITP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "N9L",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "FRC",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "D4L",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "JNG",
                            "group": {
                                "@_code": "GU"
                            }
                        },
                        {
                            "@_code": "A8L",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "PRP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "BF2",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "AR3",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "PSO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "MDD",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AD0",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "ACB",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "NYP",
                            "group": {
                                "@_code": "HX"
                            }
                        },
                        {
                            "@_code": "PNF",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "MXL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "LEL",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "PCP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "B0",
                            "group": {
                                "@_code": "GS"
                            }
                        },
                        {
                            "@_code": "UCS",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "AOL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "A1R",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "PFO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "APS",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "PLO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "DHA",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "JPP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "2ZW",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "AS4",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "PZP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "UCR",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "SSI",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "H5L",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "1Y",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "IDL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "PYP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "NSS",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "PHP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "AEB",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "PEX",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "QP",
                            "group": {
                                "@_code": "CO"
                            }
                        },
                        {
                            "@_code": "MNB",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "MT2",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "T3L",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "PUP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "MNT",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "AN1",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "JKF",
                            "group": {
                                "@_code": "GU"
                            }
                        },
                        {
                            "@_code": 22,
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "A91",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "USG",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "TL",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "UCE",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "PBP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "PXP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "A8M",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "QXB",
                            "group": {
                                "@_code": "CO"
                            }
                        },
                        {
                            "@_code": "YUE",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "1ZA",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "AAK",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "POL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "T19",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "SDD",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "MMP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "MMO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "PLP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "MRT",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "TC6",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "AL5",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AJ2",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "T05",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "BF1",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "NWO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "N3P",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "AE3",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "PMO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "ZAL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "PHF",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "A3R",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AF4",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "NOD",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "QVL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "PSP",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "A8J",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AR8",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "XUK",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "B6L",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "AU6",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "PPL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "JKB",
                            "group": {
                                "@_code": "GU"
                            }
                        },
                        {
                            "@_code": "YWE",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "NFO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "A7Q",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "NSO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "MPA",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "AY1",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "BF3",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "AZ9",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "SRT",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "MOA",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "T5C",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "3NA",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "MAS",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "PXO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "PVO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "APA",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "NCD",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "TM",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "AW6",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "T04",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "PCO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "A3M",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "PUO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "NHN",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": 51,
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "AQ8",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "V3L",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "AE9",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "NJ",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "T17",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "NMO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "A58",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AW4",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "A8O",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AP5",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "LPE",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "1NM",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "AE8",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "1NA",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "T3B",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "ASD",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "TD3",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "MBR",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "TEF",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "C3D",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "C2E",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "GNL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "PBO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "EAC",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "PM",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "LHV",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "TH",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "5ZN",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "COL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "ERL",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "PHO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "NCO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "A8C",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "PZO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "NRO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "A3Q",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "T16",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "EAA",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "AHJ",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "NBD",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "AR0",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AI9",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "NR",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "PD",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "C5D",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "NL",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "NX",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "TC",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "MOI",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "NW",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "NFN",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "PH",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "C4D",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "PTO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "NRR",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "K3L",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "E6M",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "GK",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "USC",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "USE",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "TC7",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "TDM",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "TTD",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "HPE",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "GMY",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "ANL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "BEB",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "OPO",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "JNL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "XUB",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "AI5",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "XPP",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "UDL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "PTL",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "LAP",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "OOD",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "T4B",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "A32",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AL1",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "MRI",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "PQO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "T03",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "AI3",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "MTH",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "AR4",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "MPS",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "YRP",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "NEO",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "THB",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "YWF",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "AP1",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "T9B",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "2D",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "EAW",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "AM1",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "OFF",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "T10",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "F2B",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "YWK",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "AI6",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "ACT",
                            "group": {
                                "@_code": "CO"
                            }
                        },
                        {
                            "@_code": "NHH",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "ENP",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "ZJY",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "AO1",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AJ1",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "T6B",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "TKB",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "FEF",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "OAD",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "AQK",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "PFP",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "OMM",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "LAF",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "YHE",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "TK",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "AI4",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "T02",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "FLB",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "TB2",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "T5B",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "YHF",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "ALM",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "TLB",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "AR1",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "T2B",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "T8B",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "AI1",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "MAE",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "YRW",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "AK1",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "T7C",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "AI2",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "EAE",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "AL9",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "TMB",
                            "group": {
                                "@_code": "FT"
                            }
                        },
                        {
                            "@_code": "EUB",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "AD6",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AOH",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "F4B",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "AHM",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "A4Q",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AP3",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "MMR",
                            "group": {
                                "@_code": "PW"
                            }
                        },
                        {
                            "@_code": "A46",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AZL",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "TRZ",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "AD9",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "A49",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AI7",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "HWA",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "MAA",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "HB",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "A55",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "A4L",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "HOA",
                            "group": {
                                "@_code": "PA"
                            }
                        },
                        {
                            "@_code": "AU4",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AR6",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AP2",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AD5",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AQ5",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AP7",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "A47",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "PPP",
                            "group": {
                                "@_code": "JR"
                            }
                        },
                        {
                            "@_code": "ALW",
                            "group": {
                                "@_code": "CO"
                            }
                        },
                        {
                            "@_code": "MBL",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "A4M",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "F4M",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "A4N",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AP9",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AA3",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "BEF",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AD8",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AOJ",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "CLP",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "RLS",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "AU5",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AU3",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "A50",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "A4R",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AW2",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AU2",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "A4P",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "F2M",
                            "group": {
                                "@_code": 8
                            }
                        },
                        {
                            "@_code": "A81",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "PGN",
                            "group": {
                                "@_code": "FD"
                            }
                        },
                        {
                            "@_code": "AP4",
                            "group": {
                                "@_code": "ZZ"
                            }
                        },
                        {
                            "@_code": "AJJ",
                            "group": {
                                "@_code": "PA"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "386H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "386IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.134",
                            "host-ip": [
                                "205.209.221.77",
                                "205.209.223.77"
                            ],
                            "port": 14386,
                            "feed": "A"
                        },
                        {
                            "@_id": "386IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.134",
                            "host-ip": [
                                "205.209.211.77",
                                "205.209.212.77"
                            ],
                            "port": 15386,
                            "feed": "B"
                        },
                        {
                            "@_id": "386NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.176",
                            "host-ip": [
                                "205.209.222.75",
                                "205.209.222.81"
                            ],
                            "port": 14386,
                            "feed": "A"
                        },
                        {
                            "@_id": "386NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.176",
                            "host-ip": [
                                "205.209.213.50",
                                "205.209.214.50"
                            ],
                            "port": 15386,
                            "feed": "B"
                        },
                        {
                            "@_id": "386SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.155",
                            "host-ip": [
                                "205.209.222.83",
                                "205.209.222.79"
                            ],
                            "port": 14386,
                            "feed": "A"
                        },
                        {
                            "@_id": "386SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.155",
                            "host-ip": [
                                "205.209.214.54",
                                "205.209.213.54"
                            ],
                            "port": 15386,
                            "feed": "B"
                        },
                        {
                            "@_id": "386SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.19",
                            "host-ip": [
                                "205.209.222.112",
                                "205.209.222.113"
                            ],
                            "port": 23386,
                            "feed": "A"
                        },
                        {
                            "@_id": "386SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.82",
                            "host-ip": [
                                "205.209.213.66",
                                "205.209.214.66"
                            ],
                            "port": 22386,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 387,
                "@_label": "NYMEX Globex Nat Gas &amp; other Non-Crude Energy Options",
                "products": {
                    "product": [
                        {
                            "@_code": "LNE",
                            "group": {
                                "@_code": "LG"
                            }
                        },
                        {
                            "@_code": "G4X",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "AG5",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "ON",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "G3B",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "TFO",
                            "group": {
                                "@_code": "T3"
                            }
                        },
                        {
                            "@_code": "TTO",
                            "group": {
                                "@_code": "T3"
                            }
                        },
                        {
                            "@_code": "U03",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "AE7",
                            "group": {
                                "@_code": "LG"
                            }
                        },
                        {
                            "@_code": "AG7",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "JFO",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "UFO",
                            "group": {
                                "@_code": "T3"
                            }
                        },
                        {
                            "@_code": "LN1",
                            "group": {
                                "@_code": "LG"
                            }
                        },
                        {
                            "@_code": "UKO",
                            "group": {
                                "@_code": "T3"
                            }
                        },
                        {
                            "@_code": "G10",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "G6B",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "AG2",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "U05",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "ON1",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "U04",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "U10",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "U11",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "JKO",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "Z05",
                            "group": {
                                "@_code": "PP"
                            }
                        },
                        {
                            "@_code": "KDB",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "LN3",
                            "group": {
                                "@_code": "LG"
                            }
                        },
                        {
                            "@_code": "A6J",
                            "group": {
                                "@_code": "GZ"
                            }
                        },
                        {
                            "@_code": "ON3",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "Z04",
                            "group": {
                                "@_code": "PP"
                            }
                        },
                        {
                            "@_code": "A4H",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "F4Q",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "A6I",
                            "group": {
                                "@_code": "GZ"
                            }
                        },
                        {
                            "@_code": "MFY",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "DAP",
                            "group": {
                                "@_code": "PC"
                            }
                        },
                        {
                            "@_code": "A4D",
                            "group": {
                                "@_code": "GZ"
                            }
                        },
                        {
                            "@_code": "F2Q",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "LN4",
                            "group": {
                                "@_code": "LG"
                            }
                        },
                        {
                            "@_code": "MTO",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "LB",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "U06",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "MFO",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "ON4",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "ON2",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "U09",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "0TO",
                            "group": {
                                "@_code": "#A"
                            }
                        },
                        {
                            "@_code": "LN2",
                            "group": {
                                "@_code": "LG"
                            }
                        },
                        {
                            "@_code": "Z02",
                            "group": {
                                "@_code": "PP"
                            }
                        },
                        {
                            "@_code": "RA",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "6OA",
                            "group": {
                                "@_code": "ET"
                            }
                        },
                        {
                            "@_code": "MTC",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "Z03",
                            "group": {
                                "@_code": "PP"
                            }
                        },
                        {
                            "@_code": "U02",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "A4K",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "PMA",
                            "group": {
                                "@_code": "ET"
                            }
                        },
                        {
                            "@_code": "F4C",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "G4X",
                            "group": {
                                "@_code": "T3"
                            }
                        },
                        {
                            "@_code": "CPR",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "F2C",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "U12",
                            "group": {
                                "@_code": "ON"
                            }
                        },
                        {
                            "@_code": "Z06",
                            "group": {
                                "@_code": "PP"
                            }
                        },
                        {
                            "@_code": "AJN",
                            "group": {
                                "@_code": "PP"
                            }
                        },
                        {
                            "@_code": "JFO",
                            "group": {
                                "@_code": "T3"
                            }
                        },
                        {
                            "@_code": "A4J",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "GVR",
                            "group": {
                                "@_code": "PC"
                            }
                        },
                        {
                            "@_code": "BCO",
                            "group": {
                                "@_code": "EF"
                            }
                        },
                        {
                            "@_code": "LNE",
                            "group": {
                                "@_code": "1T"
                            }
                        },
                        {
                            "@_code": "ON",
                            "group": {
                                "@_code": "1T"
                            }
                        },
                        {
                            "@_code": "LN1",
                            "group": {
                                "@_code": "1T"
                            }
                        },
                        {
                            "@_code": "RA",
                            "group": {
                                "@_code": "EX"
                            }
                        },
                        {
                            "@_code": "G4X",
                            "group": {
                                "@_code": "1T"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "387H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "387IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.135",
                            "host-ip": [
                                "205.209.223.77",
                                "205.209.221.77"
                            ],
                            "port": 14387,
                            "feed": "A"
                        },
                        {
                            "@_id": "387IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.135",
                            "host-ip": [
                                "205.209.212.77",
                                "205.209.211.77"
                            ],
                            "port": 15387,
                            "feed": "B"
                        },
                        {
                            "@_id": "387NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.177",
                            "host-ip": [
                                "205.209.222.86",
                                "205.209.222.74"
                            ],
                            "port": 14387,
                            "feed": "A"
                        },
                        {
                            "@_id": "387NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.177",
                            "host-ip": [
                                "205.209.213.49",
                                "205.209.214.49"
                            ],
                            "port": 15387,
                            "feed": "B"
                        },
                        {
                            "@_id": "387SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.31.156",
                            "host-ip": [
                                "205.209.222.78",
                                "205.209.222.88"
                            ],
                            "port": 14387,
                            "feed": "A"
                        },
                        {
                            "@_id": "387SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.32.156",
                            "host-ip": [
                                "205.209.214.53",
                                "205.209.213.53"
                            ],
                            "port": 15387,
                            "feed": "B"
                        },
                        {
                            "@_id": "387SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.23",
                            "host-ip": [
                                "205.209.222.110",
                                "205.209.222.111"
                            ],
                            "port": 23387,
                            "feed": "A"
                        },
                        {
                            "@_id": "387SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.86",
                            "host-ip": [
                                "205.209.213.65",
                                "205.209.214.65"
                            ],
                            "port": 22387,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 430,
                "@_label": "BMD Globex Futures",
                "products": {
                    "product": [
                        {
                            "@_code": "FCPO",
                            "group": {
                                "@_code": "BC"
                            }
                        },
                        {
                            "@_code": "FPOL",
                            "group": {
                                "@_code": "BL"
                            }
                        },
                        {
                            "@_code": "FKB3",
                            "group": {
                                "@_code": "BT"
                            }
                        },
                        {
                            "@_code": "FHAR",
                            "group": {
                                "@_code": "BS"
                            }
                        },
                        {
                            "@_code": "FPOL",
                            "group": {
                                "@_code": "BC"
                            }
                        },
                        {
                            "@_code": "FGLD",
                            "group": {
                                "@_code": "BG"
                            }
                        },
                        {
                            "@_code": "FKLI",
                            "group": {
                                "@_code": "BE"
                            }
                        },
                        {
                            "@_code": "FGAM",
                            "group": {
                                "@_code": "BS"
                            }
                        },
                        {
                            "@_code": "FTEL",
                            "group": {
                                "@_code": "BS"
                            }
                        },
                        {
                            "@_code": "FGEM",
                            "group": {
                                "@_code": "BS"
                            }
                        },
                        {
                            "@_code": "FDRB",
                            "group": {
                                "@_code": "BS"
                            }
                        },
                        {
                            "@_code": "FMEG",
                            "group": {
                                "@_code": "BS"
                            }
                        },
                        {
                            "@_code": "FUPO",
                            "group": {
                                "@_code": "BA"
                            }
                        },
                        {
                            "@_code": "FGEN",
                            "group": {
                                "@_code": "BS"
                            }
                        },
                        {
                            "@_code": "FTIN",
                            "group": {
                                "@_code": "BN"
                            }
                        },
                        {
                            "@_code": "FINA",
                            "group": {
                                "@_code": "BS"
                            }
                        },
                        {
                            "@_code": "FM70",
                            "group": {
                                "@_code": "BS"
                            }
                        },
                        {
                            "@_code": "FCIM",
                            "group": {
                                "@_code": "BS"
                            }
                        },
                        {
                            "@_code": "FTOP",
                            "group": {
                                "@_code": "BS"
                            }
                        },
                        {
                            "@_code": "FMG5",
                            "group": {
                                "@_code": "B5"
                            }
                        },
                        {
                            "@_code": "FMG3",
                            "group": {
                                "@_code": "BI"
                            }
                        },
                        {
                            "@_code": "FMGA",
                            "group": {
                                "@_code": "B1"
                            }
                        },
                        {
                            "@_code": "FPKO",
                            "group": {
                                "@_code": "BK"
                            }
                        },
                        {
                            "@_code": "FGLD",
                            "group": {
                                "@_code": "BA"
                            }
                        },
                        {
                            "@_code": "FINA",
                            "group": {
                                "@_code": "BA"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "430H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "430IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.64",
                            "host-ip": [
                                "205.209.223.74",
                                "205.209.221.74"
                            ],
                            "port": 14430,
                            "feed": "A"
                        },
                        {
                            "@_id": "430IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.64",
                            "host-ip": [
                                "205.209.211.74",
                                "205.209.212.74"
                            ],
                            "port": 15430,
                            "feed": "B"
                        },
                        {
                            "@_id": "430NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.74",
                            "host-ip": [
                                "205.209.222.86",
                                "205.209.222.74"
                            ],
                            "port": 14430,
                            "feed": "A"
                        },
                        {
                            "@_id": "430NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.74",
                            "host-ip": [
                                "205.209.214.49",
                                "205.209.213.49"
                            ],
                            "port": 15430,
                            "feed": "B"
                        },
                        {
                            "@_id": "430SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.69",
                            "host-ip": [
                                "205.209.222.78",
                                "205.209.222.88"
                            ],
                            "port": 14430,
                            "feed": "A"
                        },
                        {
                            "@_id": "430SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.69",
                            "host-ip": [
                                "205.209.213.53",
                                "205.209.214.53"
                            ],
                            "port": 15430,
                            "feed": "B"
                        },
                        {
                            "@_id": "430SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.14",
                            "host-ip": [
                                "205.209.222.110",
                                "205.209.222.111"
                            ],
                            "port": 23430,
                            "feed": "A"
                        },
                        {
                            "@_id": "430SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.77",
                            "host-ip": [
                                "205.209.213.65",
                                "205.209.214.65"
                            ],
                            "port": 22430,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 431,
                "@_label": "BMD Globex Options",
                "products": {
                    "product": [
                        {
                            "@_code": "OCPO",
                            "group": {
                                "@_code": "BP"
                            }
                        },
                        {
                            "@_code": "OPOL",
                            "group": {
                                "@_code": "B8"
                            }
                        },
                        {
                            "@_code": "OKLI",
                            "group": {
                                "@_code": "BO"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "431H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "431IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.65",
                            "host-ip": [
                                "205.209.223.74",
                                "205.209.221.74"
                            ],
                            "port": 14431,
                            "feed": "A"
                        },
                        {
                            "@_id": "431IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.65",
                            "host-ip": [
                                "205.209.212.74",
                                "205.209.211.74"
                            ],
                            "port": 15431,
                            "feed": "B"
                        },
                        {
                            "@_id": "431NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.75",
                            "host-ip": [
                                "205.209.222.86",
                                "205.209.222.74"
                            ],
                            "port": 14431,
                            "feed": "A"
                        },
                        {
                            "@_id": "431NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.75",
                            "host-ip": [
                                "205.209.213.49",
                                "205.209.214.49"
                            ],
                            "port": 15431,
                            "feed": "B"
                        },
                        {
                            "@_id": "431SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.70",
                            "host-ip": [
                                "205.209.222.78",
                                "205.209.222.88"
                            ],
                            "port": 14431,
                            "feed": "A"
                        },
                        {
                            "@_id": "431SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.70",
                            "host-ip": [
                                "205.209.214.53",
                                "205.209.213.53"
                            ],
                            "port": 15431,
                            "feed": "B"
                        },
                        {
                            "@_id": "431SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.15",
                            "host-ip": [
                                "205.209.222.110",
                                "205.209.222.111"
                            ],
                            "port": 23431,
                            "feed": "A"
                        },
                        {
                            "@_id": "431SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.78",
                            "host-ip": [
                                "205.209.213.65",
                                "205.209.214.65"
                            ],
                            "port": 22431,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 440,
                "@_label": "DME Globex Futures",
                "products": {
                    "product": [
                        {
                            "@_code": "DDB",
                            "group": {
                                "@_code": "DE"
                            }
                        },
                        {
                            "@_code": "DDI",
                            "group": {
                                "@_code": "DE"
                            }
                        },
                        {
                            "@_code": "DSD",
                            "group": {
                                "@_code": "DE"
                            }
                        },
                        {
                            "@_code": "DSE",
                            "group": {
                                "@_code": "DE"
                            }
                        },
                        {
                            "@_code": "DUP",
                            "group": {
                                "@_code": "DE"
                            }
                        },
                        {
                            "@_code": "DHI",
                            "group": {
                                "@_code": "DE"
                            }
                        },
                        {
                            "@_code": "DCD",
                            "group": {
                                "@_code": "DE"
                            }
                        },
                        {
                            "@_code": "DDO",
                            "group": {
                                "@_code": "DE"
                            }
                        },
                        {
                            "@_code": "DKR",
                            "group": {
                                "@_code": "DE"
                            }
                        },
                        {
                            "@_code": "DDE",
                            "group": {
                                "@_code": "DE"
                            }
                        },
                        {
                            "@_code": "DBI",
                            "group": {
                                "@_code": "DE"
                            }
                        },
                        {
                            "@_code": "OQD",
                            "group": {
                                "@_code": "DE"
                            }
                        },
                        {
                            "@_code": "ZGD",
                            "group": {
                                "@_code": "DE"
                            }
                        },
                        {
                            "@_code": "BDS",
                            "group": {
                                "@_code": "DE"
                            }
                        },
                        {
                            "@_code": "ODO",
                            "group": {
                                "@_code": "DE"
                            }
                        },
                        {
                            "@_code": "OQB",
                            "group": {
                                "@_code": "TD"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "440H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "440IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.80",
                            "host-ip": [
                                "205.209.221.78",
                                "205.209.223.78"
                            ],
                            "port": 14440,
                            "feed": "A"
                        },
                        {
                            "@_id": "440IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.80",
                            "host-ip": [
                                "205.209.211.78",
                                "205.209.212.78"
                            ],
                            "port": 15440,
                            "feed": "B"
                        },
                        {
                            "@_id": "440NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.90",
                            "host-ip": [
                                "205.209.222.81",
                                "205.209.222.75"
                            ],
                            "port": 14440,
                            "feed": "A"
                        },
                        {
                            "@_id": "440NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.90",
                            "host-ip": [
                                "205.209.214.50",
                                "205.209.213.50"
                            ],
                            "port": 15440,
                            "feed": "B"
                        },
                        {
                            "@_id": "440SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.85",
                            "host-ip": [
                                "205.209.222.79",
                                "205.209.222.83"
                            ],
                            "port": 14440,
                            "feed": "A"
                        },
                        {
                            "@_id": "440SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.85",
                            "host-ip": [
                                "205.209.214.54",
                                "205.209.213.54"
                            ],
                            "port": 15440,
                            "feed": "B"
                        },
                        {
                            "@_id": "440SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.16",
                            "host-ip": [
                                "205.209.222.113",
                                "205.209.222.112"
                            ],
                            "port": 23440,
                            "feed": "A"
                        },
                        {
                            "@_id": "440SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.79",
                            "host-ip": [
                                "205.209.214.66",
                                "205.209.213.66"
                            ],
                            "port": 22440,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 441,
                "@_label": "DME Globex Options",
                "products": {
                    "product": {
                        "@_code": "OQE",
                        "group": {
                            "@_code": "1O"
                        }
                    }
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "441H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "441IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.81",
                            "host-ip": [
                                "205.209.223.77",
                                "205.209.221.77"
                            ],
                            "port": 14441,
                            "feed": "A"
                        },
                        {
                            "@_id": "441IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.81",
                            "host-ip": [
                                "205.209.211.77",
                                "205.209.212.77"
                            ],
                            "port": 15441,
                            "feed": "B"
                        },
                        {
                            "@_id": "441NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.91",
                            "host-ip": [
                                "205.209.222.81",
                                "205.209.222.75"
                            ],
                            "port": 14441,
                            "feed": "A"
                        },
                        {
                            "@_id": "441NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.91",
                            "host-ip": [
                                "205.209.213.50",
                                "205.209.214.50"
                            ],
                            "port": 15441,
                            "feed": "B"
                        },
                        {
                            "@_id": "441SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.86",
                            "host-ip": [
                                "205.209.222.79",
                                "205.209.222.83"
                            ],
                            "port": 14441,
                            "feed": "A"
                        },
                        {
                            "@_id": "441SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.86",
                            "host-ip": [
                                "205.209.213.54",
                                "205.209.214.54"
                            ],
                            "port": 15441,
                            "feed": "B"
                        },
                        {
                            "@_id": "441SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.17",
                            "host-ip": [
                                "205.209.222.112",
                                "205.209.222.113"
                            ],
                            "port": 23441,
                            "feed": "A"
                        },
                        {
                            "@_id": "441SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.80",
                            "host-ip": [
                                "205.209.213.66",
                                "205.209.214.66"
                            ],
                            "port": 22441,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 450,
                "@_label": "KRX Globex Futures",
                "products": {
                    "product": [
                        {
                            "@_code": "KUF",
                            "group": {
                                "@_code": "KR"
                            }
                        },
                        {
                            "@_code": "K2F",
                            "group": {
                                "@_code": "K2"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "450H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "450IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.96",
                            "host-ip": [
                                "205.209.223.74",
                                "205.209.221.74"
                            ],
                            "port": 14450,
                            "feed": "A"
                        },
                        {
                            "@_id": "450IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.96",
                            "host-ip": [
                                "205.209.212.74",
                                "205.209.211.74"
                            ],
                            "port": 15450,
                            "feed": "B"
                        },
                        {
                            "@_id": "450NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.106",
                            "host-ip": [
                                "205.209.222.86",
                                "205.209.222.74"
                            ],
                            "port": 14450,
                            "feed": "A"
                        },
                        {
                            "@_id": "450NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.106",
                            "host-ip": [
                                "205.209.213.49",
                                "205.209.214.49"
                            ],
                            "port": 15450,
                            "feed": "B"
                        },
                        {
                            "@_id": "450SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.101",
                            "host-ip": [
                                "205.209.222.78",
                                "205.209.222.88"
                            ],
                            "port": 14450,
                            "feed": "A"
                        },
                        {
                            "@_id": "450SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.101",
                            "host-ip": [
                                "205.209.214.53",
                                "205.209.213.53"
                            ],
                            "port": 15450,
                            "feed": "B"
                        },
                        {
                            "@_id": "450SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.13",
                            "host-ip": [
                                "205.209.222.111",
                                "205.209.222.110"
                            ],
                            "port": 23450,
                            "feed": "A"
                        },
                        {
                            "@_id": "450SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.76",
                            "host-ip": [
                                "205.209.214.65",
                                "205.209.213.65"
                            ],
                            "port": 22450,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 460,
                "@_label": "MGEX Globex Futures",
                "products": {
                    "product": [
                        {
                            "@_code": "IC",
                            "group": {
                                "@_code": "IC"
                            }
                        },
                        {
                            "@_code": "IP",
                            "group": {
                                "@_code": "IP"
                            }
                        },
                        {
                            "@_code": "MWE",
                            "group": {
                                "@_code": "MW"
                            }
                        },
                        {
                            "@_code": "IH",
                            "group": {
                                "@_code": "IH"
                            }
                        },
                        {
                            "@_code": "MS1",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "MY1",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "IS",
                            "group": {
                                "@_code": "IS"
                            }
                        },
                        {
                            "@_code": "MY3",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "MY2",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "MS9",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "IW",
                            "group": {
                                "@_code": "IW"
                            }
                        },
                        {
                            "@_code": "MS8",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "MY6",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "SPT",
                            "group": {
                                "@_code": "MV"
                            }
                        },
                        {
                            "@_code": "MS3",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "MS2",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "MY9",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "MS7",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "MY8",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "MY7",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "MY5",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "MWE",
                            "group": {
                                "@_code": "MB"
                            }
                        },
                        {
                            "@_code": "MY4",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "MWE",
                            "group": {
                                "@_code": "MK"
                            }
                        },
                        {
                            "@_code": "SPK",
                            "group": {
                                "@_code": "MX"
                            }
                        },
                        {
                            "@_code": "MS4",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "MS5",
                            "group": {
                                "@_code": 5
                            }
                        },
                        {
                            "@_code": "MS6",
                            "group": {
                                "@_code": 5
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "460H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "460IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.112",
                            "host-ip": [
                                "205.209.221.71",
                                "205.209.223.71"
                            ],
                            "port": 14460,
                            "feed": "A"
                        },
                        {
                            "@_id": "460IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.112",
                            "host-ip": [
                                "205.209.212.71",
                                "205.209.211.71"
                            ],
                            "port": 15460,
                            "feed": "B"
                        },
                        {
                            "@_id": "460NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.122",
                            "host-ip": [
                                "205.209.222.73",
                                "205.209.222.85"
                            ],
                            "port": 14460,
                            "feed": "A"
                        },
                        {
                            "@_id": "460NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.122",
                            "host-ip": [
                                "205.209.213.48",
                                "205.209.214.48"
                            ],
                            "port": 15460,
                            "feed": "B"
                        },
                        {
                            "@_id": "460SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.117",
                            "host-ip": [
                                "205.209.222.87",
                                "205.209.222.77"
                            ],
                            "port": 14460,
                            "feed": "A"
                        },
                        {
                            "@_id": "460SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.117",
                            "host-ip": [
                                "205.209.214.52",
                                "205.209.213.52"
                            ],
                            "port": 15460,
                            "feed": "B"
                        },
                        {
                            "@_id": "460SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.36",
                            "host-ip": [
                                "205.209.222.108",
                                "205.209.222.109"
                            ],
                            "port": 23460,
                            "feed": "A"
                        },
                        {
                            "@_id": "460SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.99",
                            "host-ip": [
                                "205.209.214.64",
                                "205.209.213.64"
                            ],
                            "port": 22460,
                            "feed": "B"
                        }
                    ]
                }
            },
            {
                "@_id": 461,
                "@_label": "MGEX Globex Options",
                "products": {
                    "product": [
                        {
                            "@_code": "OMW",
                            "group": {
                                "@_code": "O6"
                            }
                        },
                        {
                            "@_code": "MU1",
                            "group": {
                                "@_code": "O7"
                            }
                        },
                        {
                            "@_code": "MP7",
                            "group": {
                                "@_code": "O7"
                            }
                        },
                        {
                            "@_code": "OIC",
                            "group": {
                                "@_code": "O1"
                            }
                        },
                        {
                            "@_code": "MP2",
                            "group": {
                                "@_code": "O7"
                            }
                        },
                        {
                            "@_code": "MU3",
                            "group": {
                                "@_code": "O7"
                            }
                        },
                        {
                            "@_code": "OIW",
                            "group": {
                                "@_code": "O3"
                            }
                        },
                        {
                            "@_code": "MU6",
                            "group": {
                                "@_code": "O7"
                            }
                        },
                        {
                            "@_code": "MP9",
                            "group": {
                                "@_code": "O7"
                            }
                        },
                        {
                            "@_code": "MP3",
                            "group": {
                                "@_code": "O7"
                            }
                        },
                        {
                            "@_code": "MP5",
                            "group": {
                                "@_code": "O7"
                            }
                        },
                        {
                            "@_code": "MU9",
                            "group": {
                                "@_code": "O7"
                            }
                        },
                        {
                            "@_code": "MU8",
                            "group": {
                                "@_code": "O7"
                            }
                        },
                        {
                            "@_code": "MU5",
                            "group": {
                                "@_code": "O7"
                            }
                        },
                        {
                            "@_code": "MP4",
                            "group": {
                                "@_code": "O7"
                            }
                        },
                        {
                            "@_code": "MU7",
                            "group": {
                                "@_code": "O7"
                            }
                        },
                        {
                            "@_code": "OIH",
                            "group": {
                                "@_code": "O4"
                            }
                        },
                        {
                            "@_code": "OIS",
                            "group": {
                                "@_code": "O2"
                            }
                        },
                        {
                            "@_code": "OIP",
                            "group": {
                                "@_code": "O5"
                            }
                        },
                        {
                            "@_code": "MP1",
                            "group": {
                                "@_code": "O7"
                            }
                        },
                        {
                            "@_code": "MU4",
                            "group": {
                                "@_code": "O7"
                            }
                        },
                        {
                            "@_code": "MP8",
                            "group": {
                                "@_code": "O7"
                            }
                        },
                        {
                            "@_code": "OMW",
                            "group": {
                                "@_code": "4G"
                            }
                        }
                    ]
                },
                "connections": {
                    "connection": [
                        {
                            "@_id": "461H2A",
                            "type": {
                                "#text": "Historical Replay",
                                "@_feed-type": "H"
                            },
                            "protocol": "TCP/IP",
                            "host-ip": [
                                "205.209.218.10",
                                "205.209.218.10"
                            ],
                            "port": 10000,
                            "feed": "A"
                        },
                        {
                            "@_id": "461IA",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.113",
                            "host-ip": [
                                "205.209.223.74",
                                "205.209.221.74"
                            ],
                            "port": 14461,
                            "feed": "A"
                        },
                        {
                            "@_id": "461IB",
                            "type": {
                                "#text": "Incremental",
                                "@_feed-type": "I"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.113",
                            "host-ip": [
                                "205.209.211.74",
                                "205.209.212.74"
                            ],
                            "port": 15461,
                            "feed": "B"
                        },
                        {
                            "@_id": "461NA",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.123",
                            "host-ip": [
                                "205.209.222.86",
                                "205.209.222.74"
                            ],
                            "port": 14461,
                            "feed": "A"
                        },
                        {
                            "@_id": "461NB",
                            "type": {
                                "#text": "Instrument Replay",
                                "@_feed-type": "N"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.123",
                            "host-ip": [
                                "205.209.213.49",
                                "205.209.214.49"
                            ],
                            "port": 15461,
                            "feed": "B"
                        },
                        {
                            "@_id": "461SA",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.33.118",
                            "host-ip": [
                                "205.209.222.78",
                                "205.209.222.88"
                            ],
                            "port": 14461,
                            "feed": "A"
                        },
                        {
                            "@_id": "461SB",
                            "type": {
                                "#text": "Snapshot",
                                "@_feed-type": "S"
                            },
                            "protocol": "UDP/IP",
                            "ip": "224.0.34.118",
                            "host-ip": [
                                "205.209.213.53",
                                "205.209.214.53"
                            ],
                            "port": 15461,
                            "feed": "B"
                        },
                        {
                            "@_id": "461SAMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.37",
                            "host-ip": [
                                "205.209.222.110",
                                "205.209.222.111"
                            ],
                            "port": 23461,
                            "feed": "A"
                        },
                        {
                            "@_id": "461SBMBO",
                            "type": {
                                "#text": "Snapshot-MBO",
                                "@_feed-type": "SMBO"
                            },
                            "protocol": "UDP/IP",
                            "ip": "233.72.75.100",
                            "host-ip": [
                                "205.209.213.65",
                                "205.209.214.65"
                            ],
                            "port": 22461,
                            "feed": "B"
                        }
                    ]
                }
            }
        ]
    }
}
