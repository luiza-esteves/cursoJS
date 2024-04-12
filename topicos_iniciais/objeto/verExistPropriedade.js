const Tenis={
    tam:2,
    estoque:true,
    link: {
        a:"a",
        b: {
            c:"c"
        }
    }
};
console.log(Tenis.hasOwnProperty("tam"));
console.log("tam" in Tenis);