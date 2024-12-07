
    const startButton = document.getElementById('startButton');
    const guideText = document.getElementById('guideText');
    const meditationAudio = document.getElementById('meditationAudio');

    startButton.addEventListener('click', () => {
        if (meditationAudio.paused) {
            meditationAudio.play();
            guideText.textContent = "Breathe in... and out...";
        } else {
            guideText.textContent = "Audio not found or blocked.";
        }
    });

