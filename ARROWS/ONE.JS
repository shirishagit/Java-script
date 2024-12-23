// ARROWS FUNCTION
// arrow function can be saved in a variable


const sum=(a,b)=>{
    console.log(a+b);
}
sum (50,60);              //110

const mul=(x,y)=>{
    console.log(x*y);
}
mul(3,5);                 //15



//practice Question 

function countVowels(str){
    let count=0;
    for (const char of str){
      if(char ==="a"||char==="e"||char==="i"||char==="o"||char ==="u");
      {
        count++;
    }
    }
   
      
    console.log(count);
}
countVowels("shirisha");

//2 prac que


const countVow=(str)=>{
    let count=0;
    for (const char of str){
      if(char ==="a"||char==="e"||char==="i"||char==="o"||char ==="u");
      {
        count++;
    }
    }
   
      
    console.log(count);

}
countVow("shirisha");

//practice question

let calc = [10,15,20,25,30];
calc.forEach((num)=>{
    console.log(num*num)
})                              // calculating the square of each num by using callback function



