const objArray = [
    {
        nome:"Luiza",
    },
    {
        nome:"Ana"
    },
    {
        nome:"Bento"
    },
];

objArray.forEach(element,index => {
    console.log(element.nome)
    console.log(index);
});