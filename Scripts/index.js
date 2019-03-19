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
let player_one;
let player_two;

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.load.image('piece_one', '../Assets/Images/piece_one.png');
    game.load.image('piece_two', '../Assets/Images/piece_two.png');
    game.load.image('house', '../Assets/Images/house.png');
    game.load.image('faisceau', '../Assets/Images/faisceau.png')

    game.load.image('background', '../Assets/Images/background.jpg');

    game.load.physics('physicsData', '../Assets/physics.json');
}

function create() {
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.updateBoundsCollisionGroup();
    game.physics.p2.restitution = 0;

    background = game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.5);
    
    player_one = new Player(150, 0);
    player_two = new Player(750, 1);
}

function update() {
    player_one.update();
    player_two.update();
}


function render() {
    player_one.render();
    player_two.render();
}
