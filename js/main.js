responses = [
    "Sure?",
    "Reconsidering?",
    "No, really?",
    "Why not yes?",
    "Not ready for yes?",
    "Second thoughts?",
    "Try yes?",
    "Switch to yes?",
    "No? Think again.",
    "Yes, maybe?"
];
let counter = 0
let size = 33
document.getElementById("no").addEventListener("click", function(){
    size *= 1.3;
    document.getElementById("yes").style.fontSize = size + "px";
    document.getElementById("txt").innerHTML = responses[counter]
    counter += 1
});

document.addEventListener('DOMContentLoaded', function() {
    if (typeof window.AudioContext !== 'undefined') {
        let audioContext = new window.AudioContext();
        audioContext.resume().then(() => {
            console.log('Audio context resumed successfully');
            let backgroundMusic = document.getElementById('background-music');
            backgroundMusic.play().catch(function(error) {
                console.error('Error playing background music:', error);
            });
        });
    } else {
        console.error('Web Audio API is not supported');
    }
});
