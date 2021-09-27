const videoplayer = document.querySelector('.video__progress');
const videovolume = document.querySelector('.video__volume');
function progress () {
    let playerVal = videoplayer.value;
    videoplayer.style.background = `linear-gradient(to right, #710707 0%, #710707 ${videoplayer.value}%, #C4C4C4 ${videoplayer.value}%, #C4C4C4 100%)`
}

function volume () {
    let playerVolume = videovolume.value;
    videovolume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${videovolume.value}%, #C4C4C4 ${videovolume.value}%, #C4C4C4 100%)`
}


videoplayer.addEventListener('change', progress);
videovolume.addEventListener('change', volume);