/*
quando deseja guardar a conclusão de todas as Promises, mesmo que tenham dado erros,
além de todas serem executadas caso haja alguma rejeitada
*/

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

Promise.allSettled([promise1,promise2,promise3]).then((resAllSettled)=>{
    console.log(resAllSettled);
    resAllSettled.forEach(item=>{
        if(item.status == 'fulfilled'){
            console.log(item.value);
        }else{
            console.log(item.reason)
        }
    })
})