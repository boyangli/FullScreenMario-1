FullScreenMario.prototype.settings.generator = {
    "possibilities": {
        
        /* Randomization continuation
        */
        
        "RandomSpawnerOverworld": {
            "width": 0,
            "height": 0,
            "contents": {
                "mode": "Random",
                "limit": 1,
                "children": [{
                    "percent": 100,
                    "type": "Known",
                    "title": "RandomSpawner",
                    "arguments": {
                        "randomization": "Overworld",
                        "randomWidth": 2800,
                        "randomTop": 80,
                        "randomBottom": 0
                    }
                }]
            }
        },
        "RandomSpawnerUnderworld": {
            "width": 0,
            "height": 0,
            "contents": {
                "mode": "Random",
                "limit": 1,
                "children": [{
                    "percent": 100,
                    "type": "Known",
                    "title": "RandomSpawner",
                    "arguments": {
                        "randomization": "Underworld",
                        "randomWidth": 1400,
                        "randomTop": 80,
                        "randomBottom": 0
                    }
                }]
            }
        },
        "RandomSpawnerUnderwater": {
            "width": 0,
            "height": 0,
            "contents": {
                "mode": "Random",
                "limit": 1,
                "children": [{
                    "percent": 100,
                    "type": "Known",
                    "title": "RandomSpawner",
                    "arguments": {
                        "randomization": "Underwater",
                        "randomWidth": 700,
                        "randomTop": 80,
                        "randomBottom": 0
                    }
                }]
            }
        },
        "RandomSpawnerSky": {
            "width": 0,
            "height": 0,
            "contents": {
                "mode": "Random",
                "limit": 1,
                "children": [{
                    "percent": 100,
                    "type": "Known",
                    "title": "RandomSpawner",
                    "arguments": {
                        "randomization": "Sky",
                        "randomWidth": 700,
                        "randomTop": 80,
                        "randomBottom": 0
                    }
                }]
            }
        },
        "RandomSpawnerCastle": {
            "width": 0,
            "height": 0,
            "contents": {
                "mode": "Random",
                "limit": 1,
                "children": [{
                    "percent": 100,
                    "type": "Known",
                    "title": "RandomSpawner",
                    "arguments": {
                        "randomization": "Castle",
                        "randomWidth": 700,
                        "randomTop": 80,
                        "randomBottom": 0
                    }
                }]
            }
        },
        
        
        /* Overworld
        */
        
        "Overworld": {
            "height": 80,
            "width": 2800,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "children": [{
                    "type": "Random",
                    "title": "OverworldStart"
                }, {
                    "type": "Random",
                    "title": "OverworldBody"
                }, {
                    "type": "Random",
                    "title": "OverworldEnd"
                }]
            }
        },
        "OverworldStart": {
            "width": 112,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "spacing": -8,
                "children": [{
                    "type": "Known",
                    "title": "Floor",
                    "arguments": {
                        "macro": "Floor",
                        "width": 112
                    }
                }, {
                    "type": "Random",
                    "title": "OverworldScenery"
                }]
            }
        },
        "OverworldBody": {
            "width": 2400,
            "height": 80,
            "contents": {
                "mode": "Multiple",
                "children": [{
                    "type": "Random",
                    "title": "OverworldRandomization"
                }, {
                    "type": "Random",
                    "title": "OverworldClouds"
                }]
            }
        },
        "OverworldRandomization": {
            "width": 2400,
            "height": 80,
            "contents": {
                "mode": "Repeat",
                "direction": "right",
                "children": [{
                    "type": "Random",
                    "title": "OverworldClump"
                }, {
                    "type": "Random",
                    "title": "OverworldBetweenSpotty"
                }, {
                    "type": "Random",
                    "title": "OverworldBetween"
                }, {
                    "type": "Random",
                    "title": "OverworldBetweenSpotty"
                }]
            }
        },
        "OverworldClump": {
            "width": 160,
            "height": 80,
            "contents": {
                "mode": "Multiple",
                "children": [{
                    "type": "Random",
                    "title": "OverworldScenery"
                }, {
                    "type": "Random",
                    "title": "OverworldLandArea"
                }]
            }
        },
        "OverworldLandArea": {
            "width": 160,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "children": [{
                    "type": "Known",
                    "title": "Floor",
                    "arguments": {
                        "macro": "Floor",
                        "width": 160
                    }
                }, {
                    "type": "Random",
                    "title": "LandObstacleGroup"
                }]
            }
        },
        
        
        /* Areas between floors
        */
        
        "OverworldBetween": {
            "width": 112,
            "height": 80,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "children": [{
                    "percent": 35,
                    "type": "Random",
                    "title": "OverworldBetweenSmallEnemies",
                }, {
                    "percent": 40,
                    "type": "Random",
                    "title": "OverworldBetweenSpotty"
                }, {
                    "percent": 10,
                    "type": "Random",
                    "title": "OverworldBetweenRamps"
                }, {
                    "percent": 15,
                    "type": "Random",
                    "title": "OverworldBetweenWatery"
                }]
            }
        },
        "OverworldBetweenSmallEnemies": {
            "width": 112,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "children": [{
                    "type": "Known",
                    "title": "Floor",
                    "arguments": {
                        "macro": "Floor",
                        "width": 112
                    }
                }, {
                    "type": "Random",
                    "title": "OverworldBetweenSmallEnemiesLand",
                    "sizing": {
                        "width": 112
                    }
                }]
            }
        },
        "OverworldBetweenSmallEnemiesLand": {
            "width": 112,
            "height": 80,
            "contents": {
                "mode": "Multiple",
                "direction": "top",
                "spacing": -8,
                "children": [{
                    "type": "Random",
                    "title": "LandObstacleGroupEnemies"
                }, {
                    "type": "Random",
                    "title": "OverworldScenery"
                }]
            }
        },
        "OverworldBetweenSpotty": {
            "width": 112,
            "height": 80,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "children": [{
                    "percent": 50,
                    "type": "Random",
                    "title": "OverworldBetweenSpot",
                }, {
                    "percent": 50,
                    "type": "Random",
                    "title": "Nothing",
                }]
            }
        },
        "OverworldBetweenSpot": {
            "width": 8,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "children": [{
                    "type": "Random",
                    "title": "Floor"
                }, {
                    "type": "Random",
                    "title": "OverworldBetweenSpotScenery"
                }]
            }
        },
        "OverworldBetweenRamps": {
            "width": 96,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "children": [{
                    "type": "Random",
                    "title": "RampUpSmallFloor"
                }, {
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "width": 48
                    }
                }, {
                    "type": "Random",
                    "title": "RampDownSmallFloor"
                }]
            }
        },
        "OverworldBetweenFloating": {
            "width": 112,
            "height": 80,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "children": [{
                    "percent": 50,
                    "type": "Random",
                    "title": "Nothing"
                }, {
                    "percent": 50,
                    "type": "Random",
                    "title": "OverworldBetweenFloat"
                }]
            }
        },
        "OverworldBetweenFloat": {
            "width": 8,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "children": [{
                    "type": "Random",
                    "title": "Stone"
                }]
            }
        },
        "OverworldBetweenWatery": {
            "width": 112,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "children": [{
                    "type": "Random",
                    "title": "RampUpSmallFloor"
                }, {
                    "type": "Random",
                    "title": "OverworldBetweenWateryBridge", 
                }, {
                    "type": "Random",
                    "title": "RampDownSmallFloor"
                }]
            }
        },
        "OverworldBetweenWateryBridge": {
            "width": 48,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "children": [{
                    "type": "Random",
                    "title": "Water",
                    "sizing": {
                        "height": 8
                    }
                }, {
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "height": 24
                    },
                }, {
                    "type": "Random",
                    "title": "Bridge"
                }, {
                    "type": "Random",
                    "title": "OverworldBetweenWateryBridgeTop"
                }]
            }
        },
        "OverworldBetweenWateryBridgeTop": {
            "width": 48,
            "height": 40,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "children": [{
                    "type": "Random",
                    "title": "OverworldBetweenWateryBridgeTopEnemies"
                }, {
                    "type": "Random",
                    "title": "OverworldBetweenWateryBridgeTopSolid"
                }]
            }
        },
        "OverworldBetweenWateryBridgeTopEnemies": {
            "width": 48,
            "height": 16,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "bottom",
                "spacing": {
                    "min": 4,
                    "max": 20,
                    "units": 4
                },
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": 16
                }, {
                    "type": "Random",
                    "title": "EnemyEasy"
                }, {
                    "type": "Random",
                    "title": "EnemyEasy"
                }, {
                    "type": "Random",
                    "title": "EnemyEasy"
                }]
            }
        },
        "OverworldBetweenWateryBridgeTopSolid": {
            "width": 48,
            "height": 24,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "bottom",
                "spacing": {
                    "min": 0,
                    "max": 24,
                    "units": 8
                },
                "children": [{
                    "type": "Random",
                    "title": "Nothing"
                }, {
                    "type": "Random",
                    "title": "BlockReward"
                }]
            }
        },
        
        
        
        /* General obstacles
        */
        
        "LandObstacleGroup": {
            "width": 160,
            "height": 80,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "spacing": {
                    "min": 0,
                    "max": 8,
                    "units": 16
                },
                "children": [{
                    "percent": 40,
                    "type": "Random",
                    "title": "LandObstacleGroupEnemies"
                }, {
                    "percent": 25,
                    "type": "Random",
                    "title": "LandObstacleGroupVertical"
                }, {
                    "percent": 15,
                    "type": "Random",
                    "title": "LandObstacleGroupSingleStory"
                }, {
                    "percent": 15,
                    "type": "Random",
                    "title": "LandObstacleGroupDoubleStory"
                }, {
                    "percent": 2,
                    "type": "Random",
                    "title": "LandObstacleGroupPitSmall"
                }, {
                    "percent": 3,
                    "type": "Random",
                    "title": "LandObstacleGroupPitLarge"
                }]
            }
        },
        "LandObstacleGroupEnemies": {
            "width": 64,
            "height": 80,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "spacing": 4,
                "children": [{
                    "percent": 55,
                    "type": "Random",
                    "title": "EnemyEasyScattered"
                }, {
                    "percent": 5,
                    "type": "Random",
                    "title": "EnemyHard"
                }, {
                    "percent": 20,
                    "type": "Random",
                    "title": "LandObstacleGroupVertical"
                }, {
                    "percent": 20,
                    "type": "Random",
                    "title": "Nothing"
                }]
            }
        },
        "LandObstacleGroupSingleStory": {
            "width": 64,
            "height": 80,
            "contents": {
                "mode": "Multiple",
                "snap": "bottom",
                "children": [{
                    "type": "Random",
                    "title": "LandObstacleGroupSolidsSpotty"
                }, {
                    "type": "Random",
                    "title": "EnemyEasy"
                }]
            }
        },
        "LandObstacleGroupSingleStorySolids": {
            "width": 64,
            "height": 40,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "height": 32
                    }
                }, {
                    "type": "Random",
                    "title": "LandObstacleGroupSolidsSpotty"
                }]
            }
        },
        "LandObstacleGroupDoubleStory": {
            "width": 64,
            "height": 80,
            "contents": {
                "mode": "Multiple",
                "snap": "bottom",
                "children": [{
                    "type": "Random",
                    "title": "LandObstacleGroupDoubleStorySolids"
                }, {
                    "type": "Random",
                    "title": "LandObstacleGroupEnemies"
                }]
            }
        },
        "LandObstacleGroupDoubleStorySolids": {
            "width": 64,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "snap": "bottom",
                "direction": "top",
                "children": [{
                    "type": "Random",
                    "title": "LandObstacleGroupSolidsPopulated"
                }, {
                    "type": "Random",
                    "title": "LandObstacleGroupSolidsSpotty"
                }]
            }
        },
        "LandObstacleGroupSolidsPopulated": {
            "width": 64,
            "height": 32,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "height": 24
                    }
                }, {
                    "type": "Random",
                    "title": "LandObstacleGroupSolid"
                }, {
                    "type": "Random",
                    "title": "EnemyEasyElevated"
                }]
            }
        },
        "LandObstacleGroupSolids": {
            "width": 64,
            "height": 32,
            "contents": {
                "mode": "Random",
                "snap": "bottom",
                "direction": "right",
                "children": [{
                    "percent": 75,
                    "type": "Random",
                    "title": "Brick"
                }, {
                    "percent": 25,
                    "type": "Random",
                    "title": "Block"
                }]
            }
        },
        "LandObstacleGroupSolidsSpotty": {
            "width": 64,
            "height": 32,
            "contents": {
                "mode": "Random",
                "snap": "bottom",
                "direction": "right",
                "children": [{
                    "percent": 30,
                    "type": "Random",
                    "title": "Brick"
                }, {
                    "percent": 20,
                    "type": "Random",
                    "title": "Block"
                }, {
                    "percent": 50,
                    "type": "Random",
                    "title": "Nothing"
                }]
            }
        },
        "LandObstacleGroupVertical": {
            "width": 32,
            "height": 80,
            "contents": {
                "mode": "Random",
                "snap": "bottom",
                "direction": "right",
                "spacing": {
                    "min": 0,
                    "max": 16,
                    "units": 8
                },
                "children": [{
                    "percent": 40,
                    "type": "Random",
                    "title": "PipeRandom"
                }, {
                    "percent": 35,
                    "type": "Random",
                    "title": "StoneTower"
                }, {
                    "percent": 25,
                    "type": "Random",
                    "title": "CannonTower"
                }]
            }
        },
        "LandObstacleGroupPitSmall": {
            "width": 40,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "snap": "bottom",
                "direction": "right",
                "children": [{
                    "type": "Random",
                    "title": "StoneTower"
                }, {
                    "type": "Random",
                    "title": "Nothing"
                }, {
                    "type": "Random",
                    "title": "PitTreasure"
                }, {
                    "type": "Random",
                    "title": "Nothing"
                }, {
                    "type": "Random",
                    "title": "StoneTower"
                }]
            }
        },
        "LandObstacleGroupPitLarge": {
            "width": 56,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "snap": "bottom",
                "direction": "right",
                "children": [{
                    "type": "Random",
                    "title": "StoneTower"
                }, {
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "width": 16
                    }
                }, {
                    "type": "Random",
                    "title": "PitTreasure"
                }, {
                    "type": "Random",
                    "title": "EnemyEasy"
                }, {
                    "type": "Random",
                    "title": "Nothing"
                }, {
                    "type": "Random",
                    "title": "StoneTower"
                }]
            }
        },
        "PitTreasure": {
            "width": 8,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "spacing": {
                    "min": 0,
                    "max": 40,
                    "units": 8
                },
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "height": 32
                    }
                }, {
                    "type": "Random",
                    "title": "BlockTreasure",
                }]
            }
        },
        
        
        /* Underworld
        */
        
        "Underworld": {
            "width": 1400,
            "height": 88,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "left",
                "children": [{
                    "type": "Random",
                    "title": "UnderworldStart"
                }, {
                    "type": "Random",
                    "title": "UnderworldRandomization"
                }, {
                    "type": "Random",
                    "title": "UnderworldEnd"
                }]
            }
        },
        "UnderworldStart": {
            "width": 128,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "snap": "left",
                "children": [{
                    "type": "Known",
                    "title": "Floor",
                    "arguments": [{
                        "percent": 25,
                        "values": {
                            "macro": "Floor", 
                            "width": 64
                        }
                    }, {
                        "percent": 25,
                        "values": {
                            "macro": "Floor",
                            "width": 80
                        }
                    }, {
                        "percent": 25,
                        "values": {
                            "macro": "Floor",
                            "width": 96
                        }
                    }, {
                        "percent": 25,
                        "values": {
                            "macro": "Floor",
                            "width": 128
                        }
                    }]
                }, {
                    "type": "Known",
                    "title": "Brick",
                    "arguments": {
                        "macro": "Fill",
                        "ynum": 11
                    }
                }]
            }
        },
        "UnderworldRandomization": {
            "width": 1320,
            "height": 80,
            "contents": {
                "mode": "Repeat",
                "direction": "right",
                "children": [{
                    "type": "Random",
                    "title": "UnderworldLandArea"
                }, {
                    "type": "Random",
                    "title": "UnderworldBetweenSpotty"
                }, {
                    "type": "Random",
                    "title": "UnderworldBetween"
                }, {
                    "type": "Random",
                    "title": "UnderworldBetweenSpotty"
                }]
            }
        },
        "UnderworldLandArea": {
            "width": 160,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "children": [{
                    "type": "Known",
                    "title": "Floor",
                    "arguments": {
                        "macro": "Floor",
                        "width": 160
                    }
                }, {
                    "type": "Random",
                    "title": "UnderworldObstacleGroup"
                }, {
                    "type": "Random",
                    "title": "Brick", 
                    "sizing": {
                        "width": 160
                    }
                }]
            }
        },
        "UnderworldObstacleGroup": {
            "width": 160,
            "height": 80,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "spacing": [{
                    "percent": 50,
                    "value": 0
                }, {
                    "percent": 30,
                    "value": 8
                }, {
                    "percent": 20,
                    "value": 16
                }],
                "children": [{
                    "percent": 30,
                    "type": "Random",
                    "title": "EnemyEasyScattered"
                }, {
                    "percent": 25,
                    "type": "Random",
                    "title": "UnderworldBricksOverhangs"
                }, {
                    "percent": 20,
                    "type": "Random",
                    "title": "LandObstacleGroupSingleStory"
                }, {
                    "percent": 25,
                    "type": "Random",
                    "title": "LandObstacleGroupVertical"
                }]
            }
        },
        "UnderworldBricksOverhangs": {
            "width": 160,
            "height": 64,
            "contents": {
                "mode": "Repeat",
                "direction": "right",
                "snap": "bottom",
                "spacing": {
                    "min": 0,
                    "max": 24,
                    "units": 8
                },
                "children": [{
                    "percent": 100,
                    "type": "Random",
                    "title": "UnderworldBricksOverhang"
                }]
            }
        },
        "UnderworldBricksOverhang": {
            "width": 32,
            "height": 64,
            "contents": {
                "mode": "Random",
                "direction": "top",
                "snap": "left",
                "spacing": [{
                    "percent": 40,
                    "value": 0
                }, {
                    "percent": 40,
                    "value": 16
                }, {
                    "percent": 20,
                    "value": 8
                }],
                "children": [{
                    "percent": 40,
                    "type": "Random",
                    "title": "UnderworldBrickCluster"
                }, {
                    "percent": 30,
                    "type": "Known",
                    "title": "Coin",
                    "arguments": {
                        "macro": "Fill",
                        "xnum": 4,
                        "xwidth": 8
                    },
                    "sizing": {
                        "width": 32,
                        "height": 16
                    }
                }, {
                    "percent": 30,
                    "type": "Random",
                    "title": "EnemyEasyScattered",
                }]
            }
        },
        "UnderworldBrickCluster": {
            "width": 32,
            "height": 16,
            "contents": {
                "mode": "Repeat",
                "direction": "top",
                "children": [{
                    "type": "Random",
                    "title": "UnderworldBrickRow"
                }]
            }
        },
        "UnderworldBrickRow": {
            "width": 32,
            "height": 8,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "children": [{
                    "percent": 97,
                    "type": "Known",
                    "title": "Brick"
                }, {
                    "percent": 3,
                    "type": "Known",
                    "title": "Brick",
                    "arguments": {
                        "contents": "Coin"
                    }
                }]
            }
        },
        "UnderworldBetween": {
            "width": 112,
            "height": 80,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "children": [{
                    "percent": 30,
                    "type": "Random",
                    "title": "UnderworldBetweenSpotty"
                }, {
                    "percent": 25,
                    "type": "Random",
                    "title": "OverworldBetweenWatery"
                }, {
                    "percent": 25,
                    "type": "Random",
                    "title": "UnderworldBetweenPlatforms"
                }, {
                    "percent": 20,
                    "type": "Random",
                    "title": "OverworldBetweenRamps"
                }]
            }
        },
        "UnderworldBetweenSpotty": {
            "width": 112,
            "height": 80,
            "contents": {
                "mode": "Multiple",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "type": "Random",
                    "title": "UnderworldBetweenSpots"
                }, {
                    "type": "Random",
                    "title": "UnderworldBrickCeiling",
                    "sizing": {
                        "width": 112
                    }
                }]
            }
        },
        "UnderworldBetweenSpots": {
            "width": 112,
            "height": 80,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "percent": 50,
                    "type": "Random",
                    "title": "UnderworldBetweenSpot",
                }, {
                    "percent": 50,
                    "type": "Random",
                    "title": "Nothing",
                }]
            }
        },
        "UnderworldBetweenSpot": {
            "width": 8,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "children": [{
                    "type": "Known",
                    "title": "Floor",
                    "arguments": [{
                        "percent": 40,
                        "values": {
                            "macro": "Floor"
                        }
                    }, {
                        "percent": 30,
                        "values": {
                            "macro": "Floor",
                            "y": 8
                        }
                    }, {
                        "percent": 30,
                        "values": {
                            "macro": "Floor",
                            "y": 16
                        }
                    }]
                }]
            }
        },
        "UnderworldBetweenPlatforms": {
            "width": 112,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "spacing": {
                    "min": 0,
                    "max": 8,
                    "units": 8
                },
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "width": 16
                    }
                }, {
                    "type": "Random",
                    "title": "PlatformGenerator"
                }, {
                    "type": "Random",
                    "title": "Nothing"
                }, {
                    "type": "Random",
                    "title": "PlatformGenerator"
                }, {
                    "type": "Random",
                    "title": "Nothing"
                }]
            }
        },
        "UnderworldBrickCeiling": {
            "width": 8,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "snap": "left",
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "height": 88
                    }
                }, {
                    "type": "Random",
                    "title": "Brick"
                }]
            }
        },
        "UnderworldEnd": {
            "width": 480,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "snap": "left",
                "children": [{
                    "type": "Random",
                    "title": "UnderworldEndFloor"
                }, {
                    "type": "Random",
                    "title": "UnderworldEndLand"
                }]
            }
        },
        "UnderworldEndFloor": {
            "width": 480,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "children": [{
                    "type": "Random",
                    "title": "Floor"
                }]
            }
        },
        "UnderworldEndLand": {
            "width": 488,
            "height": 72,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "type": "Random",
                    "title": "LakituStop",
                    "sizing": {
                        "width": 0
                    }
                }, {
                    "type": "Random",
                    "title": "UnderworldEndPipeArea"
                }, {
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "width": 64
                    }
                }, {
                    "type": "Random",
                    "title": "RampUpLarge"
                }, {
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "width": 64
                    }
                }, {
                    "type": "Random",
                    "title": "UnderworldEndOutsideCastle"
                }, {
                    "type": "Known",
                    "title": "ScrollBlocker",
                    "sizing": {
                        "width": 0,
                        "height": 0
                    }
                }]
            }
        },
        "UnderworldEndPipeArea": {
            "width": 144,
            "height": 88,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "type": "Random",
                    "title": "UnderworldEndPipeFront"
                }, {
                    "type": "Random",
                    "title": "UnderworldEndPipeTransport"
                }, {
                    "type": "Known",
                    "title": "Brick",
                    "arguments": {
                        "macro": "Fill",
                        "xnum": 7,
                        "ynum": 11,
                        "yheight": -8
                    }
                }]
            }
        },
        "UnderworldEndPipeFront": {
            "width": 80,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "snap": "left",
                "children": [{
                    "type": "Known",
                    "title": "Brick",
                    "arguments": {
                        "macro": "Fill",
                        "xnum": 10,
                        "ynum": 3
                    }
                }, {
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "height": 40
                    }
                }, {
                    "type": "Known",
                    "title": "Block",
                    "arguments": {
                        "hidden": true
                    }
                }, {
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "height": 24
                    }
                }, {
                    "type": "Known",
                    "title": "Brick",
                    "arguments": {
                        "macro": "Fill",
                        "xnum": 10,
                        "ynum": 1
                    }
                }]
            }
        },
        "UnderworldEndPipeTransport": {
            "width": 32,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "snap": "right",
                "children": [{
                    "type": "Known",
                    "title": "Brick",
                    "arguments": {
                        "macro": "Fill",
                        "xnum": 4,
                        "ynum": 3,
                        "yheight": -8
                    },
                    "sizing": {
                        "height": 24
                    }
                }, {
                    "type": "Known",
                    "title": "PipeCorner",
                    "arguments": {
                        "macro": "PipeCorner",
                        "height": 64,
                        "transport": "Overworld",
                        "scrollEnabler": true,
                        "scrollBlocker": true
                    }
                }, {
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "height": 40
                    }
                }, {
                    "type": "Known",
                    "title": "Brick",
                    "arguments": {
                        "macro": "Fill",
                        "xnum": 2
                    }
                }]
            }
        },
        
        
        /* Sky
        */
        
        "Sky": {
            "width": 1400, // ???
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "left",
                "children": [{
                    "type": "Random",
                    "title": "SkyStart"
                }, {
                    "type": "Random",
                    "title": "Nothing"
                }, {
                    "type": "Random",
                    "title": "SkyBeforeMain"
                }, {
                    "type": "Random",
                    "title": "SkyMain"
                }, {
                    "type": "Random",
                    "title": "SkyEnd"
                }]
            }
        },
        "SkyStart": {
            "width": 32,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "snap": "left",
                "children": [{
                    "type": "Known",
                    "title": "Stone",
                    "arguments": {
                        "width": 32
                    },
                    "sizing": {
                        "width": 32
                    }
                }]
            }
        },
        "SkyBeforeMain": {
            "width": 80,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "snap": "left",
                "children": [{
                    "type": "Known",
                    "title": "Stone",
                    "arguments": {
                        "width": 80
                    },
                    "sizing": {
                        "width": 80
                    }
                }]
            }
        },
        "SkyMain": {
            "width": 560,
            "height": 80,
            "contents": {
                "mode": "Multiple",
                "children": [{
                    "type": "Random",
                    "title": "SkyMainLand"
                }, {
                    "type": "Random",
                    "title": "SkyMainTransport"
                }, {
                    "type": "Random",
                    "title": "SkyMainAir"
                }]
            }
        },
        "SkyMainLand": {
            "width": 560,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "snap": "left",
                "children": [{
                    "type": "Known",
                    "title": "Stone",
                    "arguments": {
                        "width": 560
                    }
                }]
            }
        },
        "SkyMainTransport": {
            "width": 140,
            "height": 40,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "snap": "left",
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "height": 32 
                    }
                }, {
                    "type": "Known",
                    "title": "Platform",
                    "arguments": {
                        "width": 24,
                        "transport": "true"
                    }
                }]
            }
        },
        "SkyMainAir": {
            "width": 560,
            "height": 80,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "snap": "bottom",
                "spacing": 8,
                "children": [{
                    "percent": 20,
                    "type": "Random",
                    "title": "SkyCoinsShort"
                }, {
                    "percent": 20,
                    "type": "Random",
                    "title": "SkyCoinsMedium"
                }, {
                    "percent": 20,
                    "type": "Random",
                    "title": "SkyCoinsLong"
                }, {
                    "percent": 40,
                    "type": "Random",
                    "title": "SkyCoinsStone"
                }]
            }
        },
        "SkyCoinsShort": {
            "width": 24,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "snap": "left",
                "spacing": {
                    "min": 0,
                    "max": 16,
                    "units": 8
                },
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "height": 56
                    }
                }, {
                    "type": "Random",
                    "title": "SkyCoinsRow",
                    "stretch": {
                        "width": true
                    }
                }]
            }
        },
        "SkyCoinsMedium": {
            "width": 56,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "snap": "left",
                "spacing": {
                    "min": 0,
                    "max": 16,
                    "units": 8
                },
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "height": 56
                    }
                }, {
                    "type": "Random",
                    "title": "SkyCoinsRow",
                    "stretch": {
                        "width": true
                    }
                }]
            }
        },
        "SkyCoinsLong": {
            "width": 128,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "snap": "left",
                "spacing": {
                    "min": 0,
                    "max": 16,
                    "units": 8
                },
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "height": 56
                    }
                }, {
                    "type": "Random",
                    "title": "SkyCoinsRow",
                    "stretch": {
                        "width": true
                    }
                }]
            }
        },
        "SkyCoinsRow": {
            "width": 5,
            "height": 7,
            "contents": {
                "mode": "Repeat",
                "direction": "right",
                "snap": "top",
                "spacing": 3,
                "children": [{
                    "type": "Random",
                    "title": "Coin"
                }]
            }
        },
        "SkyCoinsStone": {
            "width": 24,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                }, {
                    "type": "Random",
                    "title": "SkyCoinsStoneVertical",
                }]
            }
        },
        "SkyCoinsStoneVertical": {
            "width": 8,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "spacing": {
                    "min": 0,
                    "max": 8,
                    "units": 8
                },
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "height": 64
                    }
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "arguments": [{
                        "percent": 33,
                        "values": {}
                    }, {
                        "percent": 34,
                        "values": {
                            "width": 16
                        }
                    }, {
                        "percent": 33,
                        "values": {
                            "height": 16
                        }
                    }]
                }]
            }
        },
        "SkyEnd": {
            "width": 320,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "snap": "right",
                "children": [{
                    "type": "Random",
                    "title": "Nothing"
                }, {
                    "type": "Random",
                    "title": "SkyEndCoins"
                }]
            }
        },
        "SkyEndCoins": {
            "width": 24,
            "height": 7,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "bottom",
                "spacing": 3,
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "width": 64
                    }
                }, {
                    "type": "Known",
                    "title": "Coin"
                }, {
                    "type": "Known",
                    "title": "Coin"
                }, {
                    "type": "Known",
                    "title": "Coin"
                }]
            }
        },
        
        
        /* Enemy groups
        */
        
        "EnemyEasy": {
            "width": 8,
            "height": 12,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "spacing": [{
                    "percent": 75,
                    "value": 4
                }, {
                    "percent": 25,
                    "value": 8
                }],
                "children": [{
                    "percent": 45,
                    "type": "Random",
                    "title": "Goomba"
                }, {
                    "percent": 35,
                    "type": "Random",
                    "title": "Koopa"
                }, {
                    "percent": 20,
                    "type": "Random",
                    "title": "Beetle"
                }]
            }
        },
        "EnemyEasyScattered": {
            "width": 8,
            "height": 12,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "spacing": [{
                    "percent": 45,
                    "value": 8
                }, {
                    "percent": 25,
                    "value": 4
                }, {
                    "percent": 15,
                    "value": 12
                }, {
                    "percent": 15,
                    "value": 16
                }],
                "children": [{
                    "percent": 40,
                    "type": "Random",
                    "title": "Goomba"
                }, {
                    "percent": 30,
                    "type": "Random",
                    "title": "Koopa"
                }, {
                    "percent": 15,
                    "type": "Random",
                    "title": "Beetle"
                }, {
                    "percent": 15,
                    "type": "Random",
                    "title": "Nothing"
                }]
            }
        },
        "EnemyEasyElevated": {
            "width": 64,
            "height": 12,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "snap": "bottom",
                "spacing": 4,
                "children": [{
                    "percent": 25,
                    "type": "Random",
                    "title": "Goomba"
                }, {
                    "percent": 15,
                    "type": "Random",
                    "title": "Koopa"
                }, {
                    "percent": 10,
                    "type": "Random",
                    "title": "Beetle"
                }, {
                    "percent": 50,
                    "type": "Random",
                    "title": "Nothing"
                }]
            }
        },
        "EnemyHard": {
            "width": 8,
            "height": 12,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "children": [{
                    "percent": 40,
                    "type": "Random",
                    "title": "HammerBro"
                }, {
                    "percent": 40,
                    "type": "Random",
                    "title": "Blooper"
                }, {
                    "percent": 20,
                    "type": "Random",
                    "title": "Lakitu"
                }]
            }
        },
        
        
        /* Solid groups
        */
        
        "SolidSmall": {
            "width": 8,
            "height": 12,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "children": [{
                    "percent": 80,
                    "type": "Random",
                    "title": "Brick"
                }, {
                    "percent": 20,
                    "type": "Random",
                    "title": "Block"
                }]
            }
        },
        "SolidSmallSpotty": {
            "width": 8,
            "height": 12,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "children": [{
                    "percent": 50,
                    "type": "Random",
                    "title": "Brick"
                }, {
                    "percent": 30,
                    "type": "Random",
                    "title": "Nothing"
                }, {
                    "percent": 20,
                    "type": "Random",
                    "title": "Block"
                }]
            }
        },
        "LandObstacleGroupSolid": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "children": [{
                    "percent": 70,
                    "type": "Random",
                    "title": "Brick"
                }, {
                    "percent": 30,
                    "type": "Random",
                    "title": "Block"
                }]
            }
        },
        "Cannon": {
            "width": 8,
            "height": 32,
            "contents": {
                "mode": "Random",
                "direction": "top",
                "snap": "bottom",
                "spacing": [{
                    "percent": 50,
                    "value": 0
                }, {
                    "percent": 50,
                    "value": 24
                }],
                "children": [{
                    "percent": 50,
                    "type": "Random",
                    "title": "CannonMedium"
                }, {
                    "percent": 10,
                    "type": "Random",
                    "title": "CannonSmall"
                }, {
                    "percent": 40,
                    "type": "Random",
                    "title": "CannonLarge"
                }]
            }
        },
        "CannonStack": {
            "width": 8,
            "height": 32,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "snap": "bottom",
                "children": [{
                    "type": "Random",
                    "title": "Cannon"
                }, {
                    "type": "Random",
                    "title": "Cannon"
                }]
            }
        },
        "RampUpSmall": {
            "width": 32,
            "height": 32,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "type": "Random",
                    "title": "Stone"
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 16
                    },
                    "arguments": {
                        "height": 16
                    }
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 24
                    },
                    "arguments": {
                        "height": 24
                    }
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 32
                    },
                    "arguments": {
                        "height": 32
                    }
                }]
            }
        },
        "RampUpSmallFloor": {
            "width": 32,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "children": [{
                    "type": "Known",
                    "title": "Floor",
                    "arguments": {
                        "macro": "Floor",
                        "width": 32
                    }
                }, {
                    "type": "Random",
                    "title": "RampUpSmall"
                }]
            }
        },
        "RampUpLarge": {
            "width": 64,
            "height": 64,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "type": "Random",
                    "title": "Stone"
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 16
                    },
                    "arguments": {
                        "height": 16
                    }
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 24
                    },
                    "arguments": {
                        "height": 24
                    }
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 32
                    },
                    "arguments": {
                        "height": 32
                    }
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 40
                    },
                    "arguments": {
                        "height": 40
                    }
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 48
                    },
                    "arguments": {
                        "height": 48
                    }
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 56
                    },
                    "arguments": {
                        "height": 56
                    }
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 64
                    },
                    "arguments": {
                        "height": 64
                    }
                }]
            }
        },
        "RampUpLargeFloor": {
            "width": 64,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "children": [{
                    "type": "Known",
                    "title": "Floor",
                    "arguments": {
                        "macro": "Floor",
                        "width": 64
                    }
                }, {
                    "type": "Random",
                    "title": "RampUpLarge"
                }]
            }
        },
        "RampDownSmall": {
            "width": 32,
            "height": 32,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 32
                    },
                    "arguments": {
                        "height": 32
                    }
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 24
                    },
                    "arguments": {
                        "height": 24
                    }
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 16
                    },
                    "arguments": {
                        "height": 16
                    }
                }, {
                    "type": "Known",
                    "title": "Stone"
                }]
            }
        },
        "RampDownSmallFloor": {
            "width": 32,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "children": [{
                    "type": "Known",
                    "title": "Floor",
                    "arguments": {
                        "macro": "Floor",
                        "width": 32
                    }
                }, {
                    "type": "Random",
                    "title": "RampDownSmall"
                }]
            }
        },
        "RampDownLarge": {
            "width": 64,
            "height": 64,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 64
                    },
                    "arguments": {
                        "height": 64
                    }
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 56
                    },
                    "arguments": {
                        "height": 56
                    }
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 48
                    },
                    "arguments": {
                        "height": 48
                    }
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 40
                    },
                    "arguments": {
                        "height": 40
                    }
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 32
                    },
                    "arguments": {
                        "height": 32
                    }
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 24
                    },
                    "arguments": {
                        "height": 24
                    }
                }, {
                    "type": "Known",
                    "title": "Stone",
                    "sizing": {
                        "height": 16
                    },
                    "arguments": {
                        "height": 16
                    }
                }, {
                    "type": "Known",
                    "title": "Stone"
                }]
            }
        },
        "RampDownLargeFloor": {
            "width": 64,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "children": [{
                    "type": "Known",
                    "title": "Floor",
                    "arguments": {
                        "macro": "Floor",
                        "width": 64
                    }
                }, {
                    "type": "Random",
                    "title": "RampDownLarge"
                }]
            }
        },
        "StoneTower": {
            "width": 8,
            "height": 32,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "percent": 50,
                    "type": "Known",
                    "title": "Stone",
                    "snap": "bottom",
                    "sizing": {
                        "height": 24
                    },
                    "arguments": {
                        "height": 24
                    }
                }, {
                    "percent": 50,
                    "type": "Known",
                    "title": "Stone",
                    "stretch": {
                        "height": true
                    },
                }]
            }
        },
        "CannonTower": {
            "width": 24,
            "height": 32,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "type": "Random",
                    "title": "Nothing"
                }, {
                    "type": "Random",
                    "title": "Cannon"
                }, {
                    "type": "Random",
                    "title": "Nothing"
                }]
            }
        },
        
        /* Scenery groups
        */
        
        "OverworldScenery": {
            "height": 80,
            "width": 160,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "snap": "bottom",
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "height": 8
                    }
                }, {
                    "type": "Random",
                    "title": "OverworldLandScenery"
                }, {
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "height": 32
                    }
                }]
            }
        },
        "OverworldLandScenery": {
            "height": 40,
            "width": 160,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "snap": "bottom",
                "spacing": {
                    "min": -4,
                    "max": 40,
                    "units": 4
                },
                "children": [{
                    "percent": 15,
                    "type": "Random",
                    "title": "Bush1"
                }, {
                    "percent": 15,
                    "type": "Random",
                    "title": "Bush2"
                }, {
                    "percent": 15,
                    "type": "Random",
                    "title": "Bush3"
                }, {
                    "percent": 10,
                    "type": "Random",
                    "title": "Fence"
                }, {
                    "percent": 15,
                    "type": "Random",
                    "title": "HillSmall"
                }, {
                    "percent": 10,
                    "type": "Random",
                    "title": "HillLarge"
                }, {
                    "percent": 10,
                    "type": "Random",
                    "title": "PlantSmall"
                }, {
                    "percent": 10,
                    "type": "Random",
                    "title": "PlantLarge"
                }]
            }
        },
        "OverworldClouds": {
            "height": 56,
            "width": 2528,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "snap": "top",
                "spacing": {
                    "min": 16,
                    "max": 80,
                    "units": 8
                },
                "children": [{
                    "percent": 40,
                    "type": "Random",
                    "title": "CloudClump1"
                }, {
                    "percent": 35,
                    "type": "Random",
                    "title": "CloudClump2"
                }, {
                    "percent": 25,
                    "type": "Random",
                    "title": "CloudClump3"
                }]
            }
        },
        "CloudClump1": {
            "height": 56,
            "width": 16,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "spacing": {
                    "min": 16,
                    "max": 40,
                    "units": 8
                },
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                }, {
                    "type": "Random",
                    "title": "Cloud1"
                }]
            }
        },
        "CloudClump2": {
            "height": 56,
            "width": 24,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "spacing": {
                    "min": 16,
                    "max": 40,
                    "units": 8
                },
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                }, {
                    "type": "Random",
                    "title": "Cloud2"
                }]
            }
        },
        "CloudClump3": {
            "height": 56,
            "width": 32,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "spacing": {
                    "min": 16,
                    "max": 40,
                    "units": 8
                },
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                }, {
                    "type": "Random",
                    "title": "Cloud3"
                }]
            }
        },
        "Cloud": {
            "width": 32,
            "height": 12,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "limit": 1,
                "children": [{
                    "percent": 40,
                    "type": "Random",
                    "title": "Cloud1"
                }, {
                    "percent": 35,
                    "type": "Random",
                    "title": "Cloud2"
                }, {
                    "percent": 25,
                    "type": "Random",
                    "title": "Cloud3"
                }]
            }
        },
        "OverworldBetweenSpotScenery": {
            "width": 8,
            "height": 23,
            "contents": {
                "mode": "Random",
                "direction": "top",
                "snap": "bottom",
                "children": [{
                    "percent": 70,
                    "type": "Random",
                    "title": "Nothing",
                    "stretch": {
                        "height": true
                    }
                }, {
                    "percent": 15,
                    "type": "Random",
                    "title": "PlantSmall"
                }, {
                    "percent": 15,
                    "type": "Random",
                    "title": "PlantLarge"
                }]
            }
        },
        
        
        /* Characters
        */
        
        "Goomba": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "Goomba"
                }]
            }
        },
        "Koopa": {
            "width": 8,
            "height": 12,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "percent": 20,
                    "type": "Known",
                    "title": "Koopa",
                }, {
                    "percent": 40,
                    "type": "Known",
                    "title": "Koopa",
                    "arguments": {
                        "smart": true
                    }
                }, {
                    "percent": 15,
                    "type": "Known",
                    "title": "Koopa",
                    "arguments": {
                        "jumping": true
                    }
                }, {
                    "percent": 25,
                    "type": "Known",
                    "title": "Koopa",
                    "arguments": {
                        "smart": true,
                        "jumping": true
                    }
                }]
            }
        },
        "Beetle": {
            "width": 8,
            "height": 8.5,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "Beetle"
                }]
            }
        },
        "HammerBro": {
            "width": 8,
            "height": 12,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "HammerBro"
                }]
            }
        },
        "Blooper": {
            "width": 8,
            "height": 40,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "top",
                "children": [{
                    "type": "Known",
                    "title": "Blooper"
                }]
            }
        },
        "Lakitu": {
            "width": 8,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "snap": "right",
                "spacing": 4,
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "height": 0
                    }
                }, {
                    "type": "Known",
                    "title": "Lakitu"
                }]
            }
        },
        
        
        /* Solids
        */
        
        "Brick": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Random",
                "direction": "right",
                "snap": "top",
                "children": [{
                    "percent": 85,
                    "type": "Known",
                    "title": "Brick"
                }, {
                    "percent": 10,
                    "type": "Known",
                    "title": "Brick",
                    "arguments": {
                        "contents": "Coin"
                    }
                }, {
                    "percent": 5,
                    "type": "Known",
                    "title": "Brick",
                    "arguments": {
                        "contents": "Star"
                    }
                }]
            }
        },
        "Block": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "top",
                "children": [{
                    "type": "Known",
                    "title": "Block",
                    "arguments": [{
                        "percent": 90,
                        "values": {}
                    }, {
                        "percent": 9,
                        "values": {
                            "contents": "Mushroom"
                        }
                    }, {
                        "percent": 1,
                        "values": {
                            "contents": "Mushroom1Up",
                            "hidden": true
                        }
                    }]
                }]
            }
        },
        "BlockTreasure": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "top",
                "children": [{
                    "type": "Known",
                    "title": "Block",
                    "arguments": [{
                        "percent": 35,
                        "values": {
                            "contents": "Mushroom"
                        }
                    }, {
                        "percent": 35,
                        "values": {
                            "contents": "Star"
                        }
                    }, {
                        "percent": 30,
                        "values": {
                            "contents": "Mushroom1Up"
                        }
                    }]
                }]
            }
        },
        "BlockReward": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "direction": "right", 
                "snap": "top",
                "children": [{
                    "type": "Known",
                    "title": "Block",
                    "arguments": [{
                        "percent": 30,
                        "values": {
                            "hidden": true
                        }
                    }, {
                        "percent": 30,
                        "values": {
                            "hidden": true,
                            "contents": "Mushroom"
                        }
                    }, {
                        "percent": 30,
                        "values": {
                            "hidden": true,
                            "contents": "Star"
                        }
                    }, {
                        "percent": 30,
                        "values": {
                            "hidden": true,
                            "contents": "Mushroom1Up"
                        }
                    }]
                }]
            }
        },
        "Bridge": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "snap": "bottom",
                "direction": "right",
                "children": [{
                    "type": "Known",
                    "title": "Bridge",
                    "stretch": {
                        "width": true
                    },
                    "arguments": {
                        "macro": "Bridge",
                    }
                }]
            }
        },
        "Coin": {
            "width": 5,
            "height": 7,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "children": [{
                    "type": "Known",
                    "title": "Coin"
                }]
            }
        },
        "PipeRandom": {
            "width": 16,
            "height": 40,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "snap": "bottom",
                // "spacing": -40,
                "children": [{
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "height": 0
                    }
                }, {
                    "type": "Known",
                    "title": "Pipe",
                    "sizing": {
                        "height": 0
                    },
                    "arguments": [{
                        "percent": 25,
                        "values": {
                            "macro": "Pipe",
                            "piranha": true,
                            "height": 16
                        }
                    }, {
                        "percent": 5,
                        "values": {
                            "macro": "Pipe",
                            "height": 16
                        }
                    }, {
                        "percent": 25,
                        "values": {
                            "macro": "Pipe",
                            "piranha": true,
                            "height": 24
                        }
                    }, {
                        "percent": 5,
                        "values": {
                            "macro": "Pipe",
                            "height": 24
                        }
                    }, {
                        "percent": 20,
                        "values": {
                            "macro": "Pipe",
                            "piranha": true,
                            "height": 32
                        }
                    }, {
                        "percent": 5,
                        "values": {
                            "macro": "Pipe",
                            "height": 32
                        }
                    }, {
                        "percent": 5,
                        "values": {
                            "macro": "Pipe",
                            "piranha": true,
                            "transport": "Underworld",
                            "height": 32
                        }
                    }, {
                        "percent": 5,
                        "values": {
                            "macro": "Pipe",
                            "transport": "Underworld",
                            "height": 32
                        }
                    }, {
                        "percent": 3,
                        "values": {
                            "macro": "Pipe",
                            "piranha": true,
                            "transport": "Underwater",
                            "height": 32
                        }
                    }, {
                        "percent": 2,
                        "values": {
                            "macro": "Pipe",
                            "transport": "Underwater",
                            "height": 32
                        }
                    }]
                }]
            }
        },
        "Pipe": {
            "width": 16,
            "height": 32,
            "contents": {
                "mode": "Certain",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "Pipe"
                }]
            }
        },
        "PipeHorizontal": {
            "width": 16,
            "height": 16,
            "contents": {
                "mode": "Certain",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "PipeHorizontal"
                }]
            }
        },
        "PipeVertical": {
            "width": 16,
            "height": 16,
            "contents": {
                "mode": "Certain",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "PipeVertical"
                }]
            }
        },
        "PipeCorner": {
            "width": 32,
            "height": 16,
            "contents": {
                "mode": "Certain",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "PipeCorner",
                    "arguments": {
                        "macro": "PipeCorner"
                    }
                }]
            }
        },
        "CannonSmall": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "snap": "bottom",
                "children": [{
                    "type": "Final",
                    "source": "CannonSmall",
                    "title": "Cannon",
                }]
            }
        },
        "CannonMedium": {
            "width": 8,
            "height": 16,
            "contents": {
                "mode": "Certain",
                "children": [{
                    "type": "Final",
                    "source": "CannonMedium",
                    "title": "Cannon",
                    "arguments": {
                        "height": 16
                    }
                }]
            }
        },
        "CannonLarge": {
            "width": 8,
            "height": 24,
            "contents": {
                "mode": "Certain",
                "children": [{
                    "type": "Final",
                    "source": "CannonLarge",
                    "title": "Cannon",
                    "arguments": {
                        "height": 24 
                    }
                }]
            }
        },
        "Floor": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "top",
                "children": [{
                    "type": "Known",
                    "title": "Floor",
                    "stretch": {
                        "width": true,
                    },
                    "arguments": {
                        "height": "Infinity"
                    }
                }]
            }
        },
        "Springboard": {
            "width": 8,
            "height": 14.5,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "Springboard"
                }]
            }
        },
        "Stone": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "top",
                "children": [{
                    "type": "Known",
                    "title": "Stone"
                }]
            }
        },
        
        
        /* Scenery
        */
        
        "Bush1": {
            "width": 16,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "Bush1"
                }]
            }
        },
        "Bush2": {
            "width": 24,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "Bush2"
                }]
            }
        },
        "Bush3": {
            "width": 32,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "Bush3"
                }]
            }
        },
        "Cloud1": {
            "width": 16,
            "height": 12,
            "contents": {
                "mode": "Certain",
                "children": [{
                    "type": "Known",
                    "title": "Cloud1"
                }]
            }
        },
        "Cloud2": {
            "width": 24,
            "height": 12,
            "contents": {
                "mode": "Certain",
                "children": [{
                    "type": "Known",
                    "title": "Cloud2"
                }]
            }
        },
        "Cloud3": {
            "width": 32,
            "height": 12,
            "contents": {
                "mode": "Certain",
                "children": [{
                    "type": "Known",
                    "title": "Cloud3"
                }]
            }
        },
        "Fence": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "Fence"
                }]
            }
        },
        "HillSmall": {
            "width": 24,
            "height": 9.5,
            "contents": {
                "mode": "Certain",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "HillSmall"
                }]
            }
        },
        "HillLarge": {
            "width": 40,
            "height": 17.5,
            "contents": {
                "mode": "Certain",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "HillLarge"
                }]
            }
        },
        "PlantSmall": {
            "width": 7,
            "height": 15,
            "contents": {
                "mode": "Certain",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "PlantSmall"
                }]
            }
        },
        "PlantLarge": {
            "width": 8,
            "height": 23,
            "contents": {
                "mode": "Certain",
                "snap": "bottom",
                "children": [{
                    "type": "Known",
                    "title": "PlantLarge"
                }]
            }
        },
        "Water": {
            "width": 4,
            "height": 5,
            "contents": {
                "mode": "Certain",
                "snap": "bottom",
                "direction": "right",
                "children": [{
                    "type": "Known",
                    "title": "Water",
                    "stretch": {
                        "width": true
                    },
                    "arguments": {
                        "macro": "Water",
                    }
                }]
            }
        },
        
        
        /* General macros & helpers
        */
        
        "LakituStop": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "children": [{
                    "type": "Known",
                    "title": "LakituStop",
                    "arguments": {
                        "macro": "LakituStop"
                    }
                }]
            }
        },
        "Platform": {
            "width": 16,
            "height": 4,
            "contents": {
                "mode": "Certain",
                "children": [{
                    "type": "Known",
                    "title": "Platform",
                    "stretch": {
                        "width": true
                    }
                }]
            }
        },
        "PlatformGenerator": {
            "width": 24,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "children": [{
                    "type": "Known",
                    "title": "PlatformGenerator",
                    "arguments": [{
                        "percent": 25,
                        "values": {
                            "macro": "PlatformGenerator"
                        }
                    }, {
                        "percent": 25,
                        "values": {
                            "macro": "PlatformGenerator",
                            "width": 24
                        }
                    }, {
                        "percent": 25,
                        "values": {
                            "macro": "PlatformGenerator",
                            "direction": -1,
                            "width": 24
                        }
                    }, {
                        "percent": 25,
                        "values": {
                            "macro": "PlatformGenerator",
                            "direction": -1,
                        }
                    }]
                }]
            }
        },
        "OverworldEnd": {
            "width": 400,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "snap": "left",
                "children": [{
                    "type": "Random",
                    "title": "OverworldEndFloor"
                }, {
                    "type": "Random",
                    "title": "OverworldEndLand"
                }]
            }
        },
        "OverworldEndFloor": {
            "width": 400,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "children": [{
                    "type": "Random", 
                    "title": "Floor"
                }]
            }
        },
        "OverworldEndLand": {
            "width": 400,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "snap": "bottom",
                "children": [{
                    "type": "Random",
                    "title": "LakituStop"
                }, {
                    "type": "Random", 
                    "title": "RampUpLarge"
                }, {
                    "type": "Random",
                    "title": "Nothing",
                    "sizing": {
                        "width": 64
                    }
                }, {
                    "type": "Random",
                    "title": "EndOutsideCastle"
                }]
            }
        },
        "EndOutsideCastle": {
            "width": 144,
            "height": 80,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "children": [{
                    "type": "Known",
                    "title": "EndOutsideCastle",
                    "arguments": {
                        "macro": "EndOutsideCastle",
                        "large": true
                    },
                    "sizing": {
                        "height": 0
                    }
                }]
            }
        },
        "UnderworldEndOutsideCastle": {
            "width": 144,
            "Height": 88,
            "contents": {
                "mode": "Certain",
                "direction": "top",
                "children": [{
                    "type": "Random",
                    "title": "EndOutsideCastle"
                }]
            }
        },
        "ScrollBlocker": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "direction": "right",
                "children": [{
                    "type": "Known",
                    "title": "ScrollBlocker"
                }]
            }
        },
        
        
        /* Misc.
        */
        
        "Nothing": {
            "width": 8,
            "height": 8,
            "contents": {
                "mode": "Certain",
                "children": []
            }
        }
    }
};