const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const game_board = document.querySelector('.game-board')
const game_over = document.querySelector('.game')
const botao = document.getElementById('button')
var btn = document.querySelector("#refresh");
const miliseg = document.querySelector('.milissegundos')
const seg = document.querySelector('.segundos')
const min = document.querySelector('.minutos')

let miliNum = 0
let segNum = 0
let minNum = 0
let INTERVALO

function comecar(){ 
    pipe.style.animation = 'pipe-animation 2s infinite linear'
    clearInterval(INTERVALO)
    INTERVALO = setInterval(() => {
      milissegundos()
    }, 10)
}
    
  function milissegundos() {
    miliNum++
    if (miliNum < 10) {
      miliseg.innerHTML = '0' + miliNum
    } else {
      miliseg.innerHTML = miliNum
    }
  
    if (miliNum == 99) {
      miliNum = 0
      segundos()
    }
  }
  
  function segundos() {
    segNum++
    if (segNum < 10) {
      seg.innerHTML = '0' + segNum
    } else {
      seg.innerHTML = segNum
    }
  
    if (segNum == 59) {
      segNum = 0
      minutos()
    }
  }
  
  function minutos() {
    minNum++
    if (minNum < 10) {
      min.innerHTML = '0' + minNum
    } else {
      min.innerHTML = minNum
    }
}

btn.addEventListener("click", function() {
    
    location.reload();

});
const jump = () =>
{
    mario.classList.add('jump')
    setTimeout(()=>{
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if(pipePosition <= 120 &&  pipePosition > 0 && marioPosition < 80 ){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = 'img/game-over.png'
        mario.style.width = '74px'
        mario.style.marginLeft = '50px'

        game_board.style.background = 'black'

        game_over.src = 'img/1258544.jpg'


        clearInterval(lopp);
    }
},10)

document.addEventListener('keydown', jump)   