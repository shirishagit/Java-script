 //IF YOU WANT TO ACCESS THE ELEMENT BY ITS ID HERE IS THE EXAMPLE
 
let button=document.getElementById("button");   
console.dir(button);



//IF YOU WANT TO ACCESS A GROUP OG ELEMENT WITH SAME FEATURES YOU CAN USE CLASS
let class1 = document.getElementsByClassName("class1");
console.dir(class1);
console.log(class1);


// IF YOU WANT TO ACCESS  ELEMENTS WITH  THE TAG NAME
// YOU CAN GIVE THE TAG NAME AND YOU CAN ACCESS THEM 

let para = document.getElementsByTagName("p");
console.dir(para);


//QUERY SELECTOR

// IF YOU WANT TO ACCESS ALL ELEMENTS IN ONE METHOD YOU CAN USE QUERY SELECTOR
// 1. THIS RETURNS FIRST ELEMENT OF THE ID,CLASS,TAG.
// you neet to use # for id and (.)for class]

let firstElement = document.querySelector(".class1");
console.dir(firstElement);

//IF YOU WANT TO ACCESS ALL ELEMENTS OF ID, CLASS, AND TAGS YOU CAN USE
//2. ALL QUERY SELECTOR IT RETURNS ALL THE TAGS AND CLASSESS AND IDS


let allElements = document.querySelectorAll("label");
console.dir(allElements);

