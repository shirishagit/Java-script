//PROTOTYPES

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




//CLASSESS

class companies{
    constructor(Name,ceo,year,field){
      this.Name = Name;
      this.ceo = ceo;
      this.year = year;
      this.field = field;
    }
    changefield(cattegery){
        this.field = cattegery
    }
};


let Company1 = new companies("google","sundar pachai","1980","Product");
Company1.changefield("service");  // IF YOU WANT TO MAKE ANY CHANGE IN THE ABOVE METHODS  
console.log(Company1);