

window.onload = function () {
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = 480;
    canvas.height = 360;

    var imageObj = new Image();
    imageObj.src = 'images/tree.jpg';

    imageObj.onload = function () {
        
        ctx.drawImage(imageObj, 10, 10);
        //canvas.style.width = 200 + "px";
        //canvas.style.height = 150 + "px";
    };

    //document.addEventListener('touchmove', function (e) {
    //    e.preventDefault();
    //}, false);

    //document.body.addEventListener('touchstart', function (e) { e.preventDefault(); });
    
}


//$(zzzdocument).ready(function () {
//    var gameArea = document.getElementById('gameArea');

//    var widthToHeight = 4 / 3;

//    var newWidth = window.innerWidth;
//    var newHeight = window.innerHeight;

//    var newWidthToHeight = newWidth / newHeight;

//    if (newWidthToHeight > widthToHeight) {
//        // window width is too wide relative to desired game width
//        newWidth = newHeight * widthToHeight;
//        gameArea.style.height = newHeight + 'px';
//        gameArea.style.width = newWidth + 'px';
//    } else { // window height is too high relative to desired game height
//        newHeight = newWidth / widthToHeight;
//        gameArea.style.width = newWidth + 'px';
//        gameArea.style.height = newHeight + 'px';
//    }

//    gameArea.style.marginTop = (-newHeight / 2) + 'px';
//    gameArea.style.marginLeft = (-newWidth / 2) + 'px';

//    gameArea.style.fontSize = (newWidth / 400) + 'em';

//    var gameCanvas = document.getElementById('gameCanvas');
//    gameCanvas.width = newWidth;
//    gameCanvas.height = newHeight;

//    function resizeGame() {
//        var gameArea = document.getElementById('gameArea');
//        var widthToHeight = 4 / 3;
//        var newWidth = window.innerWidth;
//        var newHeight = window.innerHeight;
//        var newWidthToHeight = newWidth / newHeight;

//        if (newWidthToHeight > widthToHeight) {
//            newWidth = newHeight * widthToHeight;
//            gameArea.style.height = newHeight + 'px';
//            gameArea.style.width = newWidth + 'px';
//        } else {
//            newHeight = newWidth / widthToHeight;
//            gameArea.style.width = newWidth + 'px';
//            gameArea.style.height = newHeight + 'px';
//        }

//        gameArea.style.marginTop = (-newHeight / 2) + 'px';
//        gameArea.style.marginLeft = (-newWidth / 2) + 'px';

//        var gameCanvas = document.getElementById('gameCanvas');
//        gameCanvas.width = newWidth;
//        gameCanvas.height = newHeight;
//    }

//    window.addEventListener('resize', resizeGame, false);
//    window.addEventListener('orientationchange', resizeGame, false);
//});