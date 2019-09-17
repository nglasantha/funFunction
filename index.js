//1 Write a function that takes a argument and return that argument
function identity(x) {
    return x;
}

//2 Write two binary functions, add and mul, that take taks two numbers and return their sum and product 
function add(x, y) {
    return x + y;
}


function mul(x, y) {
    return x * y;
}

// 3.Write a function that takes an argument and returns a function that returns that argument 
function identifyf(x) {
    return function () {
        return x;
    }
}

//4 Write a function that adds from two invocation
function addf(x) {
    return function (y) {
        return x + y;
    }
}

// 5 Write a function that takes a binary function and makes it callable with two invocations
/* 
addf = applyf(add)
 addf(3)(4) // 7
 applyf(mult)(5)(6) // 40*/
function applyf(binaryf) {
    return function (x) {
        return function (y) {
            return binaryf(x, y);
        }
    }
}

//6 write a function that takes a 
//function and an argument and returns a function that can supply a second argument

function curry(func, x) {
    return function (y) {
        return func(x, y);
    }
}

//7.   Without writing any new function show 3 ways to write the following inc function

//inc(7) // 8
//inc(inc(8)) // 10

var inc_1 = addf(1);
var inc_2 = curry(add, 1);
var inc_3 = applyf(add)(1);

//8  Write methodize, a function that converts a binary function to a method.   

function methodize(func) {
    return function (x) {
        return func(this, x);
    }
}

Number.prototype.add = methodize(add);


/*
 * 9 Write demethodize, a function that converts a method into a 
 * binary function.
**/
function demethodize(func) {
    return function (x, y) {
        return func.call(x, y);
    };
}

//10 Write a 
//function called "twice" that takes a binary function that passes its argument to the unary function twice.

function twice(func) {
    return function (x) {
        return func(x, x);
    }
}

// Write composeu that takes two unary functions and returns a unary function that calls them both
//composeu(double, square)(3) // 36

function composeu(func1, func2) {
    return function (x) {
        return func2(func1(x));
    }
}

//Write a function that takes two binary functions and returns a function that calls them both
//composeb(add, mult)(3,2,5) // 25

function composeb(func1, func2) {
    return function (x, y, z) {
        return func2(z, func1(x, y))
    }
}

//Write a function that only allows another function to be called once
//add_once(3,4) // 7
//add_once(3,4) // throw

function once(func) {
    return function () {
        var myFunc = func;
        func = null;
        return myFunc.apply(this, arguments);
    }
}

// Write a factory function that returns two functions that implement an up/down counter

function counterf(a){
    return {
      inc: function(){ 
              a += 1;
              return a; 
            },
      dec: function(){
              a -= 1;
              return a; 
            }
     }
  }


  function loop(){
      for(var i = 0; i < 10 ; i ++){
          setTimeout(function(){
            console.log(i, new Date());
          },1000);
      }
  }

    
  function loop2(){
    for(var i = 0; i < 10 ; i ++){
        (function a(i){
            setTimeout(function(){
                console.log(i, new Date());
              },1000);
        })(i)
    }
}