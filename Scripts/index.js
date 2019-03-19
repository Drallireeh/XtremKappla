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

let pieces = ["piece_one", "piece_two", "piece_three", "piece_four"];

let faisceau;
let house;
let player_one;
let player_two;

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    // sprites
    game.load.image('piece_one', '../Assets/Images/piece_one.png');
    game.load.image('piece_two', '../Assets/Images/piece_two.png');
    game.load.image('piece_three', '../Assets/Images/piece_three.png');
    game.load.image('piece_four', '../Assets/Images/piece_four.png');
    game.load.image('house', '../Assets/Images/house.png');
    game.load.image('faisceau', '../Assets/Images/faisceau.png')
    game.load.image('background', '../Assets/Images/background.jpg');

    // physics
    game.load.physics('physicsData', '../Assets/physics.json');
}

function create() {
    game.physics.startSystem(Phaser.Physics.P2JS);
    // game.physics.p2.updateBoundsCollisionGroup();
    game.physics.p2.gravity.y = 100;
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
