// Dark mode toggle function
function toggleDarkMode() {
    const body = document.body;
    const streams = document.querySelectorAll('.stream');
    body.classList.toggle('dark');
    streams.forEach(stream => stream.classList.toggle('dark'));
}

let isMuted = false;
let players = []; // Array to store all the YouTube players

// This function creates an IFrame player after the API code downloads.
function onYouTubeIframeAPIReady() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach((iframe, index) => {
        players[index] = new YT.Player(iframe, {
            events: {
                'onReady': onPlayerReady
            }
        });
    });
}

// This function will be called when the players are ready
function onPlayerReady(event) {
    // This function can be used to do something when the player is ready, if needed
}

// Toggle mute function
function toggleMute() {
    toggleYouTubePlayersMute();
    toggleMediaElementsMute();

    // Update the mute status and button emoji
    isMuted = !isMuted;
    const muteButton = document.getElementById('muteButton');
    muteButton.textContent = isMuted ? '🔇' : '🔊';
}

// Mute or unmute YouTube players
function toggleYouTubePlayersMute() {
    players.forEach(player => {
        if (!isMuted) {
            player.mute();
        } else {
            player.unMute();
        }
    });
}

// Mute or unmute all audio and video elements
function toggleMediaElementsMute() {
    const audios = document.querySelectorAll('audio');
    const videos = document.querySelectorAll('video');
    audios.forEach(audio => audio.muted = !isMuted);
    videos.forEach(video => video.muted = !isMuted);
}

