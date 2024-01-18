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
        bebida:"suco"
    },
]

pedidos.map((element, index)=>{
    console.log(index,element)
    if(element.id==2){
        return (element.alimento = "pastel")
    }
})
console.log(pedidos)
