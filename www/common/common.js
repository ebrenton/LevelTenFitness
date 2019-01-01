function findXPos(inObj) {
    var xPos = inObj.offsetLeft
    var absPosFound = false
    while (inObj.offsetParent != null & !absPosFound) {
        inObj = inObj.offsetParent
        if (inObj.style.position == 'absolute') {
            absPosFound = true
        } else {
            xPos += inObj.offsetLeft
        }
    }
    return xPos
}

function findYPos(inObj) {
    var yPos = inObj.offsetTop
    var absPosFound = false
    while (inObj.offsetParent != null & !absPosFound) {
        inObj = inObj.offsetParent
        if (inObj.style.position == 'absolute') {
            absPosFound = true
        } else {
            yPos += inObj.offsetTop
            //if(inObj.scrollTop) yPos -= inObj.scrollTop
        }
    }
    return yPos
}