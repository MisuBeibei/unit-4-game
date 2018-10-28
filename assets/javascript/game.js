$(document). ready(function() {
    let randomNum = Math.floor(Math.random()*101 + 19);
    $(".randomNumber").text(randomNum);
    let firstNum = Math.floor(Math.random()*11 +1);
    let secondNum = Math.floor(Math.random()*11 +1);
    let thirdNum = Math.floor(Math.random()*11 +1);
    let forthNum = Math.floor(Math.random()*11 +1);
    let totalScore = 0;
    let wins = 0;
    let losses = 0;

    console.log("Total score: " + totalScore);
    console.log("wins: " + wins); 
    console.log("losses: " + losses);
    $("wins").text(wins);
    $("losses").text(losses);

    function reset() {
        randomNum = Math.floor(Math.random()*101 + 19);
        console.log(randomNum);
        $(".randomNumber").text(randomNum);
        firstNum = Math.floor(Math.random()*11 +1);
        secondNum = Math.floor(Math.random()*11 +1);
        thirdNum = Math.floor(Math.random()*11 +1);
        forthNum = Math.floor(Math.random()*11 +1);
        totalScore = 0;
        $(".scoreGet").text(totalScore);
    };
    function winner() {
        alert("You Won!");
        wins++;
        $(".wins").text(wins);
        reset();
    };
    function loser() {
        alert("You Lose!");
        losses++;
        $(".losses").text(losses);
        reset();
    };

    $("#red").on("click", function(){
        totalScore = totalScore + firstNum;
        console.log("New userTotal= "+ totalScore);
        $(".scoreGet").text(totalScore);
        if (totalScore === randomNum) {
            winner();
        }
        else if (totalScore >randomNum) {
            loser();
        }
    });
    $("#blue").on("click", function(){
        totalScore = totalScore + secondNum;
        console.log("New userTotal= "+ totalScore);
        $(".scoreGet").text(totalScore);
        if (totalScore === randomNum) {
            winner();
        }
        else if (totalScore >randomNum) {
            loser();
        }
    });
    $("#yellow").on("click", function(){
        totalScore = totalScore + thirdNum;
        console.log("New userTotal= "+ totalScore);
        $(".scoreGet").text(totalScore);
        if (totalScore === randomNum) {
            winner();
        }
        else if (totalScore >randomNum) {
            loser();
        }
    });
    $("#green").on("click", function(){
        totalScore = totalScore + forthNum;
        console.log("New userTotal= "+ totalScore);
        $(".scoreGet").text(totalScore);
        if (totalScore === randomNum) {
           winner();
        }
        else if (totalScore >randomNum) {
            loser();
        }   
    });
});
