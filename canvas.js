var canvas = document.getElementById("canvas");

canvas.context = canvas.getContext("2d");

canvas.orientation = null;

canvas.onLoad = function () {
    debugger;
    canvas.width = viewport.width - 1; //480
    canvas.height = viewport.height - 1; //360;

    canvas.orientation = viewport.orientation;

    canvas.style.background = "blue";

    //canvas.context.fillStyle = "blue";
    //canvas.context.fillRect(0, 0, canvas.width, canvas.height);

    //canvas.context.fillStyle = "green";
    //canvas.context.fillRect(1, 1, canvas.width - 2, canvas.height - 2);
};

canvas.onOrientationChange = function (orientation) {
    canvas.orientation = orientation;
    alert(canvas.orientation);
};