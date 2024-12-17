// function //
// control statement ---> it controls the execution of a program
// Conditional statement
// it executes a program based on some condition

// if ---> it execute  statement when the condition gets true
//else ---> it execute a flase block of statement
// syntax
// if (condition)
// code to be executed when the condition is true
//}
// else{
// code to be executed when the condition is false
// code to be executed
//}
let b = 5;
let c = 10;

let a = 10;
if(a == 15){
    console.log(a);
    
}
else{
    console.log('a is not equal to 15');
}
// else if ---> it executes when the before block gets false
// synatx

//if (condition){
// code to be executed
//}
//else/code to be executed
//}
letb = 5;
letc = 10;
if(b == c){
    console.log('b and c are equal');
}
else if (b>c){
    console.log('b is greater');
}
else if (c>b){
    console.log(
        'c is greater'
 );
    
}
else{
    console.log('enter valid input');
    
}

//switch
//syntax
//switch (expresion){
//case 1;
//{statement}
//break;
// case 3;
//statement
//}
//break
//deafult
//{
// statement
//}
//}
let day = 4;
switch(day) { 
    case 1 :{
        console.log('sunday');
        
    }
    break;
    case 2 : {
        console.log('monday');
        
    }
    break;
    case 3 : { 
        console.log(tuesday);
        
    }
    break;
    case 4 :{
        console.log(wednesday);
        
    }
    break;
    case 5 :{
        console.log(thursday);
        
    }
    break;
    case 6 :{
        console.log(friday);
        
    }
    break;
    case 7 :{
    console.log(saturday);
        
    }
    break;
    default:
        {
            console.log('there is only 7 days in a week');
            
        }
    }
   let num = 18
   if(num%2 == 0){
       console.log('even number');
    
   }
   else{
    console.log('odd number');
    
   }
   // looping statement ===> it execute a block of a number of times
   //for ===> we know the number iterations to be performed

   //syntax
   //for(initail,condition,iterate){
   // code to be executed
   //}

   for(let num1 =1;num1<=10;num1++){
    console.log(num1);
    }
  // while ==> we dont known the number of iterations to be performed but iterates untill the
  //entry level loop
  //syntax

  //initial
  //while(condition){
  //code to be 
  //iteration
  //}
    
  let num2 = 1;
  while(num2 < 16){
    console.log(num2);
    num2++;
    
  }
  //do while ===> exit level loop,it executes a program atleast once even the condition gets false
  //syntax
  //intial
  //do
  //code to be execute
  //}while (condition)
  let num3 = 0;
  do{
    console.log(num3);
    num3++;
    
  }while(num3<=20)

    // jump statement ==> these alter the normal flow of program by jumping to the another part
    // break===> it breaks the program and exit
    for(let i = 1;i<=50;i++){
        if(i == 26){
            break;
        }
        console.log();
        
    }
    // contiue===>skips the current iteration and moves to the next one
    for(let v=0;v <=10;v++){
        if(v == 6){
            continue;
        }
        console.log(v);
        
    }

 /*function addition(){
    let a=10;
    let b=15;
    console.log(a+b);
};
 addition();

function subraction(){
    let a=10;
    let b=20;
    console.log(a-b);   
};
subraction();

function multiple(){
    let a=5;
    let b=5;
    console.log(a*b);      
};
multiple();

function division(){
    let a=20;
    let b=10;
    console.log(a/b);
};
division();

function module(){
    let a=25;
    let b=20;
    console.log(a%b);
    
};
module();

function exponent(){
    let a=5;
    console.log();
};
exponent();

function increment(){
    let a=20;
    console.log();    
};
increment();

    
function add() {
    let a = 5;
    let b = 10;
    return a+b;  
}
console.log(add());

let a = 8
let b = add();
console.log(a+b);


//return with parameter//

function some(c,d){
    return c-d;
};
console.log(some(4,2));


/*(function(x){
    console.log(x);
    
})
('sanjay');


var d=()=>{
    console.log("hello world");
    
   }
   d();*/
