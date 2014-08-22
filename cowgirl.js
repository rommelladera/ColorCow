var cowgirl = new Image();
cowgirl.x = 10;
cowgirl.y = 10;
cowgirl.sizeWidth = 50;
cowgirl.sizeHeight = 50;

cowgirl.onLoad = function (callback) {
    debugger;
    cowgirl.src = 'images/cowgirl.png';
    cowgirl.onload = callback;
}

cowgirl.onDraw = function () {
    canvas.context.drawImage(cowgirl, cowgirl.x, cowgirl.y, cowgirl.sizeWidth, cowgirl.sizeHeight);
}