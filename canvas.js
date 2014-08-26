var canvas = document.getElementById("canvas");
canvas.context = canvas.getContext("2d");
canvas.orientation = null;
canvas.sizeX = 480;
canvas.sizeY = 360;
canvas.styleX = null;
canvas.styleY = null;
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
        canvas.width = canvas.sizeY;
        canvas.height = canvas.sizeX;

        canvas.styleY = viewport.width;
        canvas.styleX = canvas.styleY * canvas.sizeX / canvas.sizeY;

        canvas.style.width = canvas.styleY + "px";
        canvas.style.height = canvas.styleX + "px";

        canvas.style.marginLeft = -(canvas.styleY / 2) + "px";
        canvas.style.marginTop = -(canvas.styleX / 2) + "px";

        canvas.context.rotate(90 * Math.PI / 180);
        canvas.context.translate(0, -canvas.width);
    } else {
        canvas.width = canvas.sizeX;
        canvas.height = canvas.sizeY;

        canvas.styleY = viewport.height;
        canvas.styleX = canvas.styleY * canvas.sizeX / canvas.sizeY;

        canvas.style.width = canvas.styleX + "px";
        canvas.style.height = canvas.styleY + "px";

        canvas.style.marginLeft = -(canvas.styleX / 2) + "px";
        canvas.style.marginTop = -(canvas.styleY / 2) + "px";
    }
};

canvas.onUpdate = function (dt) {
    cowgirl.onUpdate(dt);
}

canvas.onRender = function () {
    canvas.context.clearRect(0, 0, canvas.sizeX, canvas.sizeY);
    cowgirl.onRender();
}

function getMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    if (canvas.orientation == "Portrait") {
        return {
            y: canvas.styleY - evt.clientX - rect.left,
            x: evt.clientY - rect.top
        };
    } else {
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
}

canvas.addEventListener('click', function (evt) {
    var mousePos = getMousePos(evt);
    var point = {
        x: mousePos.x * canvas.sizeX / canvas.styleX,
        y: mousePos.y * canvas.sizeY / canvas.styleY
    };

    cowgirl.onClick(point)

}, false);