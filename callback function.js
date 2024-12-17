//call back function ==> it is a function that is passed as an argument to another function //

function launch(callback){
    setTimeout(() =>{
        console.log("this is an browser launch");
        callback();
    },3000);
}

function datafetch(callback){
    setTimeout(()=> {
        console.log(("the data is fetched"));
        callback();
    },2000);

}
function search(callback){
    setTimeout(()=> {
        console.log("search the product");
        callback();
    },1000);
}

// call back hell concept //
launch(()=>{
    datafetch(()=>{
        search(()=> {
            console.log("this task is completed");
            
        });
    });
});

//callback is a function it will pass an parameter//
// asincorenes to synconores //

//promise //


//call back function ==> it is a function that is passed as an argument to another function //

