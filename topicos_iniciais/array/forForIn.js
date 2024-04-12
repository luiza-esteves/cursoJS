const array = [1,2,3,4,5,6];
const array2 = [1,2,3,4,5,6];

for(let i=0; i<array.length;i++){
    console.log(array[i]);
}

for(let item of array2){
    console.log(item);
}
const obj = {
    nome: "lu",
    sobrenome:"esteves"
};

// melhor para objeto
for(let item in obj){
    console.log(item); 
    //saída: 
    //nome
    //sobrenome
    console.log(obj[item]);
}


