"use strict";

//selecionar elementos com query selector
//query selector pega apenas o primeiro encontrado
const h1 = document.querySelector('h1'); // TAG HTML

const classP = document.querySelector(".paragrafo"); //pega uma classe 
const idP = document.querySelector('#paragrafo');
const strongDentroP = document.querySelector(".paragrafo strong");


let timer = 0;
const title = document.querySelector('title');

setInterval(()=>{
    title.innerText = timer;
    timer++;
},1000);

//------------------------------------
//selecionar todos

const todosP = document.querySelectorAll('p')
console.log(todosP);

todosP.forEach((element,index)=>{
    console.log(element)
    if(index ==0){
        element.style.background = "blue";
    }
})

//----------------------------------------
//pegar elemento pelo id

const paragrafo = document.getElementById('paragrafo');
const classname= document.getElementsByClassName('paragrafo')
for (let element of classname){
    console.log(element);
}

const tag= document.getElementsByTagName('p')