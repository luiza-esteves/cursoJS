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

/* ---------------------------------------------------
 MANIPULANDO VALORES

  - innerText e textContent
InnerText retorna só o texto sem formatação
textContent retorna o texto com formatação e elementos HTML

*/

const p5 = document.querySelector('p');
console.log(p5.textContent);
console.log(p5.innerText);

/* ---------------------------------------------------
  - innerHTML e createElement
innerHTML retorna o texto com formatação e elementos html
createElement cria um elemento html

*/
const div = document.querySelector('div');
console.log(1,div);
div.innerHTML = "<strong> Texto alterado</strong>"
const element1 = document.createElement('ul');
[1,2,3].forEach((element)=>{
    const elementLi = document.createElement('li');
    elementLi.innerText = element;
    element1.appendChild(elementLi)
});
console.log(element1);
div.appendChild(element1);

/* ---------------------------------------------------
  - inputValue
*/
const input = document.querySelector('#name');


setTimeout(()=>{
    input.value="Luíza";
    console.log(input.value);
},1000)

/* ---------------------------------------------------
  - atributos
*/

const teste = document.querySelector('div');
div.setAttribute("id","teste");
div.setAttribute("class",`${div.getAttribute("class")} classe2`);
div.removeAttribute("class");
