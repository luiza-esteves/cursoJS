let Tenis={
    tam:2,
    estoque:true,

};
let link= { link:{
    a:"a",
    b: {
        c:"c"
    }
}
}

let clone1 = Tenis;
console.log(clone1);

let mesclar1 = Object.assign(Tenis,link);
console.log(mesclar1);

let mesclar2 = { ...Tenis, ...link}; //pega tudo de um e do outro e junta
console.log(mesclar2);

//mesclagem rasa - altera valores originais mesmo que não esteja alterando diretamente

// -------------------------------------------------
//mesclagem profunda
let clone3 = JSON.stringify(Tenis); //transforma em string
clone3 = JSON.parse(clone3);
clone3.estoque=false;
console.log(clone3);