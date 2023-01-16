'use strict';

let birthDate = Math.trunc(Math.random() * 31 + 1);
console.log(birthDate);
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No Value Entered!';
      //if you win the game
    } else if (guess === birthDate) {
      document.querySelector('h1').textContent = 'Yay!!!🥳 B-day🎂 Party💕🎉🎊';
      document.querySelector('.message').textContent =
        'Wow!😯 You rememberd my birthday🎂. Thank you!😍';
      document.querySelector('.number').textContent = birthDate;
      document.querySelector('img').src = 'happy_dora.jpg';
      document.querySelector('img').style.width = '90px';
      document.querySelector('body').style.backgroundImage = "url('bg.jpg')";
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = score;
      }
      //When guess is wrong
    } else if (guess !== birthDate) {
      document.querySelector('.message').textContent =
        guess < birthDate
          ? 'I am little younger than this!😢'
          : 'I am little older than this!😢';

      document.querySelector('body').style.backgroundImage =
        "url('birthdaybg.jpg')";
      document.querySelector('img').src = 'Dora.jpg';
      document.querySelector('.score').textContent = --score;
    }
    //if you lost
  } else {
    document.querySelector('.message').textContent =
      'You forgot my birthday!🤦‍♀️😭';
    document.querySelector('img').src = 'sadDora.jpg';
    document.querySelector('img').style.width = '90px';
    document.querySelector('.score').textContent = 0;
    document.querySelector('.number').textContent = 'X👎';
    document.querySelector('h1').textContent =
      'You are not invited to the party💔😓';
  }
});

//"Again" - Reset the game
document.querySelector('.again').addEventListener('click', function () {
  birthDate = Math.trunc(Math.random() * 31 + 1);
  score = 20;
  document.querySelector('h1').textContent = `🤔Guess Dora's Birthday🎂!`;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('img').src = 'Dora.jpg';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundImage =
    "url('birthdaybg.jpg')";
});
