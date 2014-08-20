var canvas = document.getElementById("canvas");

canvas.context = canvas.getContext("2d");

canvas.orientation = null;

canvas.onLoad = function () {
    canvas.style.background = "blue";
    canvas.width = 480
    canvas.height = 360;
    canvas.orientation = viewport.orientation;

    canvas.context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.context.translate(canvas.width / 2, canvas.height / 2);
    if (canvas.orientation == "Portrait") {
        canvas.context.rotate(90 * Math.PI / 180);
        canvas.style.width = "75px";
        canvas.style.height = "100px";
    } else {
        canvas.style.width = "100px";
        canvas.style.height = "75px";
    }
    canvas.context.translate(-canvas.width / 2, -canvas.height / 2);

    canvas.onRefresh();
};

canvas.onOrientationChange = function () {
    canvas.orientation = viewport.orientation;

    canvas.context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.context.translate(canvas.width / 2, canvas.height / 2);
    if (canvas.orientation == "Portrait") {
        canvas.context.rotate(90 * Math.PI / 180);
        canvas.style.width = "75px";
        canvas.style.height = "100px";
    } else {
        canvas.context.rotate(-90 * Math.PI / 180);
        canvas.style.width = "100px";
        canvas.style.height = "75px";
    }
    canvas.context.translate(-canvas.width / 2, -canvas.height / 2);

    canvas.onRefresh();
};

canvas.onRefresh = function () {
    var imageObj = new Image();
    imageObj.src = 'images/tree.jpg';
    imageObj.onload = function () {
        canvas.context.drawImage(imageObj, 10, 10);
    }
}