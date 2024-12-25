//reduce function helps to reduce the size og the array output 


const students=[
    {Name:"Shirisha", rollNo:1,age:21},
    {Name:"Snehitha",rollNo:2,age:20},
    {Name:"Arjun",rollNo:3,age:20},
    {Name:"raviteja",rollNo:4,age:20},
];

const output = students.reduce(function(acc,curr){
    if(acc[curr.age]){
      acc[curr.age] = ++ acc[curr.age];
    } else {acc[curr.age]=1;

    }
    return acc;
}, {} )

console.log(output);

// question 2

const marks = [1,2,3,4,5,6];
const num=0;
const sum = marks.reduce((acc,curr)=>
    acc+curr,num
);
console.log(sum);