var canvas = document.getElementById("canvas");
canvas.context = canvas.getContext("2d");
canvas.orientation = null;
canvas.maxWidth = 480;
canvas.maxHeight = 360;
canvas.styleWidth = null;
canvas.styleHeight = null;

canvas.onLoad = function () {
    canvas.style.background = "blue";
    canvas.onOrientationChange();
};

canvas.onOrientationChange = function () {
    canvas.orientation = viewport.orientation;
    canvas.context.clearRect(0, 0, canvas.width, canvas.height);
    if (canvas.orientation == "Portrait") {
        canvas.width = 360
        canvas.height = 480;
        canvas.context.rotate(90 * Math.PI / 180);
        canvas.context.translate(0, -canvas.width);
        canvas.style.width = "75px";
        canvas.style.height = "100px";
    } else {
        canvas.width = 480
        canvas.height = 360;
        canvas.style.width = "100px";
        canvas.style.height = "75px";
    }

    canvas.onRefresh();
};

canvas.onRefresh = function () {
    var imageObj = new Image();
    imageObj.src = 'images/tree.jpg';
    imageObj.onload = function () {
        canvas.context.drawImage(imageObj, 10, 10);
    }
}