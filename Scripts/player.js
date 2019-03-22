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

        this.setLightBeam(false, this.current_piece.width);
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
                if (this.current_piece.body.x >= (window.innerWidth / 2) - this.light_beam.width / 2 - 10) {
                    this.current_piece.body.x = (window.innerWidth / 2) - this.light_beam.width / 2 - 10;
                }

                if (this.current_piece.body.x <= 0 + this.light_beam.width / 2) {
                    this.current_piece.body.x = 0 + this.light_beam.width / 2;
                }
            } else if (this.player_number == 1) {

                if (this.current_piece.body.x <= (window.innerWidth / 2) + this.light_beam.width / 2 + 10) {
                    this.current_piece.body.x = (window.innerWidth / 2) + this.light_beam.width / 2 + 10;
                }

                if (this.current_piece.body.x >= window.innerWidth - this.light_beam.width / 2) {
                    this.current_piece.body.x = window.innerWidth - this.light_beam.width / 2;
                }
            }
        } else {
            if (this.player_number == 1) {
                if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                    this.current_piece.body.x -= 4;
                }

                else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                    this.current_piece.body.x += 4;
                }
                if (this.current_piece.body.x <= (window.innerWidth / 2) + this.light_beam.width / 2 + 5) {
                    this.current_piece.body.x = (window.innerWidth / 2) + this.light_beam.width / 2 + 5;
                }
            } else if (this.player_number == 0) {
                if (game.input.keyboard.isDown(Phaser.Keyboard.Q)) {
                    this.current_piece.body.x -= 4;
                }
                else if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
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
    setLightBeam(is_rotate, width) {
        this.light_beam.is_rotate = is_rotate;
        this.light_beam.width = width;
        this.light_beam.angle = 0;
        this.current_piece.addChild(this.light_beam);
    }

    /**
     * Rotate current_piece of player, and set light beam to avoid rotating
     * Change width of light beam to correspond with current_piece.
     * If the key is a cube, we don't rotate it, because it's useless.
     */
    rotatePiece() {
        if (this.current_piece.key != "piece_two") {
            if (this.current_piece.body.fixedRotation == false) {
                
                this.current_piece.body.angle += 90;
                this.light_beam.angle += 90;

                // Adjust light beam
                if (this.light_beam.is_rotate) {
                    this.setLightBeam(false, this.current_piece.width);
                }
                else {
                    this.setLightBeam(true, this.current_piece.height);
                }
            }

            this.current_piece.body.fixedRotation = true;
        }
    }
}