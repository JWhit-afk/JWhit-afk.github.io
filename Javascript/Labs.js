let textLarge = false;

function eventHandler() {
    if (textLarge) {
        makeSmaller();
        textLarge = false;
    } else {
        makeLarger();
        textLarge = true;
    }
}

function makeLarger() {
    document.getElementById("Lab1").style.color = "blue";
    document.getElementById("Lab1").style.fontSize = "100px";
}

function makeSmaller() {
    document.getElementById("Lab1").style.color = "black";
    document.getElementById("Lab1").style.fontSize = "16px";
}