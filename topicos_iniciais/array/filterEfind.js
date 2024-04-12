//filter filtra todos os itens 
const pedidos = [
    {
        id:1,
        nome:"ana",
        alimento:"pizza",
        bebida:"suco"
    },
    {
        id:2,
        nome:"marcos",
        alimento:"pizza",
        bebida:"refrigerante"
    },
    {
        id:3,
        nome:"julia",
        alimento:"pizza",
        bebida:"refrigerante"
    },
]

const filterRefri = pedidos.filter((element, index)=>{
    return element.bebida == "suco";
})

console.log(filterRefri);

const pedidoRefri = pedidos.find((element)=>{
    return element.bebida=="refrigerante";
})
console.log(pedidoRefri);