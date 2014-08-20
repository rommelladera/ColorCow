window.onload = function () {

    canvas.onLoad();


    //var canvas = document.getElementById("mainCanvas");
    //var context = canvas.getContext("2d");

    //var rectWidth = 150;
    //var rectHeight = 75;

    //// translate context to center of canvas
    
    ////context.translate(canvas.width / 2, canvas.height / 2);
    //context.translate(10, 10);


    //context.rotate(90 * Math.PI / 180);
    ////context.translate(100, 100);

    //// rotate 45 degrees clockwise
    ////context.rotate(Math.PI / 4);
    

    //context.fillStyle = 'blue';
    //context.fillRect(0, 0, rectWidth, rectHeight);

    //context.fillText("Hello", 10, 10);

    //window.addEventListener("orientationchange", orientationChange, false);

    //var imageObj = new Image();
    //imageObj.src = 'images/tree.jpg';

    //imageObj.onload = function () {

    //    //ctx.drawImage(imageObj, 10, 10);
    //    //canvas.style.width = 200 + "px";
    //    //canvas.style.height = 150 + "px";
    //};

    //document.addEventListener('touchmove', function (e) {
    //    e.preventDefault();
    //}, false);

    //document.body.addEventListener('touchstart', function (e) { e.preventDefault(); });

    //window.onresize = function () {
    //    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    //    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    //    canvas.width = w - 2; //480
    //    canvas.height = h - 2; //360;

    //    var orientation = (w < h) ? "Portrait" : "Lanscape";

    //    if (orientation == "Portrait") {
    //        // Rotate canvas
    //        ctx.translate(canvas.width / 2, canvas.height / 2);
    //        ctx.rotate(20.0 * Math.PI / 180.0);
    //    }

        

    //    ctx.fillText(w + "," + h, 10, 10);
    //    ctx.fillText(orientation, 10, 30);
    //    ctx.fillText(window.orientation, 10, 50);

    //    if (orientation == "Portrait") {
    //        // Rotate canvas
    //        ctx.translate(canvas.width / 2, canvas.height / 2);
    //        ctx.rotate(20.0 * Math.PI / 180.0);
    //    }
    //};

    //function orientationChange() {
    //    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    //    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    //    canvas.width = w - 2; //480
    //    canvas.height = h - 2; //360;

    //    ctx.fillText(w, 10, 10);
    //    ctx.fillText(h, 40, 10);
    //    ctx.fillText(window.orientation, 10, 30);
    //};

    //orientationChange();

    //window.onresize();

}

window.onresize = function () { alert("window.onresize"); };
window.addEventListener("resize", function () {
    alert("resize");
});

window.onorientationchange = function () { alert("window.onorientationchange"); };
window.addEventListener("orientationchange", function () {
    alert("orientationchange");
});

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