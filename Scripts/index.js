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

let piece_one;
let cube2

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // game.scale.pageAlignHorizontally = true;
    // game.scale.pageAlignVertically = true;
    // game.stage.backgroundColor = '#eee';
    game.load.image('piece_one', '../Assets/Images/piece_one.png');
    game.load.image('cube2', '../Assets/Images/cube.png');

    game.load.physics('physicsData', 'Assets/physics.json');
}

function create() {
    game.physics.startSystem(Phaser.Physics.P2JS);
    let blockCollisionGroup = game.physics.p2.createCollisionGroup();
    game.physics.p2.updateBoundsCollisionGroup();

    piece_one = game.add.sprite(100, 100, 'piece_one');
    game.physics.p2.enable(piece_one);
    piece_one.body.clearShapes();
    piece_one.body.loadPolygon('physicsData', 'piece_one');
    piece_one.body.setCollisionGroup(blockCollisionGroup);
    piece_one.body.collides([blockCollisionGroup]);

    cube2 = game.add.sprite(100, -100, 'cube2');
    game.physics.p2.enable(cube2);
    cube2.body.setCollisionGroup(blockCollisionGroup);
    cube2.body.collides([blockCollisionGroup]);

    piece_one.body.moveDown(300);
    piece_one.body.collideWorldBounds = true;
    piece_one.body.damping= 0;

    piece_one.body.mass= 0.1;

    cube2.body.collideWorldBounds = false;
    cube2.body.damping= 0;

    cube2.body.mass= 0.1;

    cube2.body.moveDown(300);
}

function update() {
    console.log(cube2.body.collidesWith)
    if (piece_one.y > window.innerHeight- 200) {
        // cube.body.setZeroForce();
        // cube.body.setZeroVelocity();
        // cube.body.velocity.y = 0;
    }
}

function render() {

}