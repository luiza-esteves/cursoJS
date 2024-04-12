const pedido = (pedido) =>{
    return new Promise((resolve,reject)=>{
        if(pedido=="Pizza"){
            return reject(`Não temos o seu pedido: ${pedido}`);
        }
        setTimeout(()=>{
            resolve(`Chegou o seu pedido [${pedido}]`);
        },5000);
    });
}

const reservarPedido = async ()=>{
    try {
        console.log(await pedido("Arroz"));
        console.log(await pedido("Pizza"));
    } catch (error) {
        console.log("erro:",error);
    }
}
reservarPedido();