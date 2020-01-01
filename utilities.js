function getContext(elementId) {
    var c = document.getElementById(elementId);
    return c.getContext("2d");
}

function getWidthAndHeight(elementId) {
    var c = document.getElementById(elementId);
    return {width: c.clientWidth, height: c.clientHeight};
}

function getMouseEventPositionRelativeToElement(e) {
    // e = Mouse click event.
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    return {x, y};
}

function getRandom(min, max) {
    return Math.random() * (max - min + 1) + min;
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}