const bugNum = ()=>{
    try{
        const num="234";
        if (num===234){
            return "seu numero é 234";
        }
        throw new Error("Não é um number");
    }catch(error){
        //throw new Error(error); -- esse para de executar o programa
        return error;
    }
}

console.log(bugNum());
console.log("Continua executando");