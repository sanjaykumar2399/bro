//array methods//
var a = ["aswin","sanjay","vijay"];
let b = [2,3,7,9];

//push - add one 0r more value in an array at the end of array a.push(10);//
b.push(10);
a.push("sarathy")
console.log(b);;
console.log(a);

//pop - remove the last element a.pop();
b.pop();
console.log(b);

//unshift - able to add one or more element in an array at first a.unshift(45)//
b.unshift(45);
console.log(b);

//length - it returns the length of the array//
console.log(b.length);

//splice - it is used to add or remove specific element from an array//
//a.splice(1,1,18);
//1- start//
//1-remove count//
//18-insert value//
b.splice(2,0,5);
console.log(b);

b.splice(3,1,8);
console.log(2,0,"sanjay","jai");
console.log(b);

let s = ["yamaha","honda","ninja","hero"];
s.splice(1,3,'rx100');
console.log(s);

let k = ["mango","apple","cherry","apple","kiwi","orange"];
k.splice(2,3,'pine');
console.log(k);
k1 = ["grape","pineapple"];

//concat --> combine one or more array ---> it returns new array//
console.log(fru.concat(k1));

//index of element ---> returns the index of the element --> 1st matching value//
console.log(fru.indexOf("apple"));

// includes ---> check the value is present or not //
console.log(fru.includes("mango"));

//reverse ---> prints in reverse order//
console.log(fru.reverse());

//sort ---> sorts in ascending order //
console.log(fru.sort());
let num = [78,79,4,89,56,42];
console.log(num.sort());

//map --> based on a condition it changes all the value//
//map exmple: --> let c = a.map((e) => e*2);//
let a6 = num.map((b)=>{
    console.log(b);
    return b+1;
});
console.log(a6);

//filter ==> it filter the data from an array//
let num1 = [3,90,78,67,54,23,1,34];
let num2 =num1.filter((b)=>{
    return b>50;
});
console.log(num2);

//reduce ===> reduce the array value into single value//
let num3 = num1.reduce((c,d)=>{
    return c + d; //3-90 = -87//
});
console.log(num3);

//for in ===> it iterates over a key of an object //
let obj1= {
    name:"ram",
    age:30,
    gender:""
};
for(let obj2 in obj1){
    console.log(obj2);  
};

//for of ===> it iterates over a value of a array of string

let arr1 = ["sanjay","arun","mani","moorthy","muhi"];
for(let arr of arr1){
    console.log(arr);
};

//for each ===>
    let array2 =arr1.forEach((value,index,array)=>{
        console.log(value,index,array[2]);
        });
        









