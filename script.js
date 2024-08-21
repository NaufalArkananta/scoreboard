let teamAScore = 0;
let teamBScore = 0;
let teamASets = 0;
let teamBSets = 0;
const gamePoint = 25; // Game point, bisa diubah sesuai kebutuhan

// Fungsi untuk menambah skor
function incrementScore(team) {
    if (team === 'A') {
        teamAScore++;
        document.getElementById('teamA-score').textContent = teamAScore;
    } else if (team === 'B') {
        teamBScore++;
        document.getElementById('teamB-score').textContent = teamBScore;
    }
    checkGamePoint();
}

// Fungsi untuk mengecek apakah game point tercapai
function checkGamePoint() {
    if (teamAScore >= gamePoint && teamAScore - teamBScore >= 2) {
        teamASets++;
        resetScores();
        document.getElementById('teamA-sets').textContent = teamASets;
    } else if (teamBScore >= gamePoint && teamBScore - teamAScore >= 2) {
        teamBSets++;
        resetScores();
        document.getElementById('teamB-sets').textContent = teamBSets;
    }
}

// Fungsi untuk mereset skor
function resetScores() {
    teamAScore = 0;
    teamBScore = 0;
    document.getElementById('teamA-score').textContent = teamAScore;
    document.getElementById('teamB-score').textContent = teamBScore;
}
