let adviceId = document.querySelector('#adviceId');
let adviceText = document.querySelector('#adviceText');
let spinner = document.querySelector('.spinner');


async function advices(){
  let response = await fetch('https://api.adviceslip.com/advice');
  let data = await response.json();
  return data.slip;
}


advices().then(data => { 
	adviceId.innerText = `# ${data.id}`; 
    spinner.style = "display:none";    
    adviceText.innerHTML = `&#8220;${data.advice}&#8221;`; 
});

