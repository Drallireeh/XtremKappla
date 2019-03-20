const LEAP = {
    position : { 
        x : 0, 
        y : 0
    },
    players : [
        { x : 0, y : 0 },
        { x : 0, y : 0 },
    ],
    connected : false,
};

const controller = new Leap.Controller();

controller.connect();

controller.on('deviceStreaming', () => {
    LEAP.connected = true;
    console.log('✔ Leap is connected')
});

controller.on('deviceDisconnected', function() {
    LEAP.connected = false;
    console.log('❌ Leap disconnected');
});

controller.on('frame', function(frame) {
    let hand_one = frame.hands[0];
    let hand_two = frame.hands[1];
    
    if (LEAP.players[0].x < 700){
        hand_one = frame.hands[0];
        hand_two = frame.hands[1];
    } else {
        hand_one = frame.hands[1];
        hand_two = frame.hands[0];
    }
    if (!hand_one || !hand_two) return;

    const palm_one = get2dCoords(hand_one.stabilizedPalmPosition, frame);
    LEAP.players[0].x = palm_one.x;
    LEAP.players[0].y = palm_one.y;

    const palm_two = get2dCoords(hand_two.stabilizedPalmPosition, frame);
    LEAP.players[1].x = palm_two.x;
    LEAP.players[1].y = palm_two.y;

    // Détection des gestures
    frame.gestures.forEach(function(gesture) {
        switch (gesture.type){
            case 'keyTap':
                renderKeyTap(frame, gesture);
                break;
        }
    });
});


/**
 * Transforme les coordonnées 3D récupérée par le Leap en coordonnées 2D pour un <canvas> web
 * @param {Array} leapPosition Tableau de coordonnées 3d [x, y, z]
 * @param {Object} frame Objet "frame" transmit par le Leap Motion
 */
function get2dCoords(leapPosition, frame) {
    const interactionBox = frame.interactionBox;
    const normalizedPoint = interactionBox.normalizePoint(leapPosition, true);

    return {
        x : normalizedPoint[0] * window.innerWidth,
        y : (1 - normalizedPoint[1]) * window.innerHeight
    };
}

/**
 * Dessine un gesture "Tap" à l'écran
 * @param {Object} frame Objet "frame" transmit par le Leap Motion
 * @param {Object} gesture Objet "gesture" de type "keyTap" à dessiner
 */
function renderKeyTap(frame, gesture){
    console.log('ROTATE')
}