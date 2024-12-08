

document.getElementById("submitQuiz").addEventListener("click", function() {
    var quiz1 = document.getElementById("quiz1").value;
    var quiz2 = document.getElementById("quiz2").value;
    var quiz3 = document.getElementById("quiz3").value;
    var resultMessage = document.getElementById("quizMessage");

    if (quiz1 === "yes" && quiz2 === "yes" && quiz3 === "yes") {
        resultMessage.textContent = "You are feeling great today! Keep it up!";
    } else if (quiz1 === "no" && quiz2 === "no" && quiz3 === "no") {
        resultMessage.textContent = "It seems like you're having a rough day. Take care of yourself.";
    } else {
        resultMessage.textContent = "You're some where in between. It might help to take a break and relax.";
    }

    document.getElementById("quizResult").style.display = "block";
});

