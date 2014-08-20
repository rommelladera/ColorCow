var viewport = {
    width: 0,
    height: 0,
    orientation: null,
    onLoad: function () {
        viewport.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        viewport.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        viewport.orientation = (viewport.width < viewport.height) ? "Portrait" : "Landscape";
    },
    onResize: function () {
        viewport.onLoad();
    }
}

