var canvas = document.getElementById("canvas");
canvas.context = canvas.getContext("2d");
canvas.orientation = null;
canvas.maxWidth = 480;
canvas.maxHeight = 360;
canvas.styleWidth = null;
canvas.styleHeight = null;

canvas.onLoad = function () {
    canvas.style.background = "blue";
    canvas.onResize();
};

canvas.onResize = function () {
    canvas.context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.orientation = viewport.orientation;

    if (canvas.orientation == "Portrait") {
        canvas.width = canvas.maxHeight;
        canvas.height = canvas.maxWidth;

        canvas.styleHeight = viewport.width;
        canvas.styleWidth = canvas.styleHeight * canvas.maxWidth / canvas.maxHeight;

        canvas.style.width = canvas.styleHeight + "px";
        canvas.style.height = canvas.styleWidth + "px";

        canvas.style.marginLeft = -(canvas.styleHeight / 2) + "px";
        canvas.style.marginTop = -(canvas.styleWidth / 2) + "px";

        canvas.context.rotate(90 * Math.PI / 180);
        canvas.context.translate(0, -canvas.width);
    } else {
        canvas.width = canvas.maxWidth;
        canvas.height = canvas.maxHeight;

        canvas.styleHeight = viewport.height;
        canvas.styleWidth = canvas.styleHeight * canvas.maxWidth / canvas.maxHeight;

        canvas.style.width = canvas.styleWidth + "px";
        canvas.style.height = canvas.styleHeight + "px";

        canvas.style.marginLeft = -(canvas.styleWidth / 2) + "px";
        canvas.style.marginTop = -(canvas.styleHeight / 2) + "px";
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