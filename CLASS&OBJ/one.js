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

// GETTERS AND SETTERS

class mobils {
    constructor(brand,ram){
        this.brand = brand;
        // this.price =price;
        this.ram = ram
    }
   
    priceSet(p){
     if(p <= 0){
        console.log("This mobile does not come under this prise")
     }else{
        this.price = p;   //set 
     }
     
     }
    get  getbrand(){
        return  "Your mobilr is " + this.brand
     }                        //get 
    
}

let myMobile = new mobils("Apple","6gb");
console.log(myMobile);


//INHERITANCE

class father {
    constructor(){
        this.knowas =  "hardworker"
    }
    work(){
        console.log("working as a driver");
    }
}

class son extends father{
    constructor(role){
        super();         //first we need to use super() keyword to invock the parent constructor
        this.role = role
    }
    work(){
        console.log("works as a doctor");
    }
}

let shirisha = new son("doctor");
console.log(shirisha);

//practice question

class user{
    constructor(name,email){
        this.name=name;
        this.email=email;

    }
  viewdata(){
    console.log("This data cannot be accessed by everyone");
  }
}
class admin extends user{
    constructor(name,email){
        super(name,email)

    }
    accessdata(){
        console.log("This data is accessed by Admin")
    }
}


let vishu = new user("vishu","vishu@gmail.com");
console.log(vishu);
let admin1 = new admin("chandana","admin123@gamil.com")       



