letname = "sanjay";

let age = 25;

console.log = (name);
console.log = (age);

let ispresent = false;
console.log(ispresent);
console.log(typeof ispresent);

let employee = "aswin"; 
console.log(employee); // Logs "aswin"
console.log(typeof employee); // Logs "string"

let id = 56;
console.log(id); // Logs 56
console.log(typeof id); // Logs "number"

let isPresent = false;
console.log(isPresent); // Logs false
console.log(typeof isPresent); // Logs "boolean"

let salary = null;
console.log(salary); // Logs null
console.log(typeof salary); // Logs "object" (this is a known JavaScript quirk)

let x;
console.log(x); // Logs undefined (since x is declared but not assigned)

let obj = {employee: "kalai", id: 56}; 
console.log(obj); // Logs the object { employee: "kalai", id: 56 }

let id_4 = [23, 34, 56, 78]; 
console.log(id_4); // Logs the array [23, 34, 56, 78]

let obj2 = {employee: "kalai", id: 56}; 
console.log(obj2); // Logs the object { employee: "kalai", id: 56 }

var str = "today climate is and its rainy";
console.log(str.index );  //  index or position count 0,1,2,3,4,5.  
console.log(str.length);  // Length count  1,2,3,4,5.
console.log(str.toUppercase ()); // converts all characters in the string to upper case //
console.log(str.toLowercase ()); // converts all characters in the string to lower  case //
console.log(str.charAt(6)); // Return the character at a special index //
console.log(str.indexof ("z"));  // Return the first index of the specified value of 1 is not found // 
console.log(str.lastindexof ("a"));
console.log(str.slice(6,22));
console.log(str.slice (-5))

// strings method //
// slice  ---> it exctracts the part of the string as a new string //

let a = "java script";
let c = a.slice(-6);
console.log(c);
// substring  ---> it acts like a slice but the value < 0 is treated as 0
let b = a.substring(-9,4)
console.log(b);

//replace ---> it replace a specified value to another value in a string (first match only)
let course = "java is very easy to learn and java is more comfortable";
console.log(course.replace ("java","javascript"));
// split ---> splits a string into array of substring based on delimeter
console.log(course.split(""));
//repeat---> it gives the copy of a string ,
let furit = "apple";

console.log(furit.repeat(5));

//startswith ---> it checks the string is starts with the specified value

console.log(fruit.startsWith ('s'));
//endwith ---> it checks the string is ended with specified value
console.log(fruit.endswith('e'));

//includes --->checks if the string contains a specified value
console.log(fruit.incluudes('p'));

//concat ---> adds two or more striung
let firstname = "ajay";
let lastname = "kumar";
let intial = ' s'
letfullname = firstName.concat(' ',lastname, initial);
console.log(fullname);


//match---> searches the specified value in a string , if it is then gives the information abouut the

console.log(lastName.match('m'));

//search---> searches the specified value in a string if it is, then it return the index of the string
console.log(lastname.search('a'));


