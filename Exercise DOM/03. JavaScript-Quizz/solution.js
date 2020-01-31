function solve() {
  let sections=document.getElementsByTagName('section');
  let result=document.querySelector('.results-inner h1')
  let correctAnswers=['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let counter=0;
  let rightAnswers=0;

  document.getElementById('quizzie')
  .addEventListener('click',(e)=>{
    if (e.target.getAttribute('class')!=='answer-text'){
      return;
    }
    let answer=e.target.innerHTML;

    if (correctAnswers.includes(answer)) {
      rightAnswers++;
    }
    
    sections[counter].style.display='none';
    
    if (counter===2) {
      document.querySelector('#results').style.display='block';
      
      if (rightAnswers===3) {
        result.innerHTML='You are recognized as top JavaScript fan!';
      }else{
        result.innerHTML=`You have ${rightAnswers} right answers`;
      }
      return;
    }

    sections[++counter].style.display='block';
  });
}
