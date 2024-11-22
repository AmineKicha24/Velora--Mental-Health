// Select Elements
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resumeButton = document.getElementById('resumeButton');
const audio = document.getElementById('meditationAudio');
const guideText = document.getElementById('guideText');

// Breathing Guide Text Updates
const breathingSteps = ["Breathe In...", "Hold...", "Breathe Out..."];
let stepIndex = 0;

// Timer for Breathing Guide
let breathingInterval;

// Start Meditation
startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    pauseButton.style.display = 'inline';
    audio.play();
    guideText.innerText = breathingSteps[stepIndex];
    breathingInterval = setInterval(() => {
        stepIndex = (stepIndex + 1) % breathingSteps.length;
        guideText.innerText = breathingSteps[stepIndex];
    }, 4000); // 4 seconds per step
});

// Pause Meditation
pauseButton.addEventListener('click', () => {
    audio.pause();
    clearInterval(breathingInterval);
    pauseButton.style.display = 'none';
    resumeButton.style.display = 'inline';
});

// Resume Meditation
resumeButton.addEventListener('click', () => {
    audio.play();
    resumeButton.style.display = 'none';
    pauseButton.style.display = 'inline';
    breathingInterval = setInterval(() => {
        stepIndex = (stepIndex + 1) % breathingSteps.length;
        guideText.innerText = breathingSteps[stepIndex];
    }, 4000);
});
