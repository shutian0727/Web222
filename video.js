window.onload = function() {
// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "media/ex_video.ogg", type: "video/mp4"},
        {src: "media/ex_video.ogg", type: "video/ogg"}
            ]
};

var newVideo, newSource;
    newVideo = document.createElement("video");
    newVideo.innerHTML = "Your browser does not support video tags.";

    if (video.controls === true)
        newVideo.controls = "controls";

    newVideo.width = video.width;
    newVideo.height = video.height;

    for (var i = 0; i < video.source.length; i++) {
        newSource = document.createElement("source");
        newSource.src = video.source[i].src;
        newSource.type = video.source[i].type;
        newVideo.appendChild(newSource);
    }

    document.getElementById("video1").appendChild(newVideo);
}
