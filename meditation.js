// Buttons and other elements
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resumeButton = document.getElementById("resumeButton");
const audio = document.getElementById("meditationAudio");
const guideText = document.getElementById("guideText");

let timer; 
let currentStep = 0; 
const steps = ["Breathe In...", "Hold...", "Breathe Out..."]; 
// Start Meditation
startButton.onclick = function () {
    startButton.style.display = "none"; 
    pauseButton.style.display = "inline"; 
    audio.play(); 
    guideText.innerText = steps[currentStep]; 
    timer = setInterval(updateBreathing, 4000); };

// Update Breathing Step
function updateBreathing() {
    currentStep = (currentStep + 1) % steps.length; 
    guideText.innerText = steps[currentStep];
}

// Pause Meditation
pauseButton.onclick = function () {
    audio.pause(); 
    clearInterval(timer); 
    pauseButton.style.display = "none"; 
    resumeButton.style.display = "inline"; 
};

// Resume Meditation
resumeButton.onclick = function () {
    audio.play(); 
    resumeButton.style.display = "none"; 
    pauseButton.style.display = "inline"; 
    timer = setInterval(updateBreathing, 4000); 
};
