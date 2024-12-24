// CALL BACK FUNCTION
//CALL BACK FUNCTIONS ARE THE FUNCTION WHICH USE ANOTHER FUNCTION AS THERE PARAMETERS OR ARUGUMENT


function print(){
    console.log("This is a call back function");
    
}
print();

function print1(){
    console.log("Here is an another input");
    
}
print1(print);

