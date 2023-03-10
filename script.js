'use strict';

let birthDate = Math.trunc(Math.random() * 31 + 1);
console.log(birthDate);
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'β No Value Entered!';
      //if you win the game
    } else if (guess === birthDate) {
      document.querySelector('h1').textContent = 'Yay!!!π₯³ B-dayπ Partyπππ';
      document.querySelector('.message').textContent =
        'Wow!π― You rememberd my birthdayπ. Thank you!π';
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
          ? 'I am little younger than this!π’'
          : 'I am little older than this!π’';

      document.querySelector('body').style.backgroundImage =
        "url('birthdaybg.jpg')";
      document.querySelector('img').src = 'Dora.jpg';
      document.querySelector('.score').textContent = --score;
    }
    //if you lost
  } else {
    document.querySelector('.message').textContent =
      'You forgot my birthday!π€¦ββοΈπ­';
    document.querySelector('img').src = 'sadDora.jpg';
    document.querySelector('img').style.width = '90px';
    document.querySelector('.score').textContent = 0;
    document.querySelector('.number').textContent = 'Xπ';
    document.querySelector('h1').textContent =
      'You are not invited to the partyππ';
  }
});

//"Again" - Reset the game
document.querySelector('.again').addEventListener('click', function () {
  birthDate = Math.trunc(Math.random() * 31 + 1);
  score = 20;
  document.querySelector('h1').textContent = `π€Guess Dora's Birthdayπ!`;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('img').src = 'Dora.jpg';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundImage =
    "url('birthdaybg.jpg')";
});
