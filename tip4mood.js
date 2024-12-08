document.getElementById("submitLog").addEventListener("click", function() {
    const mood = document.getElementById("emotion").value;

    const tipsSection = document.getElementById("tips-section");

    const moodTips = {
        happy: "Keep spreading the positivity! Share a moment of happiness with someone today.",
        anxious: "Take a deep breath. Try a short meditation to calm your mind.",
        stressed: "Remember to take breaks and focus on breathing. You’ve got this!",
        sad: "It’s okay to feel sad. Take time for self-care and do something gentle today.",
        angry: "Try physical activity or journaling to release the frustration in a healthy way.",
        neutral: "A neutral day can be a good opportunity to reflect and plan for the days ahead."
    };

    const tipMessage = moodTips[mood] || "Please select a mood.";
    tipsSection.innerText = tipMessage;
});
