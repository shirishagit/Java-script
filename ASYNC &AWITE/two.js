//ACYNC AND AWAITE ARE USED TO WRITE A CODE IN SIMPLY MANNER 
//THEY ARE BETTER WAY OF WRITING PROMISE CHAINS IS THROUGH ASYNC & AWAIT


let stock =() =>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("value of todays stock ")
        resolve(200)
    },3000);
  });
};


async function todayStock() {
    await stock(1,)
    await  stock(2,)
    await  stock(3,)
    await  stock(4,)
};
todayStock();