'use strict';

const birthDate = Math.trunc(Math.random() * 31 + 1);
console.log(birthDate);
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No Value Entered!';
    } else if (guess === birthDate) {
      document.querySelector('.message').textContent =
        'Wow!😯 You rememberd my birthday🎂. Thank you!😍';
      document.querySelector('.number').textContent = birthDate;
      document.querySelector('img').src = 'happy_dora.jpg';

      document.querySelector('body').style.backgroundImage = "url('bg.jpg')";
    } else if (guess > birthDate) {
      document.querySelector('.message').textContent =
        'I am little older than this!😢';
      document.querySelector('img').src = 'Dora.jpg';
      document.querySelector('body').style.backgroundImage =
        "url('birthdaybg.jpg')";
      document.querySelector('.score').textContent = --score;
    } else if (guess < birthDate) {
      document.querySelector('.message').textContent =
        'I am little younger than this!😢';
      document.querySelector('body').style.backgroundImage =
        "url('birthdaybg.jpg')";

      document.querySelector('img').src = 'Dora.jpg';
      document.querySelector('.score').textContent = --score;
    }
  } else {
    document.querySelector('.message').textContent =
      'You forgot my birthday!🤦‍♀️😭';
    document.querySelector('.score').textContent = 0;
  }
});
