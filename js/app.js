let adviceId = document.querySelector('#adviceId');
let adviceText = document.querySelector('#adviceText');
const spinner = document.querySelector('.spinner');
const dice = document.querySelector('.dice');
const diceImg = document.querySelector('.dice img');

callApi();

dice.addEventListener('click', ()=>{ 
  animateDice();
  setTimeout(()=>{    
    adviceText.style.display = 'flex';
    adviceId.style.display = 'flex';    
    spinner.style.display = "none";
  }, 2000);
   
  callApi(); 
  adviceText.style.display = 'none';
  adviceId.style.display = 'none';  
  spinner.style.display = "block"
})

async function advices(){
  let response = await fetch('https://api.adviceslip.com/advice');
  let data = await response.json(); 
  return data.slip;
}


function callApi(){  
  advices()
  .then(data => {  
    adviceId.innerText = `${data.id}`;       
    adviceText.innerHTML = `&#8220;${data.advice}&#8221;`; 
  })  
}

function animateDice(){  
  diceImg.classList.add("diceSpin");
  setTimeout(() => {
    diceImg.classList.remove("diceSpin");
  }, 1000);
}




