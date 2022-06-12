
function hello(){
    let color = "Blue"
    console.log("Hello there!", color);
}

function sayHello(firstName, lastName){
    console.log("Hello " + firstName + " " + lastName);

    // assign event
}
function printSumResult(num1, num2, num3){
    let total = num1 + num2 + num3;
    console.log("Result", total);
}

function sum(num1,num2) {
    let total = num1 + num2;
    return total;
}
function divide(num1, num2) {
    if(num2 == 0){
        return "ERROR: Zero division not allowed";
    } else {
        return num1 / num2;
    }
} 
function saveData() {
    // validate data
    if(dataValid == false) {
        return; // do not continue saving
    }

    // send data to server

    // show success message
}

function printSomeNumbers() {
    // except 11,13
    for (let i =0; i < 21; i++) {
        if(i != 11 && i != 13) {
            console.log(i);
        }
    }
}

function init() {
    console.log("Intro page");

hello();
    //console.log(color);

let name ="Mario";
sayHello(name, "McGrady");

printSumResult(21, 21, -90);

let answer = sum(21,21);
console.log("The answer is", answer); // 42

let div1 = divide(100,10); //10
let div2 = divide(200,0); // Error: Zero division not allowed
console.log(div1, div2);


printSomeNumbers(); // 0 to 20
}


window.onload = init;

