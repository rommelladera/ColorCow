var cowgirl = new Image();
cowgirl.centerX = 100;
cowgirl.centerY = 100;
cowgirl.sizeX = 50;
cowgirl.sizeY = 50;
cowgirl.speed = 30;

cowgirl.onLoad = function (callback) {
    cowgirl.src = 'images/cowgirl.png';
    cowgirl.onload = callback;
}

cowgirl.onUpdate = function (dt) {
    cowgirl.centerX += cowgirl.speed * dt;
    if (cowgirl.centerX > canvas.maxWidth - (cowgirl.sizeX / 2))
        cowgirl.centerX = canvas.maxWidth - (cowgirl.sizeX / 2);
}

cowgirl.onRender = function () {
    var x = cowgirl.centerX - (cowgirl.sizeX / 2);
    var y = cowgirl.centerY - (cowgirl.sizeY / 2);
    canvas.context.drawImage(
        cowgirl,
        x, y,
        cowgirl.sizeX, cowgirl.sizeY
        );
}