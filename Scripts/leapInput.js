const LEAP = {
    /* players : [
        { x : 0, y : 0 },
        { x : 0, y : 0 },
    ], */
    position: { x : 0, y : 0},
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
    let hand = frame.hands[0];
    if (!hand) return;

    const palm = get2dCoords(hand.stabilizedPalmPosition, frame);
    LEAP.position.x = palm.x;
    LEAP.position.y = palm.y;

    //console.log(LEAP.position)
});

function get2dCoords(leapPosition, frame) {
    const interactionBox = frame.interactionBox;
    const normalizedPoint = interactionBox.normalizePoint(leapPosition, true);

    return {
        x : normalizedPoint[0] * window.innerWidth,
        y : (1 - normalizedPoint[1]) * window.innerHeight
    };
}