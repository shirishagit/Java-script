// MAP IS USED TO TRANSFORM THE AND TO GET A NEW ARRAY
// WE CAN SAVE THE OUTPUT IN A NEW VAREABLE


const marks=[85,95,75,40,88,99,68];


function printdiv(x){
    console.log(x/2);
}
const output=marks.map(printdiv);

console.log(output);                 //STEP-1 TO WRITE MAP FUNCTION


const val=marks.map((x)=>x+2);
console.log(val);                    // SEPT 2 TO WRITE MAP FUNCTION OR HIGHER ORDER FUNCTION OR CALL BACK FUNCTION





