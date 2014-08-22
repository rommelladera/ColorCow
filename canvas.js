var canvas = document.getElementById("canvas");
canvas.context = canvas.getContext("2d");
canvas.orientation = null;
canvas.maxWidth = 480;
canvas.maxHeight = 360;
canvas.styleWidth = null;
canvas.styleHeight = null;
canvas.style.position = "fixed";
canvas.style.top = "50%";
canvas.style.left = "50%";
canvas.style.background = "#db9595";

canvas.onLoad = function (callback) {
    canvas.onResize();

    cowgirl.onLoad(function () {
        if (callback != null) callback();
    });
}

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
};

canvas.onUpdate = function (dt) {
    cowgirl.onUpdate(dt);
}

canvas.onRender = function () {
    canvas.context.clearRect(0, 0, canvas.width, canvas.height);
    cowgirl.onRender();
}