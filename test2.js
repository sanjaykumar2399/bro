/*let num = 15

if (num %2 ==0){
    console.log("even");
    
}
else  {
    console.log("odd");
    
}*/

//objects //

let obj = {
    name:'vijay',
    age: 36,
    gender:'male'
};
console.log(obj);
console.log(obj.age); // accessing a single value in a object

obj.mobile_no = 995226189; // inserting a value to a object
obj.name = 'Ram'; // updating a value from a object
delete obj.gender; //delete a value from a object
console.log(obj);


let employes = {
    name :['arun','vijay'],
    age :[26,32 ],
    id :[1,2]
}
console.log(employes);
console.log('name',employes.name[0],'age',employes.age[0],'id',employes.id[0]);

// this 
let person={
    name:'siva',
    age:25,
    role:'developer',
    sayhello : function (){
        console.log('hello boss',this.name);
        
    }
};
person .sayhello();


function sanjay(){
    console.log("vanakam da mapala");
    
}
sanjay();

function iphone(){
    console.log("this is i phone");
    
}
iphone();

function samsung(){
    console.log("this is samsung");
    
}
samsung();
function redmi(){
    console.log("this is redmi");
    
}
redmi();

function add(){
    var a = 10
    var b = 20
    console.log(a+b);

}
add(); 

// Functions //

var favactor = "kamal"
var favplayer = "dhoni"
var movie = "anbesivam"
function favourite (){

console.log("favourite actor:"+"kamal");

console.log("favplayer:"+"dhoni");

console.log("favmovie:"+"anbesivam");
}
favourite();

function area(l,b){
    var a=l*b
    console.log("area is:"+a);
}
var length = 10
var bredth = 20

area(10,20);

//array methods //
var a = ["sanjay","arun"];
let b = [2,3,7,9];
b.push(10);
console.log(b);

a.push("kabilian");
console.log(a);

