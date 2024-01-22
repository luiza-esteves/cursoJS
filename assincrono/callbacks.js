/*
programação assíncrona
continua executando o código enquanto outras operações
estão sendo executadas. Quando a operação finalizam o callback
é chamado para lidar com o resultado
*/

setInterval(()=>{
    returnConsole();
},3000);

const returnConsole = ()=>{
    return console.log("meu console funcionou");
}

const meuCallback = (func)=>{
    console.log(func())
};

meuCallback(()=>{
    return 1+1;
});