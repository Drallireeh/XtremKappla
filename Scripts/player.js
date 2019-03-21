class Player {
    constructor(x_pos, player_number, rotate_key) {
        this.player_pos = x_pos;
        this.player_number = player_number;
        this.player_collision_group = game.physics.p2.createCollisionGroup();

        this.tower = game.add.sprite(this.player_pos, window.innerHeight - 100, 'house');
        game.physics.p2.enable(this.tower);
        this.tower.body.static = true;
        this.tower.body.clearShapes();
        this.tower.body.loadPolygon('physicsData', 'house');

        this.tower.body.setCollisionGroup(this.player_collision_group);
        this.tower.body.collides([this.player_collision_group]);

        this.light_beam = game.add.sprite(0, 0, 'light_beam');
        this.light_beam.anchor.set(0.5);

        this.rotate_key = game.input.keyboard.addKey(rotate_key);

        // Initialisation
        this.spawnPiece(this.player_pos - 55, 100, pieces[getRandomInt(pieces.length)], 'physicsData');
    }

    /**
     * Add a piece, place it and adjust parameters
     * @param {int} x position in x
     * @param {int} y position in x
     * @param {string} name name of the piece
     * @param {string} physics_data name of the file to load data
     * @param {Phaser.Physics.P2.CollisionGroup} collision_group collision group off this item
     */
    spawnPiece(x, y, name, physics_data) {
        this.current_piece = game.add.sprite(x, y, name);
        game.physics.p2.enable(this.current_piece);

        this.current_piece.body.clearShapes();
        this.current_piece.body.loadPolygon(physics_data, name);

        this.current_piece.body.setCollisionGroup(this.player_collision_group);
        this.current_piece.body.collides([this.player_collision_group]);

        this.current_piece.body.damping = 0.5;
        this.current_piece.body.mass = 0.1;

        this.current_piece.body.createGroupCallback(this.player_collision_group, this.onTowerHit.bind(this), game.context);

        this.setLightBeam();
    }

    update() {
        if (this.rotate_key.isUp) this.current_piece.body.fixedRotation = false;
        if (this.rotate_key.isDown) this.rotatePiece()

        if (this.current_piece.y > window.innerHeight + 50 && this.current_piece != undefined) {
            this.current_piece.removeChildren();
            this.current_piece.destroy();
            this.spawnPiece(this.player_pos - 55, 100, pieces[getRandomInt(pieces.length)], 'physicsData');
        }

        if (LEAP.connected) {
            this.current_piece.body.x = LEAP.players[this.player_number].x

            if (this.player_number == 0) {
                if (this.current_piece.body.x > 0 && this.current_piece.body.x < 60) {
                    this.current_piece.body.x = 30;
                } else if (this.current_piece.body.x > 60 && this.current_piece.body.x < 120) {
                    this.current_piece.body.x = 90;
                } else if (this.current_piece.body.x > 120 && this.current_piece.body.x < 180) {
                    this.current_piece.body.x = 150;
                } else if (this.current_piece.body.x > 180 && this.current_piece.body.x < 240) {
                    this.current_piece.body.x = 210;
                } else if (this.current_piece.body.x > 240 && this.current_piece.body.x < 300) {
                    this.current_piece.body.x = 270;
                } else if (this.current_piece.body.x > 300 && this.current_piece.body.x < 360) {
                    this.current_piece.body.x = 330;
                } else if (this.current_piece.body.x > 360 && this.current_piece.body.x < 420) {
                    this.current_piece.body.x = 390;
                } else if (this.current_piece.body.x > 420 && this.current_piece.body.x < 480) {
                    this.current_piece.body.x = 450;
                } else if (this.current_piece.body.x > 480 && this.current_piece.body.x < 540) {
                    this.current_piece.body.x = 510;
                } else if (this.current_piece.body.x > 540 && this.current_piece.body.x < 600) {
                    this.current_piece.body.x = 570;
                } else if (this.current_piece.body.x > 600 && this.current_piece.body.x < 660) {
                    this.current_piece.body.x = 630;
                } else if (this.current_piece.body.x > 660 && this.current_piece.body.x < 720) {
                    this.current_piece.body.x = 690;

                } else if (this.player_number == 1) {
                    if (this.current_piece.body.x > 720 && this.current_piece.body.x < 780) {
                        this.current_piece.body.x = 750;
                    } else if (this.current_piece.body.x > 780 && this.current_piece.body.x < 840) {
                        this.current_piece.body.x = 810;
                    } else if (this.current_piece.body.x > 840 && this.current_piece.body.x < 900) {
                        this.current_piece.body.x = 870;
                    } else if (this.current_piece.body.x > 900 && this.current_piece.body.x < 960) {
                        this.current_piece.body.x = 930;
                    } else if (this.current_piece.body.x > 960 && this.current_piece.body.x < 1020) {
                        this.current_piece.body.x = 990;
                    } else if (this.current_piece.body.x > 1020 && this.current_piece.body.x < 1080) {
                        this.current_piece.body.x = 1050;
                    } else if (this.current_piece.body.x > 1080 && this.current_piece.body.x < 1140) {
                        this.current_piece.body.x = 1110;
                    } else if (this.current_piece.body.x > 1140 && this.current_piece.body.x < 1200) {
                        this.current_piece.body.x = 1170;
                    } else if (this.current_piece.body.x > 1200 && this.current_piece.body.x < 1260) {
                        this.current_piece.body.x = 1230;
                    } else if (this.current_piece.body.x > 1260 && this.current_piece.body.x < 1320) {
                        this.current_piece.body.x = 1290;
                    } else if (this.current_piece.body.x > 1320 && this.current_piece.body.x < 1380) {
                        this.current_piece.body.x = 1350;
                    } else if (this.current_piece.body.x > 1380 && this.current_piece.body.x < 1440) {
                        this.current_piece.body.x = 1410;
                    } else if (this.current_piece.body.x > 1440 && this.current_piece.body.x < 1500) {
                        this.current_piece.body.x = 1470;
                    } else if (this.current_piece.body.x > 1500) {
                        this.current_piece.body.x = 1480
                    }
                }
            }
        } else {
            if (this.player_number == 1) {
                if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                    this.current_piece.body.x -= 4;
                } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                    this.current_piece.body.x += 4;
                }
                if (this.current_piece.body.x <= (window.innerWidth / 2) + this.light_beam.width / 2 + 5) {
                    this.current_piece.body.x = (window.innerWidth / 2) + this.light_beam.width / 2 + 5;
                }
            } else if (this.player_number == 0) {
                if (game.input.keyboard.isDown(Phaser.Keyboard.Q)) {
                    this.current_piece.body.x -= 4;
                } else if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
                    this.current_piece.body.x += 4;
                }
                if (this.current_piece.body.x >= (window.innerWidth / 2) - this.light_beam.width / 2 - 5) {
                    this.current_piece.body.x = (window.innerWidth / 2) - this.light_beam.width / 2 - 5;
                }
            }
        }
    }

    /**
     * Callback when the current piece hit the tower
     */
    onTowerHit() {
        this.current_piece.body.createGroupCallback(this.player_collision_group, null, game.context);
        this.current_piece.removeChildren();
        this.spawnPiece(this.player_pos - 55, 100, pieces[getRandomInt(pieces.length)], 'physicsData');
    }

    /**
     * Set width of light_beam, and add it in child of current_piece
     */
    setLightBeam() {
        this.light_beam.isRotate = false;
        this.light_beam.width = this.current_piece.width; // Need boolean after
        this.light_beam.angle = 0;
        this.current_piece.addChild(this.light_beam);
    }

    rotatePiece() {
        if (this.current_piece.key != "piece_two") {
            if (this.current_piece.body.fixedRotation == false) {
                this.current_piece.body.angle += 90;
                this.light_beam.angle += 90;
                if (this.light_beam.isRotate) {
                    this.light_beam.isRotate = false;
                    this.light_beam.width = this.current_piece.width;
                }
                else {
                    this.light_beam.isRotate = true;
                    this.light_beam.width = this.current_piece.height;
                }
            }

            this.current_piece.body.fixedRotation = true;
        }
    }
}