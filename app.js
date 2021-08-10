const whiteKeyboardKeys = ["z", "x", "c", "v", "b", "n", "m"];
const blackKeyboardKeys = ["s", "d", "g", "h", "j"];

const keys = document.querySelectorAll(".key");
const blackKeys = document.querySelectorAll(".key.black");
const whiteKeys = document.querySelectorAll(".key.white");

keys.forEach(function (key) {
    key.addEventListener("click", () => {
        playNote(key);
    })
});

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add("active");

    noteAudio.addEventListener("ended", function() {
        key.classList.remove("active");
    });
}


document.addEventListener("keydown", function(e) {
    let key = e.key;
    let whiteKeyIndex = whiteKeyboardKeys.indexOf(key);
    let blackKeyIndex = blackKeyboardKeys.indexOf(key);
    
    if(whiteKeyIndex >-1) playNote(whiteKeys[whiteKeyIndex]);
    if(blackKeyIndex >-1) playNote(blackKeys[blackKeyIndex]);
});