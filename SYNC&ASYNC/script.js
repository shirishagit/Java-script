//SYNC MEANS THE CODE RUNS IN A PATICULAR ORDER HOW IT IS WRITEN
//IT WAITS FOR THE PREVIOUS CODE TO EXECUTE 

function sum(a,b){
    console.log(a+b);
}
sum(3,4);
sum(8,10);
sum(4,8);       //THE CODE WAITS FOR THE PREVIOUS CODE TO EXECUTE AND THEN IT EXECUTES



// ASYNCCHRONOUS DOES NOT WAIT FOR THE PREVIOUS CODE TO GET EXECUTED IF IT TAKES TIME 
// THE TIMETAKING CODE GETS EXECUTED AFTER ITS TIME 
console.log("Ready");
console.log("Stady");

let one = ()=>{
    console.log("This code gets exectued after 5sec");
}                 
setTimeout(one,2000);         //THIS CODE EXECUTS AFTER 5S AND AT THE LAST

console.log("Go ");
console.log("And");
   
// IF YOU WANT TO SET TIME FOR THE CODE TO EXECUTE ONE AFTER THE OTHER 

function getData(Datatype,nextdata){
    setTimeout(()=>{
        console.log("datatype",Datatype);
        if(nextdata){
            nextdata()
        }
    } ,3000);
       
}

getData(1,()=>{
    getData(2,()=>{
        getData(3)
    })
});               //THIS TYPE OF CODE IS CALL CALLBACK HELL