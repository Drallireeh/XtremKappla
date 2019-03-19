const game = new Phaser.Game(
    window.innerWidth,
    window.innerHeight,
    Phaser.AUTO,
    'game-root',
    {
        preload: preload,
        create: create,
        update: update,
        render: render
    }
);

// const Pieces = [];
// let tower_player_one = [];
// let tower_player_two = [];
// const positions = [30,90,150,210,270,330,390,450,510];

let faisceau;
let piece_one;
let piece_two;
let house;

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // game.scale.pageAlignHorizontally = true;
    // game.scale.pageAlignVertically = true;
    // game.stage.backgroundColor = '#eee';
    game.load.image('piece_one', '../Assets/Images/piece_one.png');
    game.load.image('piece_two', '../Assets/Images/piece_two.png');
    game.load.image('house', '../Assets/Images/house.png');

    game.load.image('background', 'assets/Images/Background.jpg');

    game.load.physics('physicsData', 'Assets/physics.json');
}

function create() {
    game.physics.startSystem(Phaser.Physics.P2JS);
    let tower_player_one = game.physics.p2.createCollisionGroup();
    game.physics.p2.updateBoundsCollisionGroup();

    background = game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.5);

    house = game.add.sprite(150, window.innerHeight - 200, 'house');
    game.physics.p2.enable(house);
    house.body.static = true;
    house.body.clearShapes();
    house.body.loadPolygon('physicsData', 'house');
    house.body.setCollisionGroup(tower_player_one);
    house.body.collides([tower_player_one]);

    faisceau = new Phaser.Rectangle(510, 50, 50, 500);

    piece_one = createPiece(100, 100, "piece_one", 'physicsData', tower_player_one);
    piece_one.body.moveDown(300);

    piece_two = game.add.sprite(100, -100, 'piece_two');
    game.physics.p2.enable(piece_two);
    piece_two.body.clearShapes();
    piece_two.body.loadPolygon('physicsData', 'piece_two');
    piece_two.body.setCollisionGroup(tower_player_one);
    piece_two.body.collides([tower_player_one]);
    piece_two.body.damping = 0;
    piece_two.body.mass = 0.1;
    piece_two.body.moveDown(300);
}

function update() {
    console.log(piece_one.body.collidesWith)
    if (piece_one.y > window.innerHeight - 200) {
        // cube.body.setZeroForce();
        // cube.body.setZeroVelocity();
        // cube.body.velocity.y = 0;
    }

    if (LEAP.connected) {
        faisceau.x = LEAP.position.x
        if (faisceau.x > 0 && faisceau.x < 60) {
            faisceau.x = 30;
        } else if (faisceau.x > 60 && faisceau.x < 120) {
            faisceau.x = 90;
        } else if (faisceau.x > 120 && faisceau.x < 180) {
            faisceau.x = 150;
        } else if (faisceau.x > 180 && faisceau.x < 240) {
            faisceau.x = 210;
        } else if (faisceau.x > 240 && faisceau.x < 300) {
            faisceau.x = 270;
        } else if (faisceau.x > 300 && faisceau.x < 360) {
            faisceau.x = 330;
        } else if (faisceau.x > 360 && faisceau.x < 420) {
            faisceau.x = 390;
        } else if (faisceau.x > 420 && faisceau.x < 480) {
            faisceau.x = 450;
        } else if (faisceau.x > 480 && faisceau.x < 540) {
            faisceau.x = 510;
        } else if (faisceau.x > 540 && faisceau.x < 600) {
            faisceau.x = 570;
        } else if (faisceau.x > 600 && faisceau.x < 660) {
            faisceau.x = 630;
        } else if (faisceau.x > 660 && faisceau.x < 720) {
            faisceau.x = 690;
        } else if (faisceau.x > 720 && faisceau.x < 780) {
            faisceau.x = 750;
        } else if (faisceau.x > 780 && faisceau.x < 840) {
            faisceau.x = 810;
        } else if (faisceau.x > 840 && faisceau.x < 900) {
            faisceau.x = 870;
        } else if (faisceau.x > 900 && faisceau.x < 960) {
            faisceau.x = 930;
        } else if (faisceau.x > 960 && faisceau.x < 1020) {
            faisceau.x = 990;
        } else if (faisceau.x > 1020 && faisceau.x < 1080) {
            faisceau.x = 1050;
        } else if (faisceau.x > 1080) {
            faisceau.x = 1110
        }
    } else {
        faisceau.x = game.input.x || game.world.width * 0.5;
    }
}


function render() {
    game.debug.geom(faisceau, '#0fffff');
}

function createPiece(x, y, name, physics_data, collision_group) {
    let piece = game.add.sprite(x, y, name);
    game.physics.p2.enable(piece);

    piece.body.clearShapes();
    piece.body.loadPolygon(physics_data, name);
    
    piece.body.setCollisionGroup(collision_group);
    piece.body.collides([collision_group]);
    
    piece.body.damping = 0;
    piece.body.mass = 0.1;

    return piece;
}