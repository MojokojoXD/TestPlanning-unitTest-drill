function returnsTwo(){
    return 2;
}

function greeting(name){
    return `Hello, ${name}`;
}

function add(num1, num2){
    return num1 + num2;
}

function multiple(num1,num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1/num2;
}

function subtract(num1, num2){
    return num1 - num2;
}


module.exports = {
    returnsTwo,
    greeting,
    add,
    divide,
    subtract,
    multiple
}