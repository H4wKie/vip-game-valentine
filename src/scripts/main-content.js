import { promptOne, promptTwo, promptThree } from "./prompts";
import '../styles/content.scss';

const allPrompts = promptOne.concat(promptTwo, promptThree);
let pastNr = [];

function loadMain(mainTxt) {
  const mainElem = document.querySelector('.main-content');
  addEventList();

  mainElem.innerHTML = `
    <h1>${mainTxt}</h1>
  `;

  pastNr = [];
}

function playAgain() {
  const mainElem = document.querySelector('.main-content');

  mainElem.innerHTML = `
    <h1>done! play again?</h1>
  `;

  pastNr = [];
}

function updatePage(nr) {
  const mainElem = document.querySelector('.main-content');

  mainElem.innerHTML = `
    <div class="main-text-one">
      <h1>${allPrompts[nr][0]}</h1>
      <h2>${allPrompts[nr][1]}</h2>
    </div>
  `;

  if(allPrompts[nr][2]){
    const secondElem = document.createElement('div');
    secondElem.classList.add('main-text-two');
    secondElem.innerHTML = `
      <h4>drink twee keer</h4>
      <h5>${allPrompts[nr][2]}</h5>
    `;

    mainElem.appendChild(secondElem);
  }
}

function genNr() {
  let nr;

  do{
    nr = Math.floor(Math.random() * allPrompts.length);
  }while(pastNr.includes(nr));
  pastNr.push(nr);
  console.log('pressed me');
  console.log(pastNr);
  return nr;
}

function addEventList() {
  document.querySelector('body').addEventListener('click', ()=>{
    if(pastNr.length < allPrompts.length){
      updatePage(genNr());
    }else {
      playAgain();
    }
  })
}



export { loadMain };