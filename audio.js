window.onload = function () {
// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "media/ex_audio.ogg", type: "audio/ogg"},
        {src: "media/ex_audio.mp3", type: "audio/mpeg"}
    ]
};

var newAudio, newSource;
newAudio = document.createElement("audio");
newAudio.innerHTML = "Your browser does not support audio tags.";

if (audio.controls === true)
    newAudio.controls = "controls";

for (var i = 0; i < audio.source.length; i++) {
    newSource = document.createElement("source");
    newSource.src = audio.source[i].src;
    newSource.type = audio.source[i].type;
    newAudio.appendChild(newSource);
}

document.getElementById("audio1").appendChild(newAudio);
}




