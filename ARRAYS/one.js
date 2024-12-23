// Arrays


let states = ["Telangana","Andhra Pradesh","kerala","Goa","Meghalaya","Karnataka","Sikkem"];
for(let i=0;i<states.length;i++){
  console.log(states[i])
}                                        //for loop on arrays

let cities =["Hyderabad","Secendrabad","Banjarahills","Ammerpat","Uppal",];

for(let city of cities ){
  console.log(city.toUpperCase());  
}                                       // for of loop


// practice que

let marks =[85,97,44,37,76, 60];
sum=0;

for(let val of marks){
  sum+=val;
}
let avg =sum/marks.length;
console.log(`The Average marks of the class =${avg}`);

// pra 2
let items = [250,645,300,900,50];
let i = 0;
for(let val of items){
   let offer =val/10;
  items[i]=items[i]-offer;
 console.log(`values after offer = ${items[i]}`);
 i++;

}
console.log(items)


// array methods

let fruits =["Apple","Banana","Charry","Papaya","kiwi",];
fruits.push("mango");
fruits.pop()

console.log(fruits.toString());   

