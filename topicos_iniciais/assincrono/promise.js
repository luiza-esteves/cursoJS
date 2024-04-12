/*
são objetps que representam a conclusão ou falha de uma tarefa assíncrona
elas fornecem uma sintaxe mais limpa e estruturada do código assíncrono
permite encadear chamadas e tratar erros eficientemente
*/

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
//o then aguarda a resposta enviada do resolve
pedido("Pizza").then((resPedido)=>{
    console.log(resPedido);
}).catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Processo executado corretamente")
});