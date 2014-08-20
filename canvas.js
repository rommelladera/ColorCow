var canvas = document.getElementById("canvas");

canvas.context = canvas.getContext("2d");

canvas.orientation = null;

canvas.onLoad = function () {
    canvas.style.background = "blue";
    canvas.width = 480
    canvas.height = 360;
    canvas.onRefresh();

    var imageObj = new Image();
    imageObj.src = 'images/tree.jpg';
    imageObj.onload = function () {
        canvas.context.drawImage(imageObj, 10, 10);
    };

    //canvas.context.fillStyle = "blue";
    //canvas.context.fillRect(0, 0, canvas.width, canvas.height);

    //canvas.context.fillStyle = "green";
    //canvas.context.fillRect(1, 1, canvas.width - 2, canvas.height - 2);
};

canvas.onOrientationChange = function (orientation) {
    //canvas.onRefresh();
    canvas.orientation = viewport.orientation;

    canvas.context.translate(canvas.width / 2, canvas.height / 2);
    if (orientation == "Landscape") {
        canvas.context.rotate(90 * Math.PI / 180);
    } else {
        canvas.context.rotate(-90 * Math.PI / 180);
    }
    canvas.context.translate(-canvas.width / 2, -canvas.height / 2);
};

canvas.onRefresh = function () {
    canvas.orientation = viewport.orientation;

    if (canvas.orientation == "Landscape") {
        canvas.style.width = "100px";
        canvas.style.height = "75px";
    } else {
        canvas.style.width = "75px";
        canvas.style.height = "100px";
    }
}