class Player {
    constructor(x_pos, player_number) {
        this.player_pos = x_pos;
        this.player_number = player_number;

        this.tower_player = game.physics.p2.createCollisionGroup();

        this.house = game.add.sprite(this.player_pos, window.innerHeight - 100, 'house');
        game.physics.p2.enable(this.house);
        this.house.body.static = true;
        this.house.body.clearShapes();
        this.house.body.loadPolygon('physicsData', 'house');
        // this.house.body.setCollisionGroup(this.tower_player);
        // this.house.body.collides([this.tower_player]);

        // Initialisation
        this.spawnPiece(this.player_pos - 55, 100, pieces[getRandomInt(pieces.length)], 'physicsData', this.tower_player);

        // this.faisceau = new Phaser.Rectangle(this.player_pos - 25, 50, 50, 500);
        this.faisceau = game.add.sprite(this.player_pos - 25, 0, 'faisceau');
        this.faisceau.anchor.set(0.5);
        this.faisceau.width = this.current_piece.width;
    }

    spawnPiece(x, y, name, physics_data, collision_group) {
        this.current_piece = game.add.sprite(x, y, name);
        game.physics.p2.enable(this.current_piece);

        this.current_piece.collideWorldBounds = false;
        this.current_piece.body.clearShapes();
        this.current_piece.body.loadPolygon(physics_data, name);

        this.current_piece.body.setCollisionGroup(collision_group);
        this.current_piece.body.collides([collision_group]);

        this.current_piece.body.damping = 0.5;
        this.current_piece.body.mass = 0.1;
    }

    update() {
        if (this.current_piece != undefined) {
            if (this.current_piece.y > window.innerHeight + 50) {
                this.current_piece.body.destroy();
                this.current_piece = this.spawnPiece(this.player_pos - 55, 100, pieces[getRandomInt(pieces.length)], 'physicsData', this.tower_player);
            }
        }

        // if (LEAP.connected) {
        //     // this.faisceau.x = LEAP.position.x;
        //     this.faisceau.x = LEAP.players[ this.player_number ].x

        //     if (this.faisceau.x > 0 && this.faisceau.x < 60) {
        //         this.faisceau.x = 30;
        //     } else if (this.faisceau.x > 60 && this.faisceau.x < 120) {
        //         this.faisceau.x = 90;
        //     } else if (this.faisceau.x > 120 && this.faisceau.x < 180) {
        //         this.faisceau.x = 150;
        //     } else if (this.faisceau.x > 180 && this.faisceau.x < 240) {
        //         this.faisceau.x = 210;
        //     } else if (this.faisceau.x > 240 && this.faisceau.x < 300) {
        //         this.faisceau.x = 270;
        //     } else if (this.faisceau.x > 300 && this.faisceau.x < 360) {
        //         this.faisceau.x = 330;
        //     } else if (this.faisceau.x > 360 && this.faisceau.x < 420) {
        //         this.faisceau.x = 390;
        //     } else if (this.faisceau.x > 420 && this.faisceau.x < 480) {
        //         this.faisceau.x = 450;
        //     } else if (this.faisceau.x > 480 && this.faisceau.x < 540) {
        //         this.faisceau.x = 510;
        //     } else if (this.faisceau.x > 540 && this.faisceau.x < 600) {
        //         this.faisceau.x = 570;
        //     } else if (this.faisceau.x > 600 && this.faisceau.x < 660) {
        //         this.faisceau.x = 630;
        //     } else if (this.faisceau.x > 660 && this.faisceau.x < 720) {
        //         this.faisceau.x = 690;
        //     } else if (this.faisceau.x > 720 && this.faisceau.x < 780) {
        //         this.faisceau.x = 750;
        //     } else if (this.faisceau.x > 780 && this.faisceau.x < 840) {
        //         this.faisceau.x = 810;
        //     } else if (this.faisceau.x > 840 && this.faisceau.x < 900) {
        //         this.faisceau.x = 870;
        //     } else if (this.faisceau.x > 900 && this.faisceau.x < 960) {
        //         this.faisceau.x = 930;
        //     } else if (this.faisceau.x > 960 && this.faisceau.x < 1020) {
        //         this.faisceau.x = 990;
        //     } else if (this.faisceau.x > 1020 && this.faisceau.x < 1080) {
        //         this.faisceau.x = 1050;
        //     } else if (this.faisceau.x > 1080 && this.faisceau.x < 1140) {
        //         this.faisceau.x = 1110;
        //     } else if (this.faisceau.x > 1140 && this.faisceau.x < 1200) {
        //         this.faisceau.x = 1170;
        //     } else if (this.faisceau.x > 1200 && this.faisceau.x < 1260) {
        //         this.faisceau.x = 1230;
        //     } else if (this.faisceau.x > 1260 && this.faisceau.x < 1320) {
        //         this.faisceau.x = 1290;
        //     } else if (this.faisceau.x > 1320 && this.faisceau.x < 1380) {
        //         this.faisceau.x = 1350;
        //     } else if (this.faisceau.x > 1380 && this.faisceau.x < 1440) {
        //         this.faisceau.x = 1410;
        //     } else if (this.faisceau.x > 1440 && this.faisceau.x < 1500) {
        //         this.faisceau.x = 1470;
        //     } else if (this.faisceau.x > 1500) {
        //         this.faisceau.x = 1480
        //     }
        // } else {
        //     this.faisceau.x = game.input.x || game.world.width * 0.5;
        // }
    }

    render() {
        // game.debug.geom(this.faisceau, '#0fffff');
    }
}