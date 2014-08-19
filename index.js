

window.onload = function () {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = w-2; //480;
    canvas.height = h - 2; //360;

    window.addEventListener("orientationchange", function () {
        ctx.fillText(w, 10, 10);
        ctx.fillText(h, 40, 10);
        ctx.fillText(window.orientation, 10, 30);
    }, false);

    var imageObj = new Image();
    imageObj.src = 'images/tree.jpg';

    imageObj.onload = function () {
        
        //ctx.drawImage(imageObj, 10, 10);
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