//roda de acordo com os intervalos que é configurado
const timer = setInterval(()=>{
    console.log("timer iniciado");
},1000)
console.log("continua rodando");

setTimeout(()=>{
    clearInterval(timer);
},4000)