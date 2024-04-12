
function disemvowel(str) {
    let vogais = "aeiouAEIOU";
    let vogal;

    for(let x=0;x<vogais.length;x++){
        vogal=vogais.charAt(x);
        while(str.indexOf(vogal)!=-1){
            str = str.replace(vogal,"");
        }
        
    }
    
    return str;
}
console.log(disemvowel("This website is for losers LOL!"))