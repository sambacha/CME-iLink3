{
    "templates": {
        "template": [
            {
                "@_name": "MDIncRefresh_81",
                "@_id": 81,
                "@_dictionary": 81,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": {
                    "@_name": "MsgSeqNum",
                    "@_id": 34
                },
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "@_presence": "optional",
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "@_presence": "optional",
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "@_presence": "optional",
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional",
                            "delta": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": "J"
                            }
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": 0
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_110",
                "@_id": 110,
                "@_dictionary": 110,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional",
                            "increment": ""
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "@_presence": "optional",
                            "copy": ""
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_109",
                "@_id": 109,
                "@_dictionary": 109,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional",
                            "increment": ""
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": {
                                "default": {
                                    "@_value": -2
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": ""
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_108",
                "@_id": 108,
                "@_dictionary": 108,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional",
                            "increment": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": {
                                "default": {
                                    "@_value": -2
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": ""
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_97",
                "@_id": 97,
                "@_dictionary": 97,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": "B"
                            }
                        },
                        {
                            "@_name": "FixingBracket",
                            "@_id": 5790,
                            "@_presence": "optional",
                            "copy": ""
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": 0
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_77",
                "@_id": 77,
                "@_dictionary": 77,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": "B"
                            }
                        },
                        {
                            "@_name": "FixingBracket",
                            "@_id": 5790,
                            "@_presence": "optional",
                            "copy": ""
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": 0
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_103",
                "@_id": 103,
                "@_dictionary": 103,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional",
                            "delta": ""
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": {
                                "default": {
                                    "@_value": 0
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": ""
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_69",
                "@_id": 69,
                "@_dictionary": 69,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional",
                            "delta": ""
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": {
                                "default": {
                                    "@_value": 0
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": ""
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_83",
                "@_id": 83,
                "@_dictionary": 83,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "delta": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "default": {
                                "@_value": 2
                            }
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "exponent": {
                            "default": {
                                "@_value": 0
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_32",
                "@_id": 32,
                "@_dictionary": 32,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "delta": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "default": {
                                "@_value": 2
                            }
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "exponent": {
                            "default": {
                                "@_value": 0
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_84",
                "@_id": 84,
                "@_dictionary": 84,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "default": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "delta": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": {
                                "default": {
                                    "@_value": 0
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": {
                                    "@_value": 0
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_68",
                "@_id": 68,
                "@_dictionary": 68,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "default": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "delta": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": {
                                "default": {
                                    "@_value": 0
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": {
                                    "@_value": 0
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_104",
                "@_id": 104,
                "@_dictionary": 104,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": "K"
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": {
                                "default": {
                                    "@_value": -2
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": {
                                    "@_value": -2
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_71",
                "@_id": 71,
                "@_dictionary": 71,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": "K"
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": {
                                "default": {
                                    "@_value": -2
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": {
                                    "@_value": -2
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_59",
                "@_id": 59,
                "@_dictionary": 59,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 1200,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": "K"
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": {
                                "default": {
                                    "@_value": -2
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": {
                                    "@_value": -2
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_86",
                "@_id": 86,
                "@_dictionary": 86,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional",
                            "copy": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": "K"
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "default": {
                                "@_value": 2
                            }
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_35",
                "@_id": 35,
                "@_dictionary": 35,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "delta": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional",
                            "copy": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": "K"
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "default": {
                                "@_value": 2
                            }
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_87",
                "@_id": 87,
                "@_dictionary": 87,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "copy": {
                                "@_value": "K"
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "default": {
                                "@_value": 2
                            }
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_36",
                "@_id": 36,
                "@_dictionary": 36,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "copy": {
                                "@_value": "K"
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "default": {
                                "@_value": 2
                            }
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_88",
                "@_id": 88,
                "@_dictionary": 88,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "default": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "delta": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "delta": ""
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": {
                                "default": {
                                    "@_value": -1
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": {
                                    "@_value": -1
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_72",
                "@_id": 72,
                "@_dictionary": 72,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "default": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "delta": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "delta": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "delta": ""
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": {
                                "default": {
                                    "@_value": -1
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": {
                                    "@_value": -1
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_105",
                "@_id": 105,
                "@_dictionary": 105,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional",
                            "increment": ""
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": ""
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": {
                                "default": {
                                    "@_value": 0
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_67",
                "@_id": 67,
                "@_dictionary": 67,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional",
                            "increment": ""
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": ""
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": {
                                "default": {
                                    "@_value": 0
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_90",
                "@_id": 90,
                "@_dictionary": 90,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "delta": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "default": {
                                "@_value": 2
                            }
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "exponent": {
                            "default": {
                                "@_value": 0
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_39",
                "@_id": 39,
                "@_dictionary": 39,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "delta": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "default": {
                                "@_value": 2
                            }
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "exponent": {
                            "default": {
                                "@_value": 0
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_91",
                "@_id": 91,
                "@_dictionary": 91,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "default": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "delta": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": {
                                "default": {
                                    "@_value": 0
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": {
                                    "@_value": 0
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_70",
                "@_id": 70,
                "@_dictionary": 70,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "default": {
                                "@_value": 0
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "delta": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": {
                                "default": {
                                    "@_value": 0
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": {
                                    "@_value": 0
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_93",
                "@_id": 93,
                "@_dictionary": 93,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "constant": {
                                "@_value": 5
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "constant": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "delta": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "delta": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "copy": {
                                "@_value": 1
                            }
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "default": {
                                "@_value": 2
                            }
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": 0
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_41",
                "@_id": 41,
                "@_dictionary": 41,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "constant": {
                                "@_value": 5
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "constant": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "delta": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "delta": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "delta": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "copy": {
                                "@_value": 1
                            }
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "default": {
                                "@_value": 2
                            }
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": 0
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_106",
                "@_id": 106,
                "@_dictionary": 106,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "default": {
                                "@_value": 5
                            }
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    },
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "@_presence": "optional",
                            "exponent": {
                                "default": {
                                    "@_value": 0
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": ""
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ]
                }
            },
            {
                "@_name": "MDIncRefresh_73",
                "@_id": 73,
                "@_dictionary": 73,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "default": {
                                "@_value": 5
                            }
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    },
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "@_presence": "optional",
                            "exponent": {
                                "default": {
                                    "@_value": 0
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": ""
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ]
                }
            },
            {
                "@_name": "MDIncRefresh_95",
                "@_id": 95,
                "@_dictionary": 95,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "constant": {
                                "@_value": 5
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "constant": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "delta": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "copy": ""
                        },
                        {
                            "@_name": "MDQuoteType",
                            "@_id": 1070,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": 0
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_43",
                "@_id": 43,
                "@_dictionary": 43,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "constant": {
                                "@_value": 5
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "constant": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "delta": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "delta": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "copy": ""
                        },
                        {
                            "@_name": "MDQuoteType",
                            "@_id": 1070,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": 0
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_96",
                "@_id": 96,
                "@_dictionary": 96,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "constant": {
                                "@_value": 5
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "constant": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "copy": ""
                        },
                        {
                            "@_name": "MDQuoteType",
                            "@_id": 1070,
                            "@_presence": "optional",
                            "constant": {
                                "@_value": 0
                            }
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": 0
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_44",
                "@_id": 44,
                "@_dictionary": 44,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "constant": {
                                "@_value": 5
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "constant": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "copy": ""
                        },
                        {
                            "@_name": "MDQuoteType",
                            "@_id": 1070,
                            "@_presence": "optional",
                            "constant": {
                                "@_value": 0
                            }
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": 0
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_107",
                "@_id": 107,
                "@_dictionary": 107,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 5
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MDQuoteType",
                            "@_id": 1070,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "@_presence": "optional",
                            "exponent": {
                                "default": {
                                    "@_value": -2
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": ""
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_74",
                "@_id": 74,
                "@_dictionary": 74,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "copy": {
                                "@_value": 5
                            }
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "copy": ""
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "increment": ""
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "copy": ""
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MDQuoteType",
                            "@_id": 1070,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional",
                            "default": ""
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "@_presence": "optional",
                            "exponent": {
                                "default": {
                                    "@_value": -2
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": ""
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    }
                }
            },
            {
                "@_name": "MDSecurityDefinition_79",
                "@_id": 79,
                "@_dictionary": 79,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "d"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    },
                    {
                        "@_name": "SettlePriceType",
                        "@_id": 731,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityGroup",
                        "@_id": 1151,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "Symbol",
                        "@_id": 55,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityDesc",
                        "@_id": 107,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "CFICode",
                        "@_id": 461,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "UnderlyingProduct",
                        "@_id": 462,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityExchange",
                        "@_id": 207,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "PricingModel",
                        "@_id": 9853,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "UnitOfMeasureQty",
                        "@_id": 1147,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "StrikeCurrency",
                        "@_id": 947,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "Currency",
                        "@_id": 15,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SettlCurrency",
                        "@_id": 120,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MatchAlgo",
                        "@_id": 1142,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecuritySubType",
                        "@_id": 762,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MaxPriceVariation",
                        "@_id": 1143,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ImpliedMarketIndicator",
                        "@_id": 1144,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityUpdateAction",
                        "@_id": 980,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ApplID",
                        "@_id": 1180,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "UserDefinedInstrument",
                        "@_id": 9779,
                        "@_presence": "optional",
                        "constant": {
                            "@_value": "Y"
                        }
                    },
                    {
                        "@_name": "UnitofMeasure",
                        "@_id": 996,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TotNumReports",
                        "@_id": 911,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityID",
                        "@_id": 48,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityIDSource",
                        "@_id": 22,
                        "@_presence": "optional",
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "ExpirationCycle",
                        "@_id": 827,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ContractMultiplierType",
                        "@_id": 1435,
                        "@_presence": "optional",
                        "default": {
                            "@_value": 1
                        }
                    },
                    {
                        "@_name": "FlowScheduleType",
                        "@_id": 1439,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ContractMultiplier",
                        "@_id": 231,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ClearedVolume",
                        "@_id": 5791,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "OpenInterestQty",
                        "@_id": 5792,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "TradingReferenceDate",
                        "@_id": 5796,
                        "@_presence": "optional"
                    }
                ],
                "uInt64": [
                    {
                        "@_name": "SendingTime",
                        "@_id": 52
                    },
                    {
                        "@_name": "MinTradeVol",
                        "@_id": 562,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MaxTradeVol",
                        "@_id": 1140,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MaturityMonthYear",
                        "@_id": 200,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "LastUpdateTime",
                        "@_id": 779,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "DecayQuantity",
                        "@_id": 5818,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "DecayStartDate",
                        "@_id": 5819,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "OriginalContractSize",
                        "@_id": 5849,
                        "@_presence": "optional"
                    }
                ],
                "sequence": [
                    {
                        "@_name": "Events",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoEvents",
                            "@_id": 864
                        },
                        "uInt32": {
                            "@_name": "EventType",
                            "@_id": 865,
                            "@_presence": "optional",
                            "delta": ""
                        },
                        "uInt64": [
                            {
                                "@_name": "EventDate",
                                "@_id": 866,
                                "@_presence": "optional",
                                "delta": ""
                            },
                            {
                                "@_name": "EventTime",
                                "@_id": 1145,
                                "@_presence": "optional",
                                "delta": ""
                            }
                        ]
                    },
                    {
                        "@_name": "SecurityAltIDs",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoSecurityAltID",
                            "@_id": 454
                        },
                        "string": {
                            "@_name": "SecurityAltID",
                            "@_id": 455,
                            "@_presence": "optional"
                        },
                        "uInt32": {
                            "@_name": "SecurityAltIDSource",
                            "@_id": 456,
                            "@_presence": "optional",
                            "constant": {
                                "@_value": 8
                            }
                        }
                    },
                    {
                        "@_name": "MDFeedTypes",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoMDFeedTypes",
                            "@_id": 1141
                        },
                        "string": {
                            "@_name": "MDFeedType",
                            "@_id": 1022,
                            "default": {
                                "@_value": "GBX"
                            }
                        },
                        "uInt32": {
                            "@_name": "MarketDepth",
                            "@_id": 264
                        }
                    },
                    {
                        "@_name": "Underlyings",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoUnderlyings",
                            "@_id": 711
                        },
                        "string": {
                            "@_name": "UnderlyingSymbol",
                            "@_id": 311,
                            "constant": {
                                "@_value": "[N/A]"
                            }
                        },
                        "uInt32": [
                            {
                                "@_name": "UnderlyingSecurityID",
                                "@_id": 309,
                                "delta": ""
                            },
                            {
                                "@_name": "UnderlyingSecurityIDSource",
                                "@_id": 305,
                                "constant": {
                                    "@_value": 8
                                }
                            }
                        ]
                    },
                    {
                        "@_name": "InstrAttrib",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoInstrAttrib",
                            "@_id": 870
                        },
                        "uInt64": {
                            "@_name": "InstrAttribType",
                            "@_id": 871,
                            "delta": ""
                        },
                        "string": {
                            "@_name": "InstrAttribValue",
                            "@_id": 872,
                            "@_presence": "optional",
                            "copy": ""
                        }
                    },
                    {
                        "@_name": "Legs",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoLegs",
                            "@_id": 555
                        },
                        "string": [
                            {
                                "@_name": "LegSymbol",
                                "@_id": 600,
                                "default": {
                                    "@_value": "[N/A]"
                                }
                            },
                            {
                                "@_name": "LegSecurityDesc",
                                "@_id": 620,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegSide",
                                "@_id": 624,
                                "@_presence": "optional",
                                "default": {
                                    "@_value": 1
                                }
                            },
                            {
                                "@_name": "LegSecurityGroup",
                                "@_id": 5795,
                                "@_presence": "optional",
                                "copy": ""
                            },
                            {
                                "@_name": "LegCFICode",
                                "@_id": 608,
                                "@_presence": "optional",
                                "copy": ""
                            },
                            {
                                "@_name": "LegSecuritySubType",
                                "@_id": 764,
                                "@_presence": "optional",
                                "copy": ""
                            },
                            {
                                "@_name": "LegCurrency",
                                "@_id": 556,
                                "@_presence": "optional",
                                "copy": ""
                            },
                            {
                                "@_name": "LegSecurityExchange",
                                "@_id": 616,
                                "@_presence": "optional",
                                "copy": ""
                            },
                            {
                                "@_name": "LegStrikeCurrency",
                                "@_id": 942,
                                "@_presence": "optional",
                                "copy": ""
                            }
                        ],
                        "uInt32": [
                            {
                                "@_name": "LegRatioQty",
                                "@_id": 623,
                                "copy": ""
                            },
                            {
                                "@_name": "LegSecurityIDSource",
                                "@_id": 603,
                                "constant": {
                                    "@_value": 8
                                }
                            }
                        ],
                        "uInt64": [
                            {
                                "@_name": "LegSecurityID",
                                "@_id": 602,
                                "delta": ""
                            },
                            {
                                "@_name": "LegMaturityMonthYear",
                                "@_id": 610,
                                "@_presence": "optional",
                                "delta": ""
                            }
                        ],
                        "decimal": [
                            {
                                "@_name": "LegStrikePrice",
                                "@_id": 612,
                                "@_presence": "optional",
                                "exponent": {
                                    "copy": {
                                        "@_value": -2
                                    }
                                },
                                "mantissa": {
                                    "delta": ""
                                }
                            },
                            {
                                "@_name": "LegPrice",
                                "@_id": 566,
                                "@_presence": "optional",
                                "exponent": {
                                    "copy": {
                                        "@_value": -2
                                    }
                                },
                                "mantissa": {
                                    "delta": ""
                                }
                            },
                            {
                                "@_name": "LegOptionDelta",
                                "@_id": 1017,
                                "@_presence": "optional",
                                "exponent": {
                                    "copy": {
                                        "@_value": -2
                                    }
                                },
                                "mantissa": {
                                    "delta": ""
                                }
                            }
                        ]
                    },
                    {
                        "@_name": "LotTypeRules",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NumLotTypeRules",
                            "@_id": 1234
                        },
                        "string": {
                            "@_name": "LotType",
                            "@_id": 1093,
                            "@_presence": "optional"
                        },
                        "decimal": {
                            "@_name": "MinLotSize",
                            "@_id": 1231,
                            "@_presence": "optional",
                            "exponent": {
                                "default": {
                                    "@_value": 0
                                }
                            },
                            "mantissa": ""
                        }
                    }
                ],
                "decimal": [
                    {
                        "@_name": "TradingReferencePrice",
                        "@_id": 1150,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "HighLimitPx",
                        "@_id": 1149,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "LowLimitPx",
                        "@_id": 1148,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "MinCabPrice",
                        "@_id": 9850,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "StrikePrice",
                        "@_id": 202,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "MinPriceIncrement",
                        "@_id": 969,
                        "@_presence": "optional",
                        "exponent": {
                            "copy": {
                                "@_value": -2
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    {
                        "@_name": "MinPriceIncrementAmount",
                        "@_id": 1146,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "DisplayFactor",
                        "@_id": 9787,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "PriceRatio",
                        "@_id": 5770,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": 0
                            }
                        },
                        "mantissa": ""
                    }
                ]
            },
            {
                "@_name": "MDSecurityDefinition_78",
                "@_id": 78,
                "@_dictionary": 78,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "d"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    },
                    {
                        "@_name": "SecurityGroup",
                        "@_id": 1151,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "Symbol",
                        "@_id": 55,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityDesc",
                        "@_id": 107,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "CFICode",
                        "@_id": 461,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "UnderlyingProduct",
                        "@_id": 462,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityExchange",
                        "@_id": 207,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "PricingModel",
                        "@_id": 9853,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "UnitOfMeasureQty",
                        "@_id": 1147,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "StrikeCurrency",
                        "@_id": 947,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "Currency",
                        "@_id": 15,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SettlCurrency",
                        "@_id": 120,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MatchAlgo",
                        "@_id": 1142,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecuritySubType",
                        "@_id": 762,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MaxPriceVariation",
                        "@_id": 1143,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ImpliedMarketIndicator",
                        "@_id": 1144,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ApplFeedId",
                        "@_id": 1180,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "UserDefinedInstrument",
                        "@_id": 9779,
                        "@_presence": "optional",
                        "constant": {
                            "@_value": "Y"
                        }
                    },
                    {
                        "@_name": "UnitofMeasure",
                        "@_id": 996,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TotNumReports",
                        "@_id": 911,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityID",
                        "@_id": 48,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityIDSource",
                        "@_id": 22,
                        "@_presence": "optional",
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "ExpirationCycle",
                        "@_id": 827,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ContractMultiplierType",
                        "@_id": 1435,
                        "@_presence": "optional",
                        "default": {
                            "@_value": 1
                        }
                    },
                    {
                        "@_name": "FlowScheduleType",
                        "@_id": 1439,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ContractMultiplier",
                        "@_id": 231,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ClearedVolume",
                        "@_id": 5791,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "OpenInterestQty",
                        "@_id": 5792,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "TradingReferenceDate",
                        "@_id": 5796,
                        "@_presence": "optional"
                    }
                ],
                "uInt64": [
                    {
                        "@_name": "SendingTime",
                        "@_id": 52
                    },
                    {
                        "@_name": "MinTradeVol",
                        "@_id": 562,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MaxTradeVol",
                        "@_id": 1140,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MaturityMonthYear",
                        "@_id": 200,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "DecayQuantity",
                        "@_id": 5818,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "DecayStartDate",
                        "@_id": 5819,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "OriginalContractSize",
                        "@_id": 5849,
                        "@_presence": "optional"
                    }
                ],
                "sequence": [
                    {
                        "@_name": "Events",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoEvents",
                            "@_id": 864
                        },
                        "uInt32": {
                            "@_name": "EventType",
                            "@_id": 865,
                            "@_presence": "optional",
                            "delta": ""
                        },
                        "uInt64": [
                            {
                                "@_name": "EventDate",
                                "@_id": 866,
                                "@_presence": "optional",
                                "delta": ""
                            },
                            {
                                "@_name": "EventTime",
                                "@_id": 1145,
                                "@_presence": "optional",
                                "delta": ""
                            }
                        ]
                    },
                    {
                        "@_name": "MDFeedTypes",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoMDFeedTypes",
                            "@_id": 1141
                        },
                        "string": {
                            "@_name": "MDFeedType",
                            "@_id": 1022,
                            "default": {
                                "@_value": "GBX"
                            }
                        },
                        "uInt32": {
                            "@_name": "MarketDepth",
                            "@_id": 264
                        }
                    },
                    {
                        "@_name": "Underlyings",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoUnderlyings",
                            "@_id": 711
                        },
                        "string": {
                            "@_name": "UnderlyingSymbol",
                            "@_id": 311,
                            "constant": {
                                "@_value": "[N/A]"
                            }
                        },
                        "uInt32": [
                            {
                                "@_name": "UnderlyingSecurityID",
                                "@_id": 309,
                                "delta": ""
                            },
                            {
                                "@_name": "UnderlyingSecurityIDSource",
                                "@_id": 305,
                                "constant": {
                                    "@_value": 8
                                }
                            }
                        ]
                    },
                    {
                        "@_name": "InstrAttrib",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoInstrAttrib",
                            "@_id": 870
                        },
                        "uInt64": {
                            "@_name": "InstrAttribType",
                            "@_id": 871,
                            "delta": ""
                        },
                        "string": {
                            "@_name": "InstrAttribValue",
                            "@_id": 872,
                            "@_presence": "optional",
                            "copy": ""
                        }
                    },
                    {
                        "@_name": "Legs",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoLegs",
                            "@_id": 555
                        },
                        "string": [
                            {
                                "@_name": "LegSymbol",
                                "@_id": 600,
                                "default": {
                                    "@_value": "[N/A]"
                                }
                            },
                            {
                                "@_name": "LegSide",
                                "@_id": 624,
                                "@_presence": "optional",
                                "default": {
                                    "@_value": 1
                                }
                            },
                            {
                                "@_name": "LegCFICode",
                                "@_id": 608,
                                "@_presence": "optional",
                                "copy": ""
                            },
                            {
                                "@_name": "LegSecuritySubType",
                                "@_id": 764,
                                "@_presence": "optional",
                                "copy": ""
                            },
                            {
                                "@_name": "LegCurrency",
                                "@_id": 556,
                                "@_presence": "optional",
                                "copy": ""
                            },
                            {
                                "@_name": "LegSecurityExchange",
                                "@_id": 616,
                                "@_presence": "optional",
                                "copy": ""
                            },
                            {
                                "@_name": "LegStrikeCurrency",
                                "@_id": 942,
                                "@_presence": "optional",
                                "copy": ""
                            }
                        ],
                        "uInt32": [
                            {
                                "@_name": "LegRatioQty",
                                "@_id": 623,
                                "copy": ""
                            },
                            {
                                "@_name": "LegSecurityIDSource",
                                "@_id": 603,
                                "constant": {
                                    "@_value": 8
                                }
                            }
                        ],
                        "uInt64": [
                            {
                                "@_name": "LegSecurityID",
                                "@_id": 602,
                                "delta": ""
                            },
                            {
                                "@_name": "LegMaturityMonthYear",
                                "@_id": 610,
                                "@_presence": "optional",
                                "delta": ""
                            }
                        ],
                        "decimal": [
                            {
                                "@_name": "LegStrikePrice",
                                "@_id": 612,
                                "@_presence": "optional",
                                "exponent": {
                                    "copy": {
                                        "@_value": -2
                                    }
                                },
                                "mantissa": {
                                    "delta": ""
                                }
                            },
                            {
                                "@_name": "LegPrice",
                                "@_id": 566,
                                "@_presence": "optional",
                                "exponent": {
                                    "copy": {
                                        "@_value": -2
                                    }
                                },
                                "mantissa": {
                                    "delta": ""
                                }
                            },
                            {
                                "@_name": "LegOptionDelta",
                                "@_id": 1017,
                                "@_presence": "optional",
                                "exponent": {
                                    "copy": {
                                        "@_value": -2
                                    }
                                },
                                "mantissa": {
                                    "delta": ""
                                }
                            }
                        ]
                    }
                ],
                "decimal": [
                    {
                        "@_name": "TradingReferencePrice",
                        "@_id": 1150,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "HighLimitPx",
                        "@_id": 1149,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "LowLimitPx",
                        "@_id": 1148,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "MinCabPrice",
                        "@_id": 9850,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "StrikePrice",
                        "@_id": 202,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "MinPriceIncrement",
                        "@_id": 969,
                        "@_presence": "optional",
                        "exponent": {
                            "copy": {
                                "@_value": -2
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    {
                        "@_name": "MinPriceIncrementAmount",
                        "@_id": 1146,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "DisplayFactor",
                        "@_id": 9787,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "PriceRatio",
                        "@_id": 5770,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": 0
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "MinLotSize",
                        "@_id": 1231,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": 0
                            }
                        },
                        "mantissa": ""
                    }
                ]
            },
            {
                "@_name": "MDSecurityDefinition_52",
                "@_id": 52,
                "@_dictionary": 52,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "d"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    },
                    {
                        "@_name": "SecurityGroup",
                        "@_id": 1151,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "Symbol",
                        "@_id": 55,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityDesc",
                        "@_id": 107,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "CFICode",
                        "@_id": 461,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "UnderlyingProduct",
                        "@_id": 462,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityExchange",
                        "@_id": 207,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "PricingModel",
                        "@_id": 9853,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "UnitOfMeasureQty",
                        "@_id": 1147,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "StrikeCurrency",
                        "@_id": 947,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "Currency",
                        "@_id": 15,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SettlCurrency",
                        "@_id": 120,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MatchAlgo",
                        "@_id": 1142,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecuritySubType",
                        "@_id": 762,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MaxPriceVariation",
                        "@_id": 1143,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ImpliedMarketIndicator",
                        "@_id": 1144,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ApplFeedId",
                        "@_id": 1180,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "UserDefinedInstrument",
                        "@_id": 9779,
                        "@_presence": "optional",
                        "constant": {
                            "@_value": "Y"
                        }
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TotNumReports",
                        "@_id": 911,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityID",
                        "@_id": 48,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityIDSource",
                        "@_id": 22,
                        "@_presence": "optional",
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "ExpirationCycle",
                        "@_id": 827,
                        "@_presence": "optional"
                    }
                ],
                "uInt64": [
                    {
                        "@_name": "SendingTime",
                        "@_id": 52
                    },
                    {
                        "@_name": "MinTradeVol",
                        "@_id": 562,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MaxTradeVol",
                        "@_id": 1140,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MaturityDate",
                        "@_id": 200,
                        "@_presence": "optional"
                    }
                ],
                "sequence": [
                    {
                        "@_name": "Events",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoEvents",
                            "@_id": 864
                        },
                        "uInt32": {
                            "@_name": "EventType",
                            "@_id": 865,
                            "@_presence": "optional",
                            "delta": ""
                        },
                        "uInt64": [
                            {
                                "@_name": "EventDate",
                                "@_id": 866,
                                "@_presence": "optional",
                                "delta": ""
                            },
                            {
                                "@_name": "EventTime",
                                "@_id": 1145,
                                "@_presence": "optional",
                                "delta": ""
                            }
                        ]
                    },
                    {
                        "@_name": "MDFeedTypes",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoMDFeedTypes",
                            "@_id": 1141
                        },
                        "string": {
                            "@_name": "MDFeedType",
                            "@_id": 1022,
                            "constant": {
                                "@_value": "GBX"
                            }
                        },
                        "uInt32": {
                            "@_name": "MarketDepth",
                            "@_id": 264
                        }
                    },
                    {
                        "@_name": "Underlyings",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoUnderlyings",
                            "@_id": 711
                        },
                        "string": {
                            "@_name": "UnderlyingSymbol",
                            "@_id": 311,
                            "constant": {
                                "@_value": "[N/A]"
                            }
                        },
                        "uInt32": [
                            {
                                "@_name": "UnderlyingSecurityID",
                                "@_id": 309,
                                "delta": ""
                            },
                            {
                                "@_name": "UnderlyingSecurityIDSource",
                                "@_id": 305,
                                "constant": {
                                    "@_value": 8
                                }
                            }
                        ]
                    },
                    {
                        "@_name": "InstrAttrib",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoInstrAttrib",
                            "@_id": 870
                        },
                        "uInt64": {
                            "@_name": "InstrAttribType",
                            "@_id": 871,
                            "delta": ""
                        },
                        "string": {
                            "@_name": "InstrAttribValue",
                            "@_id": 872,
                            "@_presence": "optional",
                            "copy": ""
                        }
                    },
                    {
                        "@_name": "Legs",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoLegs",
                            "@_id": 555
                        },
                        "string": [
                            {
                                "@_name": "LegSymbol",
                                "@_id": 600,
                                "default": {
                                    "@_value": "[N/A]"
                                }
                            },
                            {
                                "@_name": "LegSide",
                                "@_id": 624,
                                "@_presence": "optional",
                                "default": {
                                    "@_value": 1
                                }
                            },
                            {
                                "@_name": "LegCFICode",
                                "@_id": 608,
                                "@_presence": "optional",
                                "copy": ""
                            },
                            {
                                "@_name": "LegSecuritySubType",
                                "@_id": 764,
                                "@_presence": "optional",
                                "copy": ""
                            },
                            {
                                "@_name": "LegCurrency",
                                "@_id": 556,
                                "@_presence": "optional",
                                "copy": ""
                            },
                            {
                                "@_name": "LegStrikeCurrency",
                                "@_id": 942,
                                "@_presence": "optional",
                                "copy": ""
                            }
                        ],
                        "uInt32": [
                            {
                                "@_name": "LegRatioQty",
                                "@_id": 623,
                                "copy": ""
                            },
                            {
                                "@_name": "LegSecurityIDSource",
                                "@_id": 603,
                                "constant": {
                                    "@_value": 8
                                }
                            }
                        ],
                        "uInt64": [
                            {
                                "@_name": "LegSecurityID",
                                "@_id": 602,
                                "delta": ""
                            },
                            {
                                "@_name": "LegMaturityMonthYear",
                                "@_id": 610,
                                "@_presence": "optional",
                                "delta": ""
                            }
                        ],
                        "decimal": [
                            {
                                "@_name": "LegStrikePrice",
                                "@_id": 612,
                                "@_presence": "optional",
                                "exponent": {
                                    "copy": {
                                        "@_value": -2
                                    }
                                },
                                "mantissa": {
                                    "delta": ""
                                }
                            },
                            {
                                "@_name": "LegPrice",
                                "@_id": 566,
                                "@_presence": "optional",
                                "exponent": {
                                    "copy": {
                                        "@_value": -2
                                    }
                                },
                                "mantissa": {
                                    "delta": ""
                                }
                            },
                            {
                                "@_name": "LegOptionDelta",
                                "@_id": 1017,
                                "@_presence": "optional",
                                "exponent": {
                                    "copy": {
                                        "@_value": -2
                                    }
                                },
                                "mantissa": {
                                    "delta": ""
                                }
                            }
                        ]
                    }
                ],
                "decimal": [
                    {
                        "@_name": "TradingReferencePrice",
                        "@_id": 1150,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "HighLimitPx",
                        "@_id": 1149,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "LowLimitPx",
                        "@_id": 1148,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "MinCabPrice",
                        "@_id": 9850,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "StrikePrice",
                        "@_id": 202,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "MinPriceIncrement",
                        "@_id": 969,
                        "@_presence": "optional",
                        "exponent": {
                            "copy": {
                                "@_value": -2
                            }
                        },
                        "mantissa": {
                            "delta": ""
                        }
                    },
                    {
                        "@_name": "MinPriceIncrementAmount",
                        "@_id": 1146,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "DisplayFactor",
                        "@_id": 9787,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    }
                ]
            },
            {
                "@_name": "MDQuoteRequest_98",
                "@_id": 98,
                "@_dictionary": 98,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "R"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    },
                    {
                        "@_name": "QuoteReqID",
                        "@_id": 131,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": {
                    "@_name": "MsgSeqNum",
                    "@_id": 34
                },
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "RelatedSym",
                    "length": {
                        "@_name": "NoRelatedSym",
                        "@_id": 146
                    },
                    "string": {
                        "@_name": "Symbol",
                        "@_id": 55,
                        "constant": {
                            "@_value": "[N/A]"
                        }
                    },
                    "uInt64": [
                        {
                            "@_name": "OrderQty",
                            "@_id": 38,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TransactTime",
                            "@_id": 60
                        }
                    ],
                    "uInt32": [
                        {
                            "@_name": "Side",
                            "@_id": 54,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "QuoteType",
                            "@_id": 537,
                            "default": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        }
                    ]
                }
            },
            {
                "@_name": "MDQuoteRequest_54",
                "@_id": 54,
                "@_dictionary": 54,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "R"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    },
                    {
                        "@_name": "QuoteReqID",
                        "@_id": 131,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": {
                    "@_name": "MsgSeqNum",
                    "@_id": 34
                },
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "RelatedSym",
                    "length": {
                        "@_name": "NoRelatedSym",
                        "@_id": 146
                    },
                    "string": {
                        "@_name": "Symbol",
                        "@_id": 55,
                        "constant": {
                            "@_value": "[N/A]"
                        }
                    },
                    "uInt64": [
                        {
                            "@_name": "OrderQty",
                            "@_id": 38,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TransactTime",
                            "@_id": 60
                        }
                    ],
                    "uInt32": [
                        {
                            "@_name": "Side",
                            "@_id": 54,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "QuoteType",
                            "@_id": 537,
                            "default": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        }
                    ]
                }
            },
            {
                "@_name": "MDSecurityStatus_102",
                "@_id": 102,
                "@_dictionary": 102,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "f"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    },
                    {
                        "@_name": "Symbol",
                        "@_id": 55,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "SecurityID",
                        "@_id": 48,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityIDSource",
                        "@_id": 22,
                        "@_presence": "optional",
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityTradingStatus",
                        "@_id": 326,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "HaltReason",
                        "@_id": 327,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityTradingEvent",
                        "@_id": 1174,
                        "@_presence": "optional"
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "decimal": [
                    {
                        "@_name": "HighPx",
                        "@_id": 332,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "LowPx",
                        "@_id": 333,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    }
                ]
            },
            {
                "@_name": "MDSecurityStatus_99",
                "@_id": 99,
                "@_dictionary": 99,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "f"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    },
                    {
                        "@_name": "Symbol",
                        "@_id": 55,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "SecurityID",
                        "@_id": 48,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityIDSource",
                        "@_id": 22,
                        "@_presence": "optional",
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    },
                    {
                        "@_name": "SecurityTradingStatus",
                        "@_id": 326,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "HaltReason",
                        "@_id": 327,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityTradingEvent",
                        "@_id": 1174,
                        "@_presence": "optional"
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "decimal": [
                    {
                        "@_name": "HighPx",
                        "@_id": 332,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "LowPx",
                        "@_id": 333,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    }
                ]
            },
            {
                "@_name": "MDSecurityStatus_76",
                "@_id": 76,
                "@_dictionary": 76,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "f"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    },
                    {
                        "@_name": "Symbol",
                        "@_id": 55,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "SecurityID",
                        "@_id": 48,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityIDSource",
                        "@_id": 22,
                        "@_presence": "optional",
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    },
                    {
                        "@_name": "SecurityTradingStatus",
                        "@_id": 326,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "HaltReason",
                        "@_id": 327,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityTradingEvent",
                        "@_id": 1174,
                        "@_presence": "optional"
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "decimal": [
                    {
                        "@_name": "HighPx",
                        "@_id": 332,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "LowPx",
                        "@_id": 333,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    }
                ]
            },
            {
                "@_name": "MDSecurityStatus",
                "@_id": 48,
                "@_dictionary": 48,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "f"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    },
                    {
                        "@_name": "Symbol",
                        "@_id": 55,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "SecurityID",
                        "@_id": 48,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityIDSource",
                        "@_id": 22,
                        "@_presence": "optional",
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "SecurityTradingStatus",
                        "@_id": 326,
                        "@_presence": "optional"
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "decimal": [
                    {
                        "@_name": "HighPx",
                        "@_id": 332,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    },
                    {
                        "@_name": "LowPx",
                        "@_id": 333,
                        "@_presence": "optional",
                        "exponent": {
                            "default": {
                                "@_value": -2
                            }
                        },
                        "mantissa": ""
                    }
                ]
            },
            {
                "@_name": "MDSnapshotFullRefresh_111",
                "@_id": 111,
                "@_dictionary": 111,
                "string": [
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "W"
                        }
                    },
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "LastMsgSeqNumProcessed",
                        "@_id": 369
                    },
                    {
                        "@_name": "TotNumReports",
                        "@_id": 911
                    },
                    {
                        "@_name": "RptSeq",
                        "@_id": 83
                    },
                    {
                        "@_name": "MDBookType",
                        "@_id": 1021
                    },
                    {
                        "@_name": "SecurityID",
                        "@_id": 48
                    },
                    {
                        "@_name": "SecurityIDSource",
                        "@_id": 22,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MDSecurityTradingStatus",
                        "@_id": 1682,
                        "@_presence": "optional"
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "default": {
                                "@_value": "K"
                            }
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "@_presence": "optional",
                            "exponent": {
                                "default": {
                                    "@_value": -2
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": ""
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    },
                    "uInt32": [
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "delta": ""
                        }
                    ]
                }
            },
            {
                "@_name": "MDSnapshotFullRefresh_80",
                "@_id": 80,
                "@_dictionary": 80,
                "string": [
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "W"
                        }
                    },
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "LastMsgSeqNumProcessed",
                        "@_id": 369
                    },
                    {
                        "@_name": "TotNumReports",
                        "@_id": 911
                    },
                    {
                        "@_name": "RptSeq",
                        "@_id": 83
                    },
                    {
                        "@_name": "MDBookType",
                        "@_id": 1021
                    },
                    {
                        "@_name": "SecurityID",
                        "@_id": 48
                    },
                    {
                        "@_name": "SecurityIDSource",
                        "@_id": 22,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MDSecurityTradingStatus",
                        "@_id": 1682,
                        "@_presence": "optional"
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "default": {
                                "@_value": "K"
                            }
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "@_presence": "optional",
                            "exponent": {
                                "default": {
                                    "@_value": -2
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": ""
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    },
                    "uInt32": [
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional",
                            "copy": ""
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "delta": ""
                        }
                    ]
                }
            },
            {
                "@_name": "MDSnapshotFullRefresh_53",
                "@_id": 53,
                "@_dictionary": 53,
                "string": [
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "W"
                        }
                    },
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "LastMsgSeqNumProcessed",
                        "@_id": 369
                    },
                    {
                        "@_name": "TotNumReports",
                        "@_id": 911
                    },
                    {
                        "@_name": "RptSeq",
                        "@_id": 83
                    },
                    {
                        "@_name": "MDBookType",
                        "@_id": 1021
                    },
                    {
                        "@_name": "SecurityID",
                        "@_id": 48,
                        "delta": ""
                    },
                    {
                        "@_name": "SecurityIDSource",
                        "@_id": 22,
                        "constant": {
                            "@_value": 8
                        }
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269,
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional",
                            "default": {
                                "@_value": "K"
                            }
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional",
                            "constant": {
                                "@_value": "U"
                            }
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional",
                            "default": {
                                "@_value": 2
                            }
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional",
                            "default": ""
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "@_presence": "optional",
                            "exponent": {
                                "default": {
                                    "@_value": -2
                                }
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": {
                                "default": ""
                            },
                            "mantissa": {
                                "delta": ""
                            }
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional",
                        "delta": ""
                    },
                    "uInt32": [
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional",
                            "copy": {
                                "@_value": 1
                            }
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional",
                            "copy": ""
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional",
                            "delta": ""
                        }
                    ]
                }
            },
            {
                "@_name": "MDNewsMessage_100",
                "@_id": 100,
                "@_dictionary": 100,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "B"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "Headline",
                        "@_id": 147
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": {
                    "@_name": "MsgSeqNum",
                    "@_id": 34
                },
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "LinesOfText",
                    "length": {
                        "@_name": "NoLinesOfText",
                        "@_id": 33
                    },
                    "string": {
                        "@_name": "text",
                        "@_id": 58,
                        "copy": ""
                    }
                }
            },
            {
                "@_name": "MDNewsMessage",
                "@_id": 49,
                "@_dictionary": 49,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "B"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "Headline",
                        "@_id": 147
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": {
                    "@_name": "MsgSeqNum",
                    "@_id": 34
                },
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "LinesOfText",
                    "length": {
                        "@_name": "NoLinesOfText",
                        "@_id": 33
                    },
                    "string": {
                        "@_name": "text",
                        "@_id": 58,
                        "copy": ""
                    }
                }
            },
            {
                "@_name": "MDHeartbeat_101",
                "@_id": 101,
                "@_dictionary": 101,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": 0
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": {
                    "@_name": "MsgSeqNum",
                    "@_id": 34
                },
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                }
            },
            {
                "@_name": "MDHeartbeat",
                "@_id": 50,
                "@_dictionary": 50,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": 0
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional",
                        "default": ""
                    }
                ],
                "uInt32": {
                    "@_name": "MsgSeqNum",
                    "@_id": 34
                },
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                }
            },
            {
                "@_name": "MDLogon_3",
                "@_id": 3,
                "@_dictionary": 3,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "A"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "ApplID",
                        "@_id": 1180,
                        "constant": {
                            "@_value": "REPLAY"
                        }
                    },
                    {
                        "@_name": "DefaultApplVerID",
                        "@_id": 1137,
                        "constant": {
                            "@_value": 9
                        }
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "EncryptMethod",
                        "@_id": 98,
                        "constant": {
                            "@_value": 0
                        }
                    },
                    {
                        "@_name": "HeartbeatInt",
                        "@_id": 108
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                }
            },
            {
                "@_name": "MDLogon",
                "@_id": 1,
                "@_dictionary": 1,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "A"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "ApplFeedId",
                        "@_id": 1180,
                        "constant": {
                            "@_value": "REPLAY"
                        }
                    },
                    {
                        "@_name": "DefaultApplVerID",
                        "@_id": 1137,
                        "constant": {
                            "@_value": 8
                        }
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "EncryptMethod",
                        "@_id": 98,
                        "constant": {
                            "@_value": 0
                        }
                    },
                    {
                        "@_name": "HeartbeatInt",
                        "@_id": 108
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                }
            },
            {
                "@_name": "MDLogout_4",
                "@_id": 4,
                "@_dictionary": 4,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": 5
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "ApplID",
                        "@_id": 1180,
                        "constant": {
                            "@_value": "REPLAY"
                        }
                    },
                    {
                        "@_name": "Text",
                        "@_id": 58,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": {
                    "@_name": "MsgSeqNum",
                    "@_id": 34
                },
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                }
            },
            {
                "@_name": "MDLogout",
                "@_id": 2,
                "@_dictionary": 2,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": 5
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "ApplFeedId",
                        "@_id": 1180,
                        "constant": {
                            "@_value": "REPLAY"
                        }
                    },
                    {
                        "@_name": "Text",
                        "@_id": 58,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": {
                    "@_name": "MsgSeqNum",
                    "@_id": 34
                },
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                }
            },
            {
                "@_name": "MDIncRefresh_112",
                "@_id": 112,
                "@_dictionary": 112,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": "",
                            "mantissa": ""
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_113",
                "@_id": 113,
                "@_dictionary": 113,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": "",
                            "mantissa": ""
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    }
                }
            },
            {
                "@_name": "MDSnapshotFullRefresh_114",
                "@_id": 114,
                "@_dictionary": 114,
                "string": [
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "W"
                        }
                    },
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "LastMsgSeqNumProcessed",
                        "@_id": 369
                    },
                    {
                        "@_name": "TotNumReports",
                        "@_id": 911
                    },
                    {
                        "@_name": "RptSeq",
                        "@_id": 83
                    },
                    {
                        "@_name": "MDBookType",
                        "@_id": 1021
                    },
                    {
                        "@_name": "SecurityID",
                        "@_id": 48
                    },
                    {
                        "@_name": "SecurityIDSource",
                        "@_id": 22,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MDSecurityTradingStatus",
                        "@_id": 1682,
                        "@_presence": "optional"
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    },
                    "uInt32": [
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional"
                        }
                    ]
                }
            },
            {
                "@_name": "MDIncRefresh_115",
                "@_id": 115,
                "@_dictionary": 115,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_116",
                "@_id": 116,
                "@_dictionary": 116,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "exponent": "",
                        "mantissa": ""
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_117",
                "@_id": 117,
                "@_dictionary": 117,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "exponent": "",
                        "mantissa": ""
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271
                    }
                }
            },
            {
                "@_name": "MDSnapshotFullRefresh_118",
                "@_id": 118,
                "@_dictionary": 118,
                "string": [
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "W"
                        }
                    },
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "LastMsgSeqNumProcessed",
                        "@_id": 369
                    },
                    {
                        "@_name": "TotNumReports",
                        "@_id": 911
                    },
                    {
                        "@_name": "RptSeq",
                        "@_id": 83
                    },
                    {
                        "@_name": "MDBookType",
                        "@_id": 1021
                    },
                    {
                        "@_name": "SecurityID",
                        "@_id": 48
                    },
                    {
                        "@_name": "SecurityIDSource",
                        "@_id": 22,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MDSecurityTradingStatus",
                        "@_id": 1682,
                        "@_presence": "optional"
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    },
                    "uInt32": [
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional"
                        }
                    ]
                }
            },
            {
                "@_name": "MDIncRefresh_119",
                "@_id": 119,
                "@_dictionary": 119,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": {
                    "@_name": "MsgSeqNum",
                    "@_id": 34
                },
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "@_presence": "optional",
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_120",
                "@_id": 120,
                "@_dictionary": 120,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "exponent": "",
                        "mantissa": ""
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_121",
                "@_id": 121,
                "@_dictionary": 121,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "exponent": "",
                        "mantissa": ""
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_122",
                "@_id": 122,
                "@_dictionary": 122,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": "",
                            "mantissa": ""
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    }
                }
            },
            {
                "@_name": "MDSecurityDefinition_123",
                "@_id": 123,
                "@_dictionary": 123,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "d"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SettlePriceType",
                        "@_id": 731,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityGroup",
                        "@_id": 1151,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "Symbol",
                        "@_id": 55,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityDesc",
                        "@_id": 107,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "CFICode",
                        "@_id": 461,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "UnderlyingProduct",
                        "@_id": 462,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityExchange",
                        "@_id": 207,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "PricingModel",
                        "@_id": 9853,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "UnitOfMeasureQty",
                        "@_id": 1147,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "StrikeCurrency",
                        "@_id": 947,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "Currency",
                        "@_id": 15,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SettlCurrency",
                        "@_id": 120,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MatchAlgo",
                        "@_id": 1142,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecuritySubType",
                        "@_id": 762,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MaxPriceVariation",
                        "@_id": 1143,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ImpliedMarketIndicator",
                        "@_id": 1144,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityUpdateAction",
                        "@_id": 980,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ApplID",
                        "@_id": 1180,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "UserDefinedInstrument",
                        "@_id": 9779,
                        "@_presence": "optional",
                        "constant": {
                            "@_value": "Y"
                        }
                    },
                    {
                        "@_name": "UnitofMeasure",
                        "@_id": 996,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TotNumReports",
                        "@_id": 911,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityID",
                        "@_id": 48,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityIDSource",
                        "@_id": 22,
                        "@_presence": "optional",
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "ExpirationCycle",
                        "@_id": 827,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ContractMultiplierType",
                        "@_id": 1435,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "FlowScheduleType",
                        "@_id": 1439,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ContractMultiplier",
                        "@_id": 231,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ClearedVolume",
                        "@_id": 5791,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "OpenInterestQty",
                        "@_id": 5792,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "TradingReferenceDate",
                        "@_id": 5796,
                        "@_presence": "optional"
                    }
                ],
                "uInt64": [
                    {
                        "@_name": "SendingTime",
                        "@_id": 52
                    },
                    {
                        "@_name": "MinTradeVol",
                        "@_id": 562,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MaxTradeVol",
                        "@_id": 1140,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MaturityMonthYear",
                        "@_id": 200,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "LastUpdateTime",
                        "@_id": 779,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "DecayQuantity",
                        "@_id": 5818,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "DecayStartDate",
                        "@_id": 5819,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "OriginalContractSize",
                        "@_id": 5849,
                        "@_presence": "optional"
                    }
                ],
                "sequence": [
                    {
                        "@_name": "Events",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoEvents",
                            "@_id": 864
                        },
                        "uInt32": {
                            "@_name": "EventType",
                            "@_id": 865,
                            "@_presence": "optional"
                        },
                        "uInt64": [
                            {
                                "@_name": "EventDate",
                                "@_id": 866,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "EventTime",
                                "@_id": 1145,
                                "@_presence": "optional"
                            }
                        ]
                    },
                    {
                        "@_name": "SecurityAltIDs",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoSecurityAltID",
                            "@_id": 454
                        },
                        "string": {
                            "@_name": "SecurityAltID",
                            "@_id": 455,
                            "@_presence": "optional"
                        },
                        "uInt32": {
                            "@_name": "SecurityAltIDSource",
                            "@_id": 456,
                            "@_presence": "optional",
                            "constant": {
                                "@_value": 8
                            }
                        }
                    },
                    {
                        "@_name": "MDFeedTypes",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoMDFeedTypes",
                            "@_id": 1141
                        },
                        "string": {
                            "@_name": "MDFeedType",
                            "@_id": 1022
                        },
                        "uInt32": {
                            "@_name": "MarketDepth",
                            "@_id": 264
                        }
                    },
                    {
                        "@_name": "Underlyings",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoUnderlyings",
                            "@_id": 711
                        },
                        "string": {
                            "@_name": "UnderlyingSymbol",
                            "@_id": 311,
                            "constant": {
                                "@_value": "[N/A]"
                            }
                        },
                        "uInt32": [
                            {
                                "@_name": "UnderlyingSecurityID",
                                "@_id": 309
                            },
                            {
                                "@_name": "UnderlyingSecurityIDSource",
                                "@_id": 305,
                                "constant": {
                                    "@_value": 8
                                }
                            }
                        ]
                    },
                    {
                        "@_name": "InstrAttrib",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoInstrAttrib",
                            "@_id": 870
                        },
                        "uInt64": {
                            "@_name": "InstrAttribType",
                            "@_id": 871
                        },
                        "string": {
                            "@_name": "InstrAttribValue",
                            "@_id": 872,
                            "@_presence": "optional"
                        }
                    },
                    {
                        "@_name": "Legs",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoLegs",
                            "@_id": 555
                        },
                        "string": [
                            {
                                "@_name": "LegSymbol",
                                "@_id": 600
                            },
                            {
                                "@_name": "LegSecurityDesc",
                                "@_id": 620,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegSide",
                                "@_id": 624,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegSecurityGroup",
                                "@_id": 5795,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegCFICode",
                                "@_id": 608,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegSecuritySubType",
                                "@_id": 764,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegCurrency",
                                "@_id": 556,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegSecurityExchange",
                                "@_id": 616,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegStrikeCurrency",
                                "@_id": 942,
                                "@_presence": "optional"
                            }
                        ],
                        "uInt32": [
                            {
                                "@_name": "LegRatioQty",
                                "@_id": 623
                            },
                            {
                                "@_name": "LegSecurityIDSource",
                                "@_id": 603,
                                "constant": {
                                    "@_value": 8
                                }
                            }
                        ],
                        "uInt64": [
                            {
                                "@_name": "LegSecurityID",
                                "@_id": 602
                            },
                            {
                                "@_name": "LegMaturityMonthYear",
                                "@_id": 610,
                                "@_presence": "optional"
                            }
                        ],
                        "decimal": [
                            {
                                "@_name": "LegStrikePrice",
                                "@_id": 612,
                                "@_presence": "optional",
                                "exponent": "",
                                "mantissa": ""
                            },
                            {
                                "@_name": "LegPrice",
                                "@_id": 566,
                                "@_presence": "optional",
                                "exponent": "",
                                "mantissa": ""
                            },
                            {
                                "@_name": "LegOptionDelta",
                                "@_id": 1017,
                                "@_presence": "optional",
                                "exponent": "",
                                "mantissa": ""
                            }
                        ]
                    },
                    {
                        "@_name": "LotTypeRules",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NumLotTypeRules",
                            "@_id": 1234
                        },
                        "string": {
                            "@_name": "LotType",
                            "@_id": 1093,
                            "@_presence": "optional"
                        },
                        "decimal": {
                            "@_name": "MinLotSize",
                            "@_id": 1231,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    }
                ],
                "decimal": [
                    {
                        "@_name": "TradingReferencePrice",
                        "@_id": 1150,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "HighLimitPx",
                        "@_id": 1149,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "LowLimitPx",
                        "@_id": 1148,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "MinCabPrice",
                        "@_id": 9850,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "StrikePrice",
                        "@_id": 202,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "MinPriceIncrement",
                        "@_id": 969,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "MinPriceIncrementAmount",
                        "@_id": 1146,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "DisplayFactor",
                        "@_id": 9787,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "PriceRatio",
                        "@_id": 5770,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    }
                ]
            },
            {
                "@_name": "MDLogon_124",
                "@_id": 124,
                "@_dictionary": 124,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "A"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "ApplID",
                        "@_id": 1180,
                        "constant": {
                            "@_value": "REPLAY"
                        }
                    },
                    {
                        "@_name": "DefaultApplVerID",
                        "@_id": 1137,
                        "constant": {
                            "@_value": 9
                        }
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "EncryptMethod",
                        "@_id": 98,
                        "constant": {
                            "@_value": 0
                        }
                    },
                    {
                        "@_name": "HeartbeatInt",
                        "@_id": 108
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                }
            },
            {
                "@_name": "MDIncRefresh_125",
                "@_id": 125,
                "@_dictionary": 125,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "FixingBracket",
                            "@_id": 5790,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    }
                }
            },
            {
                "@_name": "MDLogout_126",
                "@_id": 126,
                "@_dictionary": 126,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": 5
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "ApplID",
                        "@_id": 1180,
                        "constant": {
                            "@_value": "REPLAY"
                        }
                    },
                    {
                        "@_name": "Text",
                        "@_id": 58,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": {
                    "@_name": "MsgSeqNum",
                    "@_id": 34
                },
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                }
            },
            {
                "@_name": "MDSecurityStatus_127",
                "@_id": 127,
                "@_dictionary": 127,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "f"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "Symbol",
                        "@_id": 55,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "SecurityID",
                        "@_id": 48,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityIDSource",
                        "@_id": 22,
                        "@_presence": "optional",
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    },
                    {
                        "@_name": "SecurityTradingStatus",
                        "@_id": 326,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "HaltReason",
                        "@_id": 327,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityTradingEvent",
                        "@_id": 1174,
                        "@_presence": "optional"
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "decimal": [
                    {
                        "@_name": "HighPx",
                        "@_id": 332,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "LowPx",
                        "@_id": 333,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    }
                ]
            },
            {
                "@_name": "MDQuoteRequest_128",
                "@_id": 128,
                "@_dictionary": 128,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "R"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "QuoteReqID",
                        "@_id": 131,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": {
                    "@_name": "MsgSeqNum",
                    "@_id": 34
                },
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "RelatedSym",
                    "length": {
                        "@_name": "NoRelatedSym",
                        "@_id": 146
                    },
                    "string": {
                        "@_name": "Symbol",
                        "@_id": 55,
                        "constant": {
                            "@_value": "[N/A]"
                        }
                    },
                    "uInt64": [
                        {
                            "@_name": "OrderQty",
                            "@_id": 38,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TransactTime",
                            "@_id": 60
                        }
                    ],
                    "uInt32": [
                        {
                            "@_name": "Side",
                            "@_id": 54,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "QuoteType",
                            "@_id": 537
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        }
                    ]
                }
            },
            {
                "@_name": "MDIncRefresh_129",
                "@_id": 129,
                "@_dictionary": 129,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": "",
                            "mantissa": ""
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    }
                }
            },
            {
                "@_name": "MDSecurityStatus_130",
                "@_id": 130,
                "@_dictionary": 130,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "f"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "Symbol",
                        "@_id": 55,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "SecurityID",
                        "@_id": 48,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityIDSource",
                        "@_id": 22,
                        "@_presence": "optional",
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityTradingStatus",
                        "@_id": 326,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "HaltReason",
                        "@_id": 327,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityTradingEvent",
                        "@_id": 1174,
                        "@_presence": "optional"
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "decimal": [
                    {
                        "@_name": "HighPx",
                        "@_id": 332,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "LowPx",
                        "@_id": 333,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    }
                ]
            },
            {
                "@_name": "MDIncRefresh_131",
                "@_id": 131,
                "@_dictionary": 131,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": "",
                            "mantissa": ""
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    }
                }
            },
            {
                "@_name": "MDNewsMessage_132",
                "@_id": 132,
                "@_dictionary": 132,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "B"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "Headline",
                        "@_id": 147
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": {
                    "@_name": "MsgSeqNum",
                    "@_id": 34
                },
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "LinesOfText",
                    "length": {
                        "@_name": "NoLinesOfText",
                        "@_id": 33
                    },
                    "string": {
                        "@_name": "text",
                        "@_id": 58
                    }
                }
            },
            {
                "@_name": "MDHeartbeat_133",
                "@_id": 133,
                "@_dictionary": 133,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": 0
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": {
                    "@_name": "MsgSeqNum",
                    "@_id": 34
                },
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                }
            },
            {
                "@_name": "MDIncRefresh_134",
                "@_id": 134,
                "@_dictionary": 134,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional"
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    },
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    ]
                }
            },
            {
                "@_name": "MDIncRefresh_135",
                "@_id": 135,
                "@_dictionary": 135,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": "",
                            "mantissa": ""
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_136",
                "@_id": 136,
                "@_dictionary": 136,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        },
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": "",
                            "mantissa": ""
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_137",
                "@_id": 137,
                "@_dictionary": 137,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "FixingBracket",
                            "@_id": 5790,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": {
                        "@_name": "MDEntryPx",
                        "@_id": 270,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_138",
                "@_id": 138,
                "@_dictionary": 138,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    }
                }
            },
            {
                "@_name": "MDSecurityDefinition_139",
                "@_id": 139,
                "@_dictionary": 139,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "d"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SettlePriceType",
                        "@_id": 731,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityGroup",
                        "@_id": 1151,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "Symbol",
                        "@_id": 55,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityDesc",
                        "@_id": 107,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "CFICode",
                        "@_id": 461,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "UnderlyingProduct",
                        "@_id": 462,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityExchange",
                        "@_id": 207,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "PricingModel",
                        "@_id": 9853,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "UnitOfMeasureQty",
                        "@_id": 1147,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "StrikeCurrency",
                        "@_id": 947,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "Currency",
                        "@_id": 15,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SettlCurrency",
                        "@_id": 120,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MatchAlgo",
                        "@_id": 1142,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecuritySubType",
                        "@_id": 762,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MaxPriceVariation",
                        "@_id": 1143,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ImpliedMarketIndicator",
                        "@_id": 1144,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityUpdateAction",
                        "@_id": 980,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ApplID",
                        "@_id": 1180,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "UserDefinedInstrument",
                        "@_id": 9779,
                        "@_presence": "optional",
                        "constant": {
                            "@_value": "Y"
                        }
                    },
                    {
                        "@_name": "UnitofMeasure",
                        "@_id": 996,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TotNumReports",
                        "@_id": 911,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityID",
                        "@_id": 48,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityIDSource",
                        "@_id": 22,
                        "@_presence": "optional",
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "ExpirationCycle",
                        "@_id": 827,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ContractMultiplierType",
                        "@_id": 1435,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "FlowScheduleType",
                        "@_id": 1439,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ClearedVolume",
                        "@_id": 5791,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "OpenInterestQty",
                        "@_id": 5792,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "TradingReferenceDate",
                        "@_id": 5796,
                        "@_presence": "optional"
                    }
                ],
                "uInt64": [
                    {
                        "@_name": "SendingTime",
                        "@_id": 52
                    },
                    {
                        "@_name": "MinTradeVol",
                        "@_id": 562,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MaxTradeVol",
                        "@_id": 1140,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MaturityMonthYear",
                        "@_id": 200,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "LastUpdateTime",
                        "@_id": 779,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "DecayQuantity",
                        "@_id": 5818,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "DecayStartDate",
                        "@_id": 5819,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "OriginalContractSize",
                        "@_id": 5849,
                        "@_presence": "optional"
                    }
                ],
                "sequence": [
                    {
                        "@_name": "Events",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoEvents",
                            "@_id": 864
                        },
                        "uInt32": {
                            "@_name": "EventType",
                            "@_id": 865,
                            "@_presence": "optional"
                        },
                        "uInt64": [
                            {
                                "@_name": "EventDate",
                                "@_id": 866,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "EventTime",
                                "@_id": 1145,
                                "@_presence": "optional"
                            }
                        ]
                    },
                    {
                        "@_name": "SecurityAltIDs",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoSecurityAltID",
                            "@_id": 454
                        },
                        "string": {
                            "@_name": "SecurityAltID",
                            "@_id": 455,
                            "@_presence": "optional"
                        },
                        "uInt32": {
                            "@_name": "SecurityAltIDSource",
                            "@_id": 456,
                            "@_presence": "optional",
                            "constant": {
                                "@_value": 8
                            }
                        }
                    },
                    {
                        "@_name": "MDFeedTypes",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoMDFeedTypes",
                            "@_id": 1141
                        },
                        "string": {
                            "@_name": "MDFeedType",
                            "@_id": 1022
                        },
                        "uInt32": {
                            "@_name": "MarketDepth",
                            "@_id": 264
                        }
                    },
                    {
                        "@_name": "Underlyings",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoUnderlyings",
                            "@_id": 711
                        },
                        "string": {
                            "@_name": "UnderlyingSymbol",
                            "@_id": 311
                        },
                        "uInt32": [
                            {
                                "@_name": "UnderlyingSecurityID",
                                "@_id": 309
                            },
                            {
                                "@_name": "UnderlyingSecurityIDSource",
                                "@_id": 305,
                                "constant": {
                                    "@_value": 8
                                }
                            }
                        ]
                    },
                    {
                        "@_name": "InstrAttrib",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoInstrAttrib",
                            "@_id": 870
                        },
                        "uInt64": {
                            "@_name": "InstrAttribType",
                            "@_id": 871
                        },
                        "string": {
                            "@_name": "InstrAttribValue",
                            "@_id": 872,
                            "@_presence": "optional"
                        }
                    },
                    {
                        "@_name": "Legs",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoLegs",
                            "@_id": 555
                        },
                        "string": [
                            {
                                "@_name": "LegSymbol",
                                "@_id": 600
                            },
                            {
                                "@_name": "LegSecurityDesc",
                                "@_id": 620,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegSide",
                                "@_id": 624,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegSecurityGroup",
                                "@_id": 5795,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegCFICode",
                                "@_id": 608,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegSecuritySubType",
                                "@_id": 764,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegCurrency",
                                "@_id": 556,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegSecurityExchange",
                                "@_id": 616,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegStrikeCurrency",
                                "@_id": 942,
                                "@_presence": "optional"
                            }
                        ],
                        "uInt32": [
                            {
                                "@_name": "LegRatioQty",
                                "@_id": 623,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegSecurityIDSource",
                                "@_id": 603,
                                "constant": {
                                    "@_value": 8
                                }
                            }
                        ],
                        "uInt64": [
                            {
                                "@_name": "LegSecurityID",
                                "@_id": 602
                            },
                            {
                                "@_name": "LegMaturityMonthYear",
                                "@_id": 610,
                                "@_presence": "optional"
                            }
                        ],
                        "decimal": [
                            {
                                "@_name": "LegStrikePrice",
                                "@_id": 612,
                                "@_presence": "optional",
                                "exponent": "",
                                "mantissa": ""
                            },
                            {
                                "@_name": "LegPrice",
                                "@_id": 566,
                                "@_presence": "optional",
                                "exponent": "",
                                "mantissa": ""
                            },
                            {
                                "@_name": "LegOptionDelta",
                                "@_id": 1017,
                                "@_presence": "optional",
                                "exponent": "",
                                "mantissa": ""
                            }
                        ]
                    },
                    {
                        "@_name": "LotTypeRules",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NumLotTypeRules",
                            "@_id": 1234
                        },
                        "string": {
                            "@_name": "LotType",
                            "@_id": 1093,
                            "@_presence": "optional"
                        },
                        "decimal": {
                            "@_name": "MinLotSize",
                            "@_id": 1231,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    }
                ],
                "decimal": [
                    {
                        "@_name": "TradingReferencePrice",
                        "@_id": 1150,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "HighLimitPx",
                        "@_id": 1149,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "LowLimitPx",
                        "@_id": 1148,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "MinCabPrice",
                        "@_id": 9850,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "StrikePrice",
                        "@_id": 202,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "MinPriceIncrement",
                        "@_id": 969,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "MinPriceIncrementAmount",
                        "@_id": 1146,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "DisplayFactor",
                        "@_id": 9787,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "PriceRatio",
                        "@_id": 5770,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "ContractMultiplier",
                        "@_id": 231,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    }
                ]
            },
            {
                "@_name": "MDSecurityDefinition_140",
                "@_id": 140,
                "@_dictionary": 140,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "d"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SettlePriceType",
                        "@_id": 731,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityGroup",
                        "@_id": 1151,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "Symbol",
                        "@_id": 55,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityDesc",
                        "@_id": 107,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "CFICode",
                        "@_id": 461,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "UnderlyingProduct",
                        "@_id": 462,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityExchange",
                        "@_id": 207,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "PricingModel",
                        "@_id": 9853,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "UnitOfMeasureQty",
                        "@_id": 1147,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "StrikeCurrency",
                        "@_id": 947,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "Currency",
                        "@_id": 15,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SettlCurrency",
                        "@_id": 120,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MatchAlgo",
                        "@_id": 1142,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecuritySubType",
                        "@_id": 762,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MaxPriceVariation",
                        "@_id": 1143,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ImpliedMarketIndicator",
                        "@_id": 1144,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityUpdateAction",
                        "@_id": 980,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ApplID",
                        "@_id": 1180,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "UserDefinedInstrument",
                        "@_id": 9779,
                        "@_presence": "optional",
                        "constant": {
                            "@_value": "Y"
                        }
                    },
                    {
                        "@_name": "UnitofMeasure",
                        "@_id": 996,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TotNumReports",
                        "@_id": 911,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityID",
                        "@_id": 48,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "SecurityIDSource",
                        "@_id": 22,
                        "@_presence": "optional",
                        "constant": {
                            "@_value": 8
                        }
                    },
                    {
                        "@_name": "ExpirationCycle",
                        "@_id": 827,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MarketSegmentID",
                        "@_id": 1300,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ContractMultiplierType",
                        "@_id": 1435,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "FlowScheduleType",
                        "@_id": 1439,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ContractMultiplier",
                        "@_id": 231,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "ClearedVolume",
                        "@_id": 5791,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "OpenInterestQty",
                        "@_id": 5792,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "TradingReferenceDate",
                        "@_id": 5796,
                        "@_presence": "optional"
                    }
                ],
                "uInt64": [
                    {
                        "@_name": "SendingTime",
                        "@_id": 52
                    },
                    {
                        "@_name": "MinTradeVol",
                        "@_id": 562,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MaxTradeVol",
                        "@_id": 1140,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "MaturityMonthYear",
                        "@_id": 200,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "LastUpdateTime",
                        "@_id": 779,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "DecayQuantity",
                        "@_id": 5818,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "DecayStartDate",
                        "@_id": 5819,
                        "@_presence": "optional"
                    },
                    {
                        "@_name": "OriginalContractSize",
                        "@_id": 5849,
                        "@_presence": "optional"
                    }
                ],
                "sequence": [
                    {
                        "@_name": "Events",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoEvents",
                            "@_id": 864
                        },
                        "uInt32": {
                            "@_name": "EventType",
                            "@_id": 865,
                            "@_presence": "optional"
                        },
                        "uInt64": [
                            {
                                "@_name": "EventDate",
                                "@_id": 866,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "EventTime",
                                "@_id": 1145,
                                "@_presence": "optional"
                            }
                        ]
                    },
                    {
                        "@_name": "SecurityAltIDs",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoSecurityAltID",
                            "@_id": 454
                        },
                        "string": {
                            "@_name": "SecurityAltID",
                            "@_id": 455,
                            "@_presence": "optional"
                        },
                        "uInt32": {
                            "@_name": "SecurityAltIDSource",
                            "@_id": 456,
                            "@_presence": "optional",
                            "constant": {
                                "@_value": 8
                            }
                        }
                    },
                    {
                        "@_name": "MDFeedTypes",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoMDFeedTypes",
                            "@_id": 1141
                        },
                        "string": {
                            "@_name": "MDFeedType",
                            "@_id": 1022
                        },
                        "uInt32": {
                            "@_name": "MarketDepth",
                            "@_id": 264
                        }
                    },
                    {
                        "@_name": "Underlyings",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoUnderlyings",
                            "@_id": 711
                        },
                        "string": {
                            "@_name": "UnderlyingSymbol",
                            "@_id": 311,
                            "constant": {
                                "@_value": "[N/A]"
                            }
                        },
                        "uInt32": [
                            {
                                "@_name": "UnderlyingSecurityID",
                                "@_id": 309
                            },
                            {
                                "@_name": "UnderlyingSecurityIDSource",
                                "@_id": 305,
                                "constant": {
                                    "@_value": 8
                                }
                            }
                        ]
                    },
                    {
                        "@_name": "InstrAttrib",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoInstrAttrib",
                            "@_id": 870
                        },
                        "uInt64": {
                            "@_name": "InstrAttribType",
                            "@_id": 871
                        },
                        "string": {
                            "@_name": "InstrAttribValue",
                            "@_id": 872,
                            "@_presence": "optional"
                        }
                    },
                    {
                        "@_name": "Legs",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NoLegs",
                            "@_id": 555
                        },
                        "string": [
                            {
                                "@_name": "LegSymbol",
                                "@_id": 600
                            },
                            {
                                "@_name": "LegSecurityDesc",
                                "@_id": 620,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegSide",
                                "@_id": 624,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegSecurityGroup",
                                "@_id": 5795,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegCFICode",
                                "@_id": 608,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegSecuritySubType",
                                "@_id": 764,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegCurrency",
                                "@_id": 556,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegSecurityExchange",
                                "@_id": 616,
                                "@_presence": "optional"
                            },
                            {
                                "@_name": "LegStrikeCurrency",
                                "@_id": 942,
                                "@_presence": "optional"
                            }
                        ],
                        "uInt32": [
                            {
                                "@_name": "LegRatioQty",
                                "@_id": 623
                            },
                            {
                                "@_name": "LegSecurityIDSource",
                                "@_id": 603,
                                "constant": {
                                    "@_value": 8
                                }
                            }
                        ],
                        "uInt64": [
                            {
                                "@_name": "LegSecurityID",
                                "@_id": 602
                            },
                            {
                                "@_name": "LegMaturityMonthYear",
                                "@_id": 610,
                                "@_presence": "optional"
                            }
                        ],
                        "decimal": [
                            {
                                "@_name": "LegStrikePrice",
                                "@_id": 612,
                                "@_presence": "optional",
                                "exponent": "",
                                "mantissa": ""
                            },
                            {
                                "@_name": "LegPrice",
                                "@_id": 566,
                                "@_presence": "optional",
                                "exponent": "",
                                "mantissa": ""
                            },
                            {
                                "@_name": "LegOptionDelta",
                                "@_id": 1017,
                                "@_presence": "optional",
                                "exponent": "",
                                "mantissa": ""
                            }
                        ]
                    },
                    {
                        "@_name": "LotTypeRules",
                        "@_presence": "optional",
                        "length": {
                            "@_name": "NumLotTypeRules",
                            "@_id": 1234
                        },
                        "string": {
                            "@_name": "LotType",
                            "@_id": 1093,
                            "@_presence": "optional"
                        },
                        "decimal": {
                            "@_name": "MinLotSize",
                            "@_id": 1231,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    }
                ],
                "decimal": [
                    {
                        "@_name": "TradingReferencePrice",
                        "@_id": 1150,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "HighLimitPx",
                        "@_id": 1149,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "LowLimitPx",
                        "@_id": 1148,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "MinCabPrice",
                        "@_id": 9850,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "StrikePrice",
                        "@_id": 202,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "MinPriceIncrement",
                        "@_id": 969,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "MinPriceIncrementAmount",
                        "@_id": 1146,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "DisplayFactor",
                        "@_id": 9787,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    },
                    {
                        "@_name": "PriceRatio",
                        "@_id": 5770,
                        "@_presence": "optional",
                        "exponent": "",
                        "mantissa": ""
                    }
                ]
            },
            {
                "@_name": "MDIncRefresh_141",
                "@_id": 141,
                "@_dictionary": 141,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeID",
                            "@_id": 1003,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": "",
                            "mantissa": ""
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_142",
                "@_id": 142,
                "@_dictionary": 142,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeID",
                            "@_id": 1003,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": "",
                            "mantissa": ""
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_143",
                "@_id": 143,
                "@_dictionary": 143,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeID",
                            "@_id": 1003,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": "",
                            "mantissa": ""
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_144",
                "@_id": 144,
                "@_dictionary": 144,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeID",
                            "@_id": 1003,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": "",
                            "mantissa": ""
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_145",
                "@_id": 145,
                "@_dictionary": 145,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeID",
                            "@_id": 1003,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional"
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    },
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    ]
                }
            },
            {
                "@_name": "MDIncRefresh_146",
                "@_id": 146,
                "@_dictionary": 146,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeID",
                            "@_id": 1003,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": "",
                            "mantissa": ""
                        },
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    }
                }
            },
            {
                "@_name": "MDIncRefresh_147",
                "@_id": 147,
                "@_dictionary": 147,
                "string": [
                    {
                        "@_name": "ApplVerID",
                        "@_id": 1128,
                        "constant": {
                            "@_value": 9
                        }
                    },
                    {
                        "@_name": "MessageType",
                        "@_id": 35,
                        "constant": {
                            "@_value": "X"
                        }
                    },
                    {
                        "@_name": "SenderCompID",
                        "@_id": 49,
                        "constant": {
                            "@_value": "CME"
                        }
                    },
                    {
                        "@_name": "PosDupFlag",
                        "@_id": 43,
                        "@_presence": "optional"
                    }
                ],
                "uInt32": [
                    {
                        "@_name": "MsgSeqNum",
                        "@_id": 34
                    },
                    {
                        "@_name": "TradeDate",
                        "@_id": 75
                    }
                ],
                "uInt64": {
                    "@_name": "SendingTime",
                    "@_id": 52
                },
                "sequence": {
                    "@_name": "MDEntries",
                    "length": {
                        "@_name": "NoMDEntries",
                        "@_id": 268
                    },
                    "uInt32": [
                        {
                            "@_name": "MDUpdateAction",
                            "@_id": 279
                        },
                        {
                            "@_name": "MDPriceLevel",
                            "@_id": 1023,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "OpenCloseSettleFlag",
                            "@_id": 286,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SettlDate",
                            "@_id": 64,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeVolume",
                            "@_id": 1020,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "NumberOfOrders",
                            "@_id": 346,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "SecurityIDSource",
                            "@_id": 22,
                            "constant": {
                                "@_value": 8
                            }
                        },
                        {
                            "@_name": "SecurityID",
                            "@_id": 48
                        },
                        {
                            "@_name": "RptSeq",
                            "@_id": 83
                        },
                        {
                            "@_name": "MDEntryTime",
                            "@_id": 273
                        },
                        {
                            "@_name": "TradeID",
                            "@_id": 1003,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "AggressorSide",
                            "@_id": 5797,
                            "@_presence": "optional"
                        }
                    ],
                    "string": [
                        {
                            "@_name": "MDEntryType",
                            "@_id": 269
                        },
                        {
                            "@_name": "TradingSessionID",
                            "@_id": 336,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TradeCondition",
                            "@_id": 277,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "TickDirection",
                            "@_id": 274,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "QuoteCondition",
                            "@_id": 276,
                            "@_presence": "optional"
                        },
                        {
                            "@_name": "MatchEventIndicator",
                            "@_id": 5799,
                            "@_presence": "optional"
                        }
                    ],
                    "decimal": [
                        {
                            "@_name": "NetChgPrevDay",
                            "@_id": 451,
                            "@_presence": "optional",
                            "exponent": "",
                            "mantissa": ""
                        },
                        {
                            "@_name": "MDEntryPx",
                            "@_id": 270,
                            "exponent": "",
                            "mantissa": ""
                        }
                    ],
                    "int32": {
                        "@_name": "MDEntrySize",
                        "@_id": 271,
                        "@_presence": "optional"
                    }
                }
            }
        ]
    }
}
