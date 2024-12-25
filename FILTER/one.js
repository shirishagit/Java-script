// FILTER IS USED TO FILER A PART OF A GIVEN A ARRAY


const items=[1,2,3,4,5,6,7,8,9,10];


function isOdd(x){
    return x%2 !==0;

}
const output = items.filter(isOdd);
console.log(output);                          // FILTER FUNCTION TO PRINT ODD NUMBERS IN NORMAL FUNCTON METHOS



const print = items.filter((x)=> x %2 ===0);
console.log(print);                      // FILTER FUNCTION TO PRINT EVEN NUMBER IN CALL BACK FUNCTION ALSO IN ARROW FUNCTION