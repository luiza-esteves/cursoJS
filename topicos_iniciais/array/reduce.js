//junta os dados
const pedidos = [
    {
        id:1,
        nome:"ana",
        alimento:"pizza",
        bebida:"suco",
        preco:10,
    },
    {
        id:2,
        nome:"marcos",
        alimento:"pizza",
        bebida:"refrigerante",
        preco:14,
    },
    {
        id:3,
        nome:"julia",
        alimento:"pizza",
        bebida:"refrigerante",
        preco:18,
    },
]

const somaValor = pedidos.reduce((total,element)=>{
    return total + element.preco;
},0)//o zero é o valor que o total inicia

console.log(somaValor);