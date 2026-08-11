document.addEventListener('DOMContentLoaded', () => {
  const userImg = document.getElementById('user-img');
  const botImg = document.getElementById('bot-img');
  const resultText = document.getElementById('result-text');
  const userScoreEl = document.getElementById('user-score');
  const botScoreEl = document.getElementById('bot-score');
  const choiceButtons = document.querySelectorAll('.choices button');
  const resetBtn = document.getElementById('reset-btn');

  const options = ['rock', 'paper', 'scissors'];
  
  const rules = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  let userScore = 0;
  let botScore = 0;

  choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const userChoice = button.dataset.choice;
      const botChoice = options[Math.floor(Math.random() * options.length)];

      userImg.src = `${userChoice}-human.png`;
      botImg.src = `${botChoice}-bot.png`;

      if (userChoice === botChoice) {
        resultText.textContent = "It's a Draw!";
      } else if (rules[userChoice] === botChoice) {
        resultText.textContent = 'You Win!';
        userScore++;
        userScoreEl.textContent = userScore;
      } else {
        resultText.textContent = 'Bot Wins!';
        botScore++;
        botScoreEl.textContent = botScore;
      }
    });
  });

  resetBtn.addEventListener('click', () => {
    userScore = 0;
    botScore = 0;
    userScoreEl.textContent = '0';
    botScoreEl.textContent = '0';
    resultText.textContent = 'Select your move!';
    userImg.src = 'rock-bot.png';
    botImg.src = 'rock-human.png';
  });
});