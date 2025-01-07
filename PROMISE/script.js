//PROMISE IS A FUNCTION HAS TWO PARAMETERS THEY ARE RESOLVE AND REJECT WHICH ARE GIVEN BY JS
//RESOLVE WILL FULLFILL THE CODE .THEN BLOCK WILL RUN THE CODE
//REJECT WILL SHOW THE ERROR .CATCH WILL NOT KET RUN THE CODE 

let promise = new Promise((resolve,reject)=>{
     console.log("This is a promise template")
     resolve("SUCCESSFULLY")                       // THIS IS SIMPLE CODE OF RESOLVE
});



let order = new Promise((resolve,reject)=>{
     console.log("This is a function of reject")
     reject("something went wrong")                //THIS IS A SIMPLE REJECT CODE
});



//CALLING RESOLVE FUNCTION BY .THEN IN IT


let newpromise = ()=>{
    return new Promise((resolve,reject)=>{
     setTimeout (()=>{
          console.log("The code will execute after 5s")
          resolve("siri");
     } ,5000)


});
}

let Resolve = newpromise();
Resolve.then((res)=>{
     console.log("successfully",res)
});

