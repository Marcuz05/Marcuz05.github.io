var audio = document.getElementById("audio-stream");

function toStart() {
    audio.currentTime=0;
};

function toMain() {
    audio.currentTime=47;
};

function toTheme() {
    audio.currentTime=568;
};


function toEnd() {
    audio.currentTime=1205;
};