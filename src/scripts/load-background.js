import '../styles/background.scss';
import balOne from '../assets/balloon1.png';
import balTwo from '../assets/balloon2.png';
import balThree from '../assets/balloon3.png';

function loadBackground() {
  generateText();
  setInterval(() => {
    floatBalloons();
  }, 1500);
}

function generateText() {
  const background = document.querySelector('.custom-message');

  const customText = document.createElement('h1');
  customText.classList.add('message');
  customText.innerHTML = `
    <span class="happy">HAPPY</span><br>
    <span class="handwritten">Valentine's<br>Day</span>
  `;

  background.appendChild(customText);
}

function floatBalloons() {
  const ballArr = [balOne, balTwo, balThree];
  const timingFns = ['ease', 'ease-in', 'ease-in-out', 'ease-out'];

  const background = document.querySelector('.float-balloons');
  const image = document.createElement('img');
  image.classList.add('balloon');


  image.src = ballArr[genNumber(3)];
  image.style.right = `${ballLoc()}px`;
  image.style.animationDuration = `${genNumber(5) + 15}s`;
  image.style.height = `${ballSize()}px`;
  image.style.animationTimingFunction = timingFns[genNumber(4)];

  background.appendChild(image);

  setTimeout(() => {
    background.removeChild(image);
  }, 20000);
}

function genNumber(multiplier) {
  return Math.floor(Math.random()*multiplier);
}

function ballLoc() {
  if(window.innerWidth > 1024) {
    return genNumber(291) + 10;
  }else {
    if(genNumber(2) > 0) {
      return 0 - (genNumber(window.innerWidth) / 2) + 100;
    }else {
      return (genNumber(window.innerWidth) / 2) - 100;
    }
  }
}

function ballSize() {
  if(window.innerWidth > 500) {
    return genNumber(50) + 150;
  }else {
    return genNumber(50) + 100;
  }
}

export { loadBackground };