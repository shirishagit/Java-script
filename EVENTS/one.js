let btn = document.getElementById("btn");
btn.addEventListener("click",() => {
    console.log("button was clicked")
});

btn.addEventListener("click",() => {
    console.log("button was clicked 2")
});

const removeEle = () => {
    console.log("button was clicked 3")      
}
btn.addEventListener("click",removeEle);

btn.addEventListener("click",() => {
    console.log("button was clicked 4")     //HERE EVENT HANDLER CAN PRINT DIFFERENT SENTENCE TO ONE BUTTON
});



// TO REMOVER ONE FUNCTION
//FIRST YOU NEED TO SAVE IT IN A VARIABE AND PASS THE VARIABLE INTHA FUNCTION PLACE

btn.removeEventListener("click",removeEle)

//PRACTICE QUESTION  : TOGGLE THE BUTTON TO LIGHT AND DARK


let Btn1 = document.querySelector("#newBtn");
 let body = document.querySelector("body")
 let mode = "light"

Btn1.addEventListener("click",()=>{
    if(mode === "light"){
       mode = "dark";
       body.style.backgroundColor= "black"

    }else{ mode = "light";
       body.style.backgroundColor="white"
    }
 console.log(mode)
});



