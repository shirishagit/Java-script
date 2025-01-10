// API STANDS FOR APPILICATION PROGRAMMING INTERFACE 
//HELPS TO GET THE DATA FROM BROWSERS AND USR IN OUR OWN PROJECT 
//API RETURNS THE DATA WITH A PROMISE THAT WE NEET TO STORE IT IN A VARIABLE 


let url = "https://api.agify.io/?name=michael";



let data = async()=>{
    let Promise = await fetch(url); 
    console.log(Promise);
    Promise.json()
};