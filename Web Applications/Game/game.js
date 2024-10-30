let user = 0;
let comp = 0;

let choose = document.querySelectorAll('.one');
let msg = document.querySelector('#msg');
let userscore = document.querySelector('#user');
let compscore = document.querySelector('#comp');


const gencompchoice = () =>{
    const options = ['rock', 'paper', 'scissor'];
    const randidx = Math.floor(Math.random()*4);
    return options[randidx];
    
};


const drawgame = () =>{
        msg.innerText = 'Game is draw, play again!';
        msg.style.backgroundColor = 'black';
}

const showwinner = (userwin, userchoice, compchoice) =>{
    if(userwin){
        user++;
        userscore.innerText = user;
        msg.innerText = `You win!, your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = 'green';
    }else{
        comp++;
        compscore.innerText = comp;
        msg.innerText = `You lost!, ${userchoice} beats your ${compchoice}`;
        msg.style.backgroundColor = 'red';
    };
};



const gameplay = (userchoice) =>{
    const compchoice = gencompchoice();

    if(userchoice === compchoice){
        drawgame();
    } else {
        let userwin = true;
        if(userchoice === 'rock'){
            userwin = compchoice === 'paper'? false : true;
        }else if(userchoice === 'paper'){
            userwin = compchoice === 'scissor'? false : true;
        }else{
            userwin = compchoice === 'rock' ? false : true;
        }
        showwinner(userwin, userchoice,compchoice);
        }
    }



choose.forEach((one) =>{
    one.addEventListener('click', () =>{
        const userchoice = one.getAttribute('id');
        gameplay(userchoice);
    })
})
    