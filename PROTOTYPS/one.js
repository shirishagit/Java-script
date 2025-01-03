//prototype 

let employee ={
    calcTax(){
        console.log("Tax deducted is 10%")
    }
};

const manisha = {
    salary:2000,
    calcTax(){
        console.log("tax is 5% extra")
    },
};


manisha.__protot__ = employee;