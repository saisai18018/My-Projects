// let h1 = document.querySelector('.one');
// let btn = document.querySelector('#btn');
// h1.innerText = 'NEW JAVA SCRIPT'
// h1.style.color = 'blue'
// btn.addEventListener('click',() =>{
//     h1.innerText = 'I have fooled you'
//     btn.style.color = 'red'
//     btn.style.backgroundColor = 'green'
// } )

// let h1 = document.querySelector('.heading');
// let btn = document.querySelector('#btn');
// let image = document.querySelector('#one');

// btn.addEventListener('click',() =>{
// h1.innerText = 'HELLO ROHIT!';
// btn.style.backgroundColor = 'blue';
// btn.style.color = 'white';
// image.src='https://tse3.mm.bing.net/th/id/OIP.7FrKwjfirC933Li08mghyQHaMA?rs=1&pid=ImgDetMain';
// })

//counter game 

let btn = document.querySelector('#btn');
let btn1 = document.querySelector('#btn1');
let btn2= document.querySelector('#btn2');
let countervalue = document.querySelector('#value')

btn2.addEventListener('click', ()=>{
  let previousvalue = countervalue.textContent;
  let updatedvalue = parseInt(previousvalue)+1;
  countervalue.textContent = updatedvalue;
  if(updatedvalue > 0){
    countervalue.style.color =  'green';
  }else if (updatedvalue<0){
    countervalue.style.color = 'red';
  }else{
    countervalue.style.color = 'black';
  }
})
btn.addEventListener('click', ()=>{
  let previousvalue = countervalue.textContent;
  let updatedvalue = parseInt(previousvalue) - 1;
  countervalue.textContent = updatedvalue;
  if(updatedvalue > 0){
    countervalue.style.color =  'green';
  }else if (updatedvalue<0){
    countervalue.style.color = 'red';
  }else{
    countervalue.style.color = 'black';
  }
})
btn1.addEventListener('click', ()=>{
  let value = 0;
  countervalue.textContent = value;
  countervalue.style.color = 'black';
})


//sign form

// let uservalue= document.querySelector('#uservalue');
// let btn=document.querySelector('#btn');
// let signin=document.querySelector('#signin');
// btn.addEventListener('click',()=>{
//   let user = uservalue.value;
//   signin.textContent = 'Hi '  + user + ', verifying your account';

// })

//guess game


// let btn = document.querySelector('#btn1');
// let gameResult = document.querySelector('#gameResult');
// let userInput = document.querySelector('#userInput');

// let randomnumber = Math.ceil(Math.random()*100);
// btn.addEventListener('click', ()=>{
//   let guessnum = userInput.value;
//   if(guessnum > randomnumber){
//     gameResult.textContent = 'Too High, try again!';
//   }else if(guessnum < randomnumber){
//     gameResult.textContent = 'Too Low, try again!';
//   }else if(guessnum = randomnumber){
//     gameResult.textContent = 'Congrats, You won!';
//   }else{
//     gameResult.textContent = 'Enter a valid input!';
//   }

// });