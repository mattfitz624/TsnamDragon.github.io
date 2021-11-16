function Control(x) {
    if (x == 'start') {
        document.getElementById("video").play();
    } else if (x == 'stop') {
        document.getElementById("video").pause();
    }
}