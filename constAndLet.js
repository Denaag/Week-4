//Once outside the let block, the var variable will stand as the value.
var x = 10;

{
    let x = 2; //let allows for variable to be assigned 2 within this block only.
}

const pi = 3.14159;

console.log(pi);

// will get an error - not supposed to be changed.
//pi = 6;

//once the new pi is logged it will not log it because const prevents it from being changed.
//console.log(pi);