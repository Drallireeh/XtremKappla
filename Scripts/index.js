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
let cube2

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // game.scale.pageAlignHorizontally = true;
    // game.scale.pageAlignVertically = true;
    // game.stage.backgroundColor = '#eee';

    game.load.image('cube', '../Images/cube.jpg');
    game.load.image('cube2', '../Images/cube.jpg');
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    cube = game.add.sprite(50, 50, 'cube');
    cube2 = game.add.sprite(50, -2000, 'cube2');
    cube.anchor.set(0.5);
    cube2.anchor.set(0.5);
    game.physics.arcade.enable(cube);
    game.physics.arcade.enable(cube2);
    
    cube.body.velocity.set(0, 300);
}

function update() {
    if (cube.y > window.innerHeight) {
        cube.body.velocity.set(0, 0);
        cube.body.immovable=true;
        cube2.body.velocity.set(0, 300);
        game.physics.arcade.collide(cube, cube2)
    }
}

function render() {

}