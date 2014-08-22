window.onload = function () {
    debugger;
    viewport.onLoad();
    canvas.onLoad();

    debugger;
    cowgirl.onLoad(function () {
        // start loop
        debugger;
        //main();
    });
}

var timeOut = null;
window.onresize = function () {
    if (timeOut != null) clearTimeout(timeOut);

    // onResize fires multiple times
    timeOut = setTimeout(function () {
        viewport.onResize();
        canvas.onResize();

        //if (canvas.orientation != viewport.orientation) {
        //    canvas.onOrientationChange();
        //}

    }, 100);
};


// The main game loop
var requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

var lastTime;
function main() {
    debugger;
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;

    update(dt);
    render();

    lastTime = now;
    requestAnimFrame(main);
};


function update(dt) {
}

function render() {
}