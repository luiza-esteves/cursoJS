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
const {link} = Tenis;
console.log(link)
console.log(Tenis.link.b)