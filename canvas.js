var canvas = document.getElementById("canvas");

canvas.context = canvas.getContext("2d");

canvas.orientation = null;

canvas.onLoad = function () {
    var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    canvas.width = viewportWidth - 1; //480
    canvas.height = viewportHeight - 1; //360;

    canvas.orientation = (viewportWidth < viewportHeight) ? "Portrait" : "Lanscape";

    canvas.style.background = "blue";

    //canvas.context.fillStyle = "blue";
    //canvas.context.fillRect(0, 0, canvas.width, canvas.height);

    //canvas.context.fillStyle = "green";
    //canvas.context.fillRect(1, 1, canvas.width - 2, canvas.height - 2);
};

canvas.onOrientationChange = function (orientation) {
};