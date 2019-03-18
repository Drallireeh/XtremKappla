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

const Pieces = [];
let Tower_player_one = [];
let Tower_player_two = [];
// const positions = [30,90,150,210,270,330,390,450,510];

let faisceau;

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // game.scale.pageAlignHorizontally = true;
    // game.scale.pageAlignVertically = true;
    // game.stage.backgroundColor = '#eee';

    game.load.image('background', 'assets/Images/Background.jpg');

}

function create() {
    game.physics.startSystem(Phaser.Physics.Box2D);

    background = game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.5);

    faisceau = new Phaser.Rectangle(510, 50, 50, 500);
    
}

function update() {
    if(LEAP.connected){
        faisceau.x = LEAP.position.x
        if(faisceau.x > 0 && faisceau.x < 60){
            faisceau.x = 30;
        } else if(faisceau.x > 60 && faisceau.x < 120){
            faisceau.x = 90;
        } else if(faisceau.x > 120 && faisceau.x < 180){
            faisceau.x = 150;
        } else if(faisceau.x > 180 && faisceau.x < 240){
            faisceau.x = 210;
        } else if(faisceau.x > 240 && faisceau.x < 300){
            faisceau.x = 270;
        } else if(faisceau.x > 300 && faisceau.x < 360){
            faisceau.x = 330;
        } else if(faisceau.x > 360 && faisceau.x < 420){
            faisceau.x = 390;
        } else if(faisceau.x > 420 && faisceau.x < 480){
            faisceau.x = 450;
        } else if(faisceau.x > 480 && faisceau.x < 540){
            faisceau.x = 510;
        } else if(faisceau.x > 540 && faisceau.x < 600){
            faisceau.x = 570;
        } else if(faisceau.x > 600 && faisceau.x < 660){
            faisceau.x = 630;
        } else if(faisceau.x > 660 && faisceau.x < 720){
            faisceau.x = 690;
        } else if(faisceau.x > 720 && faisceau.x < 780){
            faisceau.x = 750;
        } else if(faisceau.x > 780 && faisceau.x < 840){
            faisceau.x = 810;
        } else if(faisceau.x > 840 && faisceau.x < 900){
            faisceau.x = 870;
        } else if(faisceau.x > 900 && faisceau.x < 960){
            faisceau.x = 930;
        } else if(faisceau.x > 960 && faisceau.x < 1020){
            faisceau.x = 990;
        } else if(faisceau.x > 1020 && faisceau.x < 1080){
            faisceau.x = 1050;
        } else if(faisceau.x > 1080){
            faisceau.x = 1110
        }
    } else {
        faisceau.x = game.input.x || game.world.width*0.5;
    }

    
}

function render() {
    game.debug.geom(faisceau,'#0fffff');
}