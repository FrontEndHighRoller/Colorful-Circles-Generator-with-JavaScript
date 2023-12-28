let html = '';
let randomRGB;

function randomNumber(){
  return Math.floor(Math.random() * 256);
}

for(let i = 1; i < 10; i++){
let red = randomNumber();
let green = randomNumber();
let blue = randomNumber();  
  
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}


document.querySelector('main').innerHTML = html;