var cowgirl = new Image();
cowgirl.centerX = 100;
cowgirl.centerY = 100;
cowgirl.sizeX = 50;
cowgirl.sizeY = 50;
cowgirl.speed = 30;

cowgirl.directionX = 1;
cowgirl.directionY = 1;


alert("1.0");
cowgirl.horseSound = new Audio("app/www/horseRun.mp3");
cowgirl.horseSound.play();

alert("A");
cowgirl.horseSound = new Audio("/app/www/horseRun.mp3");
cowgirl.horseSound.play();

alert(window.location.href);
cowgirl.horseSound = new Audio(window.location.href.replace("index.html", "horseRun.mp3"));
cowgirl.horseSound.play();

alert(window.location.pathname);
cowgirl.horseSound = new Audio(window.location.pathname.replace("index.html", "horseRun.mp3"));
cowgirl.horseSound.play();



cowgirl.onLoad = function (callback) {
    cowgirl.src = 'images/cowgirl.png';
    cowgirl.onload = callback;
}

cowgirl.onClick = function (point) {
    cowgirl.horseSound.play();

    cowgirl.centerX = point.x;
    cowgirl.centerY = point.y;
}

cowgirl.onUpdate = function (dt) {
    //cowgirl.centerX += cowgirl.speed * cowgirl.directionX * dt;
    //if (cowgirl.centerX > canvas.sizeX - (cowgirl.sizeX / 2))
    //    cowgirl.centerX = canvas.sizeX - (cowgirl.sizeX / 2);
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

//cowgirl.horseSound.addEventListener('ended', function () {
//    cowgirl.horseSound.currentTime = 0;
//    cowgirl.horseSound.play();
//});
