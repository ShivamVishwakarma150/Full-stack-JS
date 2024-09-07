function calculateArithmetic(a, b, arithmeticFunction) {
    const ans = arithmeticFunction(a,b)
    return ans;
}

function sum(a,b){
    return a+b;
}

const value = calculateArithmetic(1,2,sum);
console.log(value);

/*
In the provided JavaScript code, we're using a technique called "higher-order functions" or "function as an argument". This is a powerful concept in functional programming where a function can take another function as an argument, just like it would take a variable or a value.

In this specific example, the calculateArithmetic function takes three arguments:

a: a number
b: a number
arithmeticFunction: a function that performs an arithmetic operation
The arithmeticFunction argument is a function that takes two numbers as arguments and returns a result. In this case, we're passing the sum function as the arithmeticFunction argument.

In JavaScript, when we pass a function as an argument to another function, we're essentially passing a reference to that function. This allows the receiving function (calculateArithmetic) to call the passed function (sum) with the provided arguments (a and b).

The arithmeticFunction parameter in the calculateArithmetic function is often referred to as a "callback function" or simply a "callback". This is because the receiving function will "call back" the passed function with the provided arguments.

In JavaScript, we can name the function parameter anything we like, but common naming conventions for callback functions include:

callback
cb
fn
func
handler
In this example, we've named it arithmeticFunction to clearly indicate its purpose.

By using functions as arguments, we can create more modular, flexible, and reusable code. This technique is widely used in JavaScript and other programming languages that support functional programming concepts.

*/