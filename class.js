// class ==> A class is a blueprint of object
// class ==> is a collection of variables and function and objects

 /*class Student {
    homework(){
        console.log(("finished the work"));
        
    }
    play(){
        console.log("after finishing the homework go to play");
        
    }
}

let obj = new Student();
obj.play(); */

/*class programming{
    //static pi = 3.14; 
constructor(){
        console.log("this is an display function");
    }
}
let obj = new programming();


//let obj = new programming();

//console.log(programming.pi);
//programming.display(); */

// ineritence // 
class Grandparent{
    Agriculture() {
        console.log("this is grandparent property -- agri");
        
    }
}
class Parent extends Grandparent{
    propertiess() {
        console.log("this is parent property -- land");
        
    }

}

//let pty = new Parent(); //object creaction:variabletype reference name = new classsname();
// function call : reference name.functionname();
//pty.properties();
//pty.propertiess();

class Child extends Parent{
    Asset(){
        console.log("ths is child property -- bike");
        
    }
}

let ast = new Child();
ast.Asset();
ast.propertiess();
ast.Agriculture();


