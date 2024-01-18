function isomorph(a, b) {
    var letras = new Map();
    if(a.length==b.length){
      for (let i = 0; i < a.length; i++) {
        if(letras.has(a[i])){
          if(letras.get(a[i])!==b[i]){
            return false;
          }
        }else{
          for (var [key, value] of letras) {
            if(value == b[i]){
              return false;
            }
            }
          letras.set(a[i],b[i]);
        }
      }
      return true;
    }
    return false;
}

isomorph("ESTATE", "DUELED")