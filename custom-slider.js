if (document.querySelectorAll('.slider1').length > 0) {
    const slider1 = tns({
        container: ".slider1",
        items: 1,
        slideBy: "page",
        loop: false,

        "mouseDrag": true,
        "swipeAngle": false,
        "speed": 400,
        // "items": 1,
        "slideBy": '1',
        "autoplay": false,
        "controls": false,
        "nav": true,
        "gutter": 0,
    });
}

if (document.querySelectorAll('.slider2').length > 0) {
    const slider2 = tns({
        container: ".slider2",
        items: 1,
        slideBy: "page",
        loop: false,

        "mouseDrag": true,
        "swipeAngle": false,
        "speed": 400,
        "items": 1,
        "slideBy": '1',
        "autoplay": false,
        "controls": false,
        "nav": true,
        "gutter": 0,
    });
}
