const student ={
    fullName:"shirisha",
    age:21,
    gpa:9.3,
    isPass : true,
};
console.log(student)


const product = {
    title:"ballpen",
    rating:4,
    offer:5,
    price:270,
};
console.log(product)


const userid ={
    username:"@ninesai",
    isfollow:true,
    followers:12,
    following:10,
    
};
console.log(typeof userid["username"])


// //Arthimetic operations
let a = 5;
let b = 2;
console. log("a = ", a ," & b = ",b);
console.log("a + b =",a + b); //7
console.log("a - b =",a - b); //3
console.log("a * b =",a * b);//10
console.log("a / b =",a / b); //2.5
console.log("a % b =",a % b); //remainder 1
console.log("a ** b =",a ** b); // 25 a to the power of b

// //unary operators 
//increment 
let c = 5;
let d = 2;

console.log("c =" , c, " & d =", d);
console.log("c++ = ",c++);
console.log(c)//6

//decrement
console.log("--d = ",--d,)//1
console.log("d-- =",d--)
console.log(d--)//1

//compasion operators

let a = 5
let b = 2
console.log("a==b" , a==b) // false

console.log("a!=b" , a!=b) // true
console.log("a === b" , a === b) // false (strict version)
console.log("a !== b" , a!==b)  //true 
console.log("5 > 2" , a > b) //true 
console.log("5 < 2" , a < b) // false
console.log("5 >= 2" , a >=b) // true
console.log("5 <= 2" , a <=b) // false

//logical operators
let a = 6;
let b = 5;

let cond1 = a > b; // true
let cond2 = a === b; // False
console.log("cond1 && cond2 =" , cond1 && cond2 ) //false
console.log("cond1 || cond2 =" , cond1 || cond2 )  // true
console. log("!(a>b",!(a>b) )// false


// conditional statements

let age = 21; //if statement
 
if (age > 18){
    console.log("eligible to vote")
} // if condition is true or correct then we can print the statement


let num = 7; // if eles ststement

if (num%2 === 0){
 console.log(num,"is even")
} else {
console.log(num, "is odd")

};// is one condition is correct it gives the if statement and if is not matching then it
// gives the else sttatement

let mode = "dark";
let color ;

if (mode === "dark"){
    color = "black";
} else if (mode === "white") 
{
    color = "white";
} else if(mode === "pink") 
{
color = "pink"
} else (mode === "blue") 
{
    color = "blue";
};
console.log(color) // it checks all the statements and gives the answer which is correct


alert("welcome!") // one time pop up

let num = prompt("Enter a number:");

if(num %3 === 0){
    console.log( "multiple of 3");
}else{
    console.log(" is not multiple of 3");
}

//home work problem

let score =33;
let gread;
if(score >=90 && score <=100){
    gread="A";
}else if(score >= 70 && score <= 89)
{
    gread="B";
}else if(score >= 50 && score <= 69)
{
    gread="C";
}else if(score >= 0 && score <= 49)
{
    gread="C";
};
console.log("according to your score , your score was",gread)