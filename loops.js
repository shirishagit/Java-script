// Loops 
// 1. for Loop


for (let i=1;i<=5;i++){
    console.log("i=",i)
}


// calculating the sum of 1 to n numbers

let sum = 0;
let n = 10;
for(let i=1;i<=n;i++){
    sum=sum+i
}
console.log("sum=" ,sum);


// while Loop

let i=1;
while(i<=5){
    console.log('shirisha');
    i++;
}

// for of loop

let str = "Javascript";

for (let i of str ){
    console.log("i =",i);
}

//for in loop :- which gives the keys in return

let student = {
    name:"shirisha",
    age:21,
    cgpa:9.3,
    ispass:true,
};
for(let key in student){
console.log(key);
}

//loops practice questions
//1qs

for(let num=0;num<=100;num++){
    if(num%2 ===0){
        console.log(num)
    };
   }


   //2qs
   let gameNum=30;
   let userNum = prompt("Guess the number");

   while(userNum !=gameNum){
    userNum = prompt("you entred the wrong number guess agagin :");
   }
   console.log("congrats you won the game ")

   //strings
   let obj = {
    item : "pen",
    price: 10,
   };


let output = `The cost of ${obj.item} is ${obj.price} rupess`;
console.log(output)  // template literals