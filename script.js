let homeScore = 0;
let awayScore = 0;

let homeScoreBoard = document.getElementById("home-score");
let awayScoreBoard = document.getElementById("away-score");
let winText = document.getElementById("winning");

homeScoreBoard.textContent = homeScore;
awayScoreBoard.textContent = awayScore;

function updateWinText() {
    if (homeScore > awayScore) {
        winText.textContent = "Lakers are Winning !!!";
    } else if (awayScore > homeScore) {
        winText.textContent = "Pistons are Winning !!!";
    } else {
        winText.textContent = "It's a Tie";
    }
}

function add1Home() {
    homeScore += 1;
    homeScoreBoard.textContent = homeScore;
    updateWinText();
}

function add3Home() {
    homeScore += 3;
    homeScoreBoard.textContent = homeScore;
    updateWinText();
}

function add6Home() {
    homeScore += 6;
    homeScoreBoard.textContent = homeScore;
    updateWinText();
}

// Away Score
function add1Away() {
    awayScore += 1;
    awayScoreBoard.textContent = awayScore;
    updateWinText();
}

function add3Away() {
    awayScore += 3;
    awayScoreBoard.textContent = awayScore;
    updateWinText();
}

function add6Away() {
    awayScore += 6;
    awayScoreBoard.textContent = awayScore;
    updateWinText();
}

function reset() {
    homeScore = 0;
    awayScore = 0;
    awayScoreBoard.textContent = awayScore;
    homeScoreBoard.textContent = homeScore;
    updateWinText();
}
