let Tenis={
    tam:2,
    estoque:true,
    link: {
        a:"a",
        b: {
            c:"c"
        }
    }
};
Tenis.tam=3; //alterando dado
Tenis.preco=22; // adicionando novo atributo
Tenis["cadarco"]=true; // outra forma de criar

delete Tenis.estoque; //deletando atributo
