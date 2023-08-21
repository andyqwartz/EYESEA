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

