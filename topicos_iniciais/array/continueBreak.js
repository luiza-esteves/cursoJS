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

//Diferentemente do break, o continue não termina a execução do laço completamente, em vez disso ele:
//Volta à condição, em um laço do tipo while.
//Volta à expressão, atualizando-a, em um laço do tipo for.

for (let item of objArray){
    if(item.nome == "Luiza"){
        console.log("teste");
        continue;
    }
    if(item.nome=="Ana"){
        console.log("achei a ana")
        break;
    }
    console.log(item);//não deve aparecer quando o continue é rodado
}
