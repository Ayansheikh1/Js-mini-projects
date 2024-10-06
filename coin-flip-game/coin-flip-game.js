const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0
};



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
  alert('You win!');
  score.wins+= 1;
  }
  else if(guess !== result){
  alert('You lose!');
  score.losses+=1;
  }
  console.log(score);
  

  localStorage.setItem('score' , JSON.stringify(score));

  
}


document.querySelector('.heads-button').addEventListener('click', () => {
  playGame('heads');
});

document.querySelector('.tails-button').addEventListener('click', () => {
  playGame('tails');
});