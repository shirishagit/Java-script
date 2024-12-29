 //IF YOU WANT TO ACCESS THE ELEMENT BY ITS ID HERE IS THE EXAMPLE
 
let button = document.getElementById("button");   
console.dir(button);



//IF YOU WANT TO ACCESS A GROUP OG ELEMENT WITH SAME FEATURES YOU CAN USE CLASSNAME
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


//practice 

let h4= document.querySelector("h4");
console.dir(h4.innerText);
h4.innerText = h4.innerText +` in todays class`


let divs = document.querySelectorAll(".box");

let idx=1;
for(let div of divs){
    div.innerText = `new value ${idx}`
    idx++
}
console.dir(divs);


//YOU CAN ALSO ASSCESS THE ATTERIBUTES IN THE HTML
// TO ACCESS THE ATTREBUTER

let apara = document.querySelector("p")
console.log(apara.getAttribute("class"));


//YOU CAN ALSO CHANGE THE VALUE OF THE ATTRIBUTE

let change = document.querySelector("p");
console.log(change);
let one = change.setAttribute("class","newone");
console.log(one);

// IF THE NODE ID EMPTY YOU CAN FIRST ACCESS THE ELEMENT AND GIVE THE AN ATTRIBUT 
// AND THEN YOU CAN ACCESS THE ATTREBUTE

let div = document.querySelector("div");
console.log(div);

let val = div.setAttribute("id","new");
console.log(val);

let my = div.getAttribute("id");
 console.log(my);

 //IF YOU WANT TO CHANGE THE STYLE OF THE ELEMENT 
 //HERE WE DID NOT GAVE ID TO THE ELEMENT IN HTME BUT WE GAVE IT IN JAVASCRIPT SO BY
// USING JAVASCRIPT ID WE CAN STYLE IT 

 let box = document.querySelector("div");
 div.style.color ="red";
 div.style.background ="lightpink"
 div.style.fontStyle = "italic"
 div.style.fontSize = "22px"


 //IF YOU WANT TO INSERT AN ELEMENT IN THE HTML

let newBtn = document.createElement("button");
console.log(newBtn);
newBtn.innerText=`click it`;

let firstDiv = document.querySelector("div");
div.append(newBtn);                               // adds element inside the node at end


let newhead = document.createElement("h4");
console.log(newhead);
newhead.innerText=`rupess`;

let heading = document.querySelector("div");
div.prepend(newhead);                               // adds the element inside the node at starting
                                             // IF YOU USE AFTER AND BEFORE METHODS SAME AS APPEND AND PERPEND
                                             // THE ELEMENT IS ADDED AFTER THE NODE OUTSIDE IS AFTER
                                             // THE ELEMENT IS ADDED BEFORE THE NODE OUTSIDE IS BEFORE


// IF YOU WANT TO DELETE ANY NODE YOU CAN USE THIS METHOD

// let deleteEle = document.querySelector("h1");
// heading.remove();                             // 

