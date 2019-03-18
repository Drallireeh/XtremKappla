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

let cube;
let cubeGroup;
let cube2

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // game.scale.pageAlignHorizontally = true;
    // game.scale.pageAlignVertically = true;
    // game.stage.backgroundColor = '#eee';

    game.load.image('cube', '../Images/cube.png');
    game.load.image('cube2', '../Images/cube.png');
}

function create() {
    game.physics.startSystem(Phaser.Physics.P2JS);
    let blockCollisionGroup = game.physics.p2.createCollisionGroup();
    game.physics.p2.updateBoundsCollisionGroup();
    
    cube = game.add.sprite(100, 100, 'cube');
    game.physics.p2.enable(cube);
    cube.body.setCollisionGroup(blockCollisionGroup);
    cube.body.collides([blockCollisionGroup]);

    cube2 = game.add.sprite(100, -100, 'cube2');
    game.physics.p2.enable(cube2);
    cube2.body.setCollisionGroup(blockCollisionGroup);
    cube2.body.collides([blockCollisionGroup]);


    cube.body.moveDown(300);
    cube.body.collideWorldBounds = true;
    cube.body.damping= 0;

    cube.body.mass= 0.1;

    cube2.body.collideWorldBounds = false;
    cube2.body.damping= 0;

    cube2.body.mass= 0.1;

    cube2.body.moveDown(300);
    // cube2.body.collides(cubeGroup);

    console.log(cube2.body.collidesWith)
}

function update() {
    if (cube.y > window.innerHeight- 200) {
        // cube.body.setZeroForce();
        // cube.body.setZeroVelocity();
        // cube.body.velocity.y = 0;
    }
}

function render() {

}