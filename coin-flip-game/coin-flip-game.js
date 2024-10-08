let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0
};


let resultHTML = '';
  function playGame(guess){
  
const randomNumber = Math.random();

  let result = '';
if(randomNumber<0.5){
result = 'heads';
}
else{
result = 'tails';
}


  if(guess === result){
    resultHTML ='You win!';
  
  score.wins+= 1;
  }
  else if(guess !== result){
    resultHTML ='You lose!';
  score.losses+=1;
  }
  resultHTML += JSON.stringify(score);
  

  localStorage.setItem('score' , JSON.stringify(score));

  document.querySelector('.js-result').innerHTML = resultHTML;

  
}

function reset(){
  
score= {
  wins: 0,
  losses: 0
};

localStorage.setItem('score' , JSON.stringify(score));

resultHTML = JSON.stringify(score);
  document.querySelector('.js-result').innerHTML = resultHTML;
}


document.querySelector('.heads-button').addEventListener('click', () => {
  playGame('heads');
});

document.querySelector('.tails-button').addEventListener('click', () => {
  playGame('tails');
});

document.querySelector('.js-reset-button').addEventListener('click', () => {
  reset();
});