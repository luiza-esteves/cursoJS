function isTriangle(a,b,c)
{
  let s = (a +b+c)/2;
  let soma = Math.sqrt(s*(s-a)*(s-b)*(s-c));

  if(a<=0 | b <=0 | c<=0){
    return false;
  }else if((b - c) > a | a > (b + c) | (a - c)  > b | b >(a + c)| (a - b)  > c | c> (a+b)){
    return false;
  }else if(soma<=0){
    return false;
  }
  return true;
}
console.log(isTriangle(7,3,10));