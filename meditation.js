const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resumeButton = document.getElementById("resumeButton");
const meditationAudio = document.getElementById("meditationAudio");

startButton.onclick = () => {
    meditationAudio.play();
    startButton.style.display = "none";
    pauseButton.style.display = "inline-block";
};

pauseButton.onclick = () => {
    meditationAudio.pause();
    pauseButton.style.display = "none";
    resumeButton.style.display = "inline-block";
};

resumeButton.onclick = () => {
    meditationAudio.play();
    resumeButton.style.display = "none";
    pauseButton.style.display = "inline-block";
};
