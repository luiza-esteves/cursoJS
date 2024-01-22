//executa uma vez depois do tempo indicado

const timer = setTimeout(()=>{
    console.log("timer iniciado");
},10000);

console.log("execução continuando");
//limpa o timer e para de executá-lo
clearTimeout(timer);
