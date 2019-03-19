class Player {
    constructor(x_pos, player_number) {

        this.player_number = player_number;
        
        this.tower_player = game.physics.p2.createCollisionGroup();
        
        this.house = game.add.sprite(x_pos, window.innerHeight - 200, 'house');
        game.physics.p2.enable(this.house);
        this.house.body.static = true;
        this.house.body.clearShapes();
        this.house.body.loadPolygon('physicsData', 'house');
        this.house.body.setCollisionGroup(this.tower_player);
        this.house.body.collides([this.tower_player]);

        // Initialisation
        
        piece_one = this.createPiece(x_pos - 55, 100, "piece_one", 'physicsData', this.tower_player);
        piece_two = this.createPiece(x_pos, 300, "piece_two", 'physicsData', this.tower_player);
        
        // this.faisceau = new Phaser.Rectangle(x_pos - 25, 50, 50, 500);
        this.faisceau = game.add.sprite(x_pos - 25, 0,'faisceau');
        this.faisceau.anchor.set(0.5);
        this.faisceau.width = piece_one.width;
    }

    createPiece(x, y, name, physics_data, collision_group) {
        let piece = game.add.sprite(x, y, name);
        game.physics.p2.enable(piece);
    
        piece.body.clearShapes();
        piece.body.loadPolygon(physics_data, name);
        
        piece.body.setCollisionGroup(collision_group);
        piece.body.collides([collision_group]);
        // piece.body.fixedRotation = true;
        piece.body.onBeginContact.add((bodyA, bodyB, shapeA, shapeB, equation) => {
            /* if (bodyA.setZeroVelocity) {
                bodyA.setZeroVelocity();
            }
            if (bodyB.setZeroVelocity) {
                bodyB.setZeroVelocity();
            } */
        }, this);
        
        piece.body.damping = 0;
        piece.body.mass = 1;
        piece.body.restitution = 0;
        
        piece.body.moveDown(100);
        
        return piece;
    }

    update() {

        if (LEAP.connected) {
            // this.faisceau.x = LEAP.position.x;
            this.faisceau.x = LEAP.players[ this.player_number ].x

            if (this.faisceau.x > 0 && this.faisceau.x < 60) {
                this.faisceau.x = 30;
            } else if (this.faisceau.x > 60 && this.faisceau.x < 120) {
                this.faisceau.x = 90;
            } else if (this.faisceau.x > 120 && this.faisceau.x < 180) {
                this.faisceau.x = 150;
            } else if (this.faisceau.x > 180 && this.faisceau.x < 240) {
                this.faisceau.x = 210;
            } else if (this.faisceau.x > 240 && this.faisceau.x < 300) {
                this.faisceau.x = 270;
            } else if (this.faisceau.x > 300 && this.faisceau.x < 360) {
                this.faisceau.x = 330;
            } else if (this.faisceau.x > 360 && this.faisceau.x < 420) {
                this.faisceau.x = 390;
            } else if (this.faisceau.x > 420 && this.faisceau.x < 480) {
                this.faisceau.x = 450;
            } else if (this.faisceau.x > 480 && this.faisceau.x < 540) {
                this.faisceau.x = 510;
            } else if (this.faisceau.x > 540 && this.faisceau.x < 600) {
                this.faisceau.x = 570;
            } else if (this.faisceau.x > 600 && this.faisceau.x < 660) {
                this.faisceau.x = 630;
            } else if (this.faisceau.x > 660 && this.faisceau.x < 720) {
                this.faisceau.x = 690;
            } else if (this.faisceau.x > 720 && this.faisceau.x < 780) {
                this.faisceau.x = 750;
            } else if (this.faisceau.x > 780 && this.faisceau.x < 840) {
                this.faisceau.x = 810;
            } else if (this.faisceau.x > 840 && this.faisceau.x < 900) {
                this.faisceau.x = 870;
            } else if (this.faisceau.x > 900 && this.faisceau.x < 960) {
                this.faisceau.x = 930;
            } else if (this.faisceau.x > 960 && this.faisceau.x < 1020) {
                this.faisceau.x = 990;
            } else if (this.faisceau.x > 1020 && this.faisceau.x < 1080) {
                this.faisceau.x = 1050;
            } else if (this.faisceau.x > 1080 && this.faisceau.x < 1140) {
                this.faisceau.x = 1110;
            } else if (this.faisceau.x > 1140 && this.faisceau.x < 1200) {
                this.faisceau.x = 1170;
            } else if (this.faisceau.x > 1200 && this.faisceau.x < 1260) {
                this.faisceau.x = 1230;
            } else if (this.faisceau.x > 1260 && this.faisceau.x < 1320) {
                this.faisceau.x = 1290;
            } else if (this.faisceau.x > 1320 && this.faisceau.x < 1380) {
                this.faisceau.x = 1350;
            } else if (this.faisceau.x > 1380 && this.faisceau.x < 1440) {
                this.faisceau.x = 1410;
            } else if (this.faisceau.x > 1440 && this.faisceau.x < 1500) {
                this.faisceau.x = 1470;
            } else if (this.faisceau.x > 1500) {
                this.faisceau.x = 1480
            }
        } else {
            this.faisceau.x = game.input.x || game.world.width * 0.5;
        }
    }

    render() {
        // game.debug.geom(this.faisceau, '#0fffff');
    }
}