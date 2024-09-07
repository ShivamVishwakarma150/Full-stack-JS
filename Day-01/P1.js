function sum(num1, num2, functionToCall){

    functionToCall(num1,num2);
}

function displayResult(data){
    console.log("Result of sum is : "+data);
}

function displayPassiveResult(data){
    console.log("Sum's Result is : "+data);
}

sum(10,20,displayPassiveResult);

