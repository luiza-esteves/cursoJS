
// pega o resultado da primeira promise a ser concluida
const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        return resolve('Promise1')
    },3000)
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        return resolve('Promise2')
    },2000)
})

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        return resolve('Promise3')
    },5000)
})

Promise.race([promise1,promise2,promise3])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})