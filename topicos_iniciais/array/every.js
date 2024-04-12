//verifica se tem apenas algum dado especifico
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
let temSoRefri = pedidos.every((item)=>{
    return item.bebida=="refrigerante"
})

console.log(temSoRefri);