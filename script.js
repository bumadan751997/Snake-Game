let position =90;
const div =document.querySelectorAll("div[class*=game-box]");
div[position].style.backgroundColor ='red';

let movingRight;
let movingLeft;
let movingUp;
let movingDown;

const keyRight =() => {
    if (position === 99){
        return;
    }
div[position].style.backgroundColor ='burlywood';
    position++;
    div[position].style.backgroundColor ='red';
}
const keyLeft =() => {
    if (position === 99){
        return;
    }
div[position].style.backgroundColor ='burlywood';
    position--;
    div[position].style.backgroundColor ='red';
}

const keyUp =() => {
        if (position <0){
            return;
        }
    div[position].style.backgroundColor ='burlywood';
        position-=10;
        div[position].style.backgroundColor ='red';
}
const keyDown =() => {
    if (position <0){
        return;
    }
div[position].style.backgroundColor ='burlywood';
    position+=10;
    div[position].style.backgroundColor ='red';
}

window.addEventListener("keydown",(e)=> {
    if(e.key ==="ArrowRight"){
    movingRight=setInterval(keyRight,1000)
    clearInterval(movingUp)
    clearInterval(movingDown)
    clearInterval(movingLeft)
    } else if (e.key ==="ArrowUp"){
    movingUp=setInterval(keyUp,1000)
    clearInterval(movingDown)
    clearInterval(movingLeft)
    clearInterval(movingRight)
    } else if (e.key==="ArrowLeft"){
    movingLeft=setInterval(keyLeft,1000)
    clearInterval(movingDown)
    clearInterval(movingRight)
    clearInterval(movingUp)
    } else if (e.key==="ArrowDown") {
    movingDown=setInterval(keyDown,1000)
    clearInterval(movingLeft)
    clearInterval(movingRight)
    clearInterval(movingUp)
    }
})


function plusDivs(){
    for (let i=0;i<2;i++){
        const twoDivs = document.buildElement('div');
        twoDivs.classList.add('two-div');
        gamebox.appendChild(twoDivs);
    }
}
const food =document.querySelector("#box-99");
food.style.backgroundColor ='green';
function inspectCrash (){
    const divRect = div.getboundingClientRect();
    const foodRect =food.getBoundingClientRect();
    if(divRect.top === foodRect.top && divRect.left === foodRect.left){
        plusDivs;
    }
document.getElemenetById('box-99').addEventListener('click',function(){
    const gamebox = document.querySelector('.game-box');
    const randomColumn = Math.floor(Math.random()* 10)+1;
    const randomRow = Math.floor(Math.random()*10)+1;
    this.style.gameColumnStart = randomColumn;
    this.style.gameRowStart = randomRow;
})
}
