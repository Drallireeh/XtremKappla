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
        this.current_piece = this.spawnPiece(x_pos - 55, 100, pieces[getRandomInt(pieces.length)], 'physicsData', this.tower_player);
    }

    spawnPiece(x, y, name, physics_data, collision_group) {
        this.current_piece = game.add.sprite(x, y, name);
        game.physics.p2.enable(piece);
    
        piece.body.clearShapes();
        piece.body.loadPolygon(physics_data, name);
        
        piece.body.setCollisionGroup(collision_group);
        piece.body.collides([collision_group]);
        // piece.body.fixedRotation = true;
        
        piece.body.damping = 0.5;
        piece.body.mass = 0.1;
    }

    update() {
        if (LEAP.connected) {
            this.faisceau.x = LEAP.position.x;
            // this.faisceau.x = LEAP.players[ player_number ].x
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
            } else if (this.faisceau.x > 1080) {
                this.faisceau.x = 1110
            }
        } else {
            // this.faisceau.x = game.input.x || game.world.width * 0.5;
        }
    }

    render() {
        // game.debug.geom(this.faisceau, '#0fffff');
    }
}