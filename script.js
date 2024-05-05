//first step: get required html elements;
//2: get required data structures;
//3: get required functioning;

const button = document.getElementById('btn');
const colorText = document.querySelector('.color');

const hex = [
     "0",
     "1",
     "2",
     "3",
     "4",
     "5",
     "6",
     "7",
     "8",
     "9",
     "A",
     "B",
     "C",
     "D",
     "E",
     "F",
]

button.addEventListener('click', ()=>{
     const hexColor = generateHexColor();
     document.body.style.backgroundColor = hexColor;
     colorText.innerText = hexColor;
})

function generateHexColor() {

     let hexColor = '#';
     for(let i=0; i<6; i++){
          hexColor += hex[generateRandomIndex()];
     }


     return hexColor;
}

function generateRandomIndex() {
     return Math.floor(Math.random() * hex.length);
}