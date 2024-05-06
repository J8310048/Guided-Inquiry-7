// below is the code I attempted to use, but it didn't work. Thought I would show my thought process. I was trying to link each button from my calculator to a number in my array below.
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// let zero = document.querySelector(".zero", function () {
//     zero = numbers[0];
// })
// let one = document.querySelector(".one", function () {
//     one = numbers[1];
// });
// let two = document.querySelector(".two", function () {
//     two = numbers[2];
// });
// let three = document.querySelector(".three", function () {
//     three = numbers[3];
// });
// let four = document.querySelector(".four", function () {
//     four = numbers[4];
// });
// let five = document.querySelector(".five", function () {
//     five = numbers[5];
// });
// let six = document.querySelector(".six", function () {
//     six = numbers[6];
// });
// let seven = document.querySelector(".seven", function () {
//     seven = numbers[7];
// });
// let eight = document.querySelector(".eight", function () {
//     eight = numbers[8];
// });
// let nine = document.querySelector(".nine", function () {
//     nine = numbers[9];
// });


// below links all my operator buttons to this JavaScript file to perform their operations
// let divide = document.querySelector("divide")
// let multiply = document.querySelector("multiply");
// let addition = document.querySelector("addition");
// let subtract = document.querySelector("subtract");
// let equalSign = document.querySelector("equal-sign");


// I decided to go and try a different route below


// this displays values on the screen
let display = document.getElementById("display")

// this is so that all the button values show up on the display. What's happening here is the function appendToDisplay is calling all the arguments in the HTML file and they're being passed into the parameter input. display.textContent is being concatenated with whatever operation is chosen from the calculator and is being displayed on the display.
function appendToDisplay(input) {
    display.textContent += input;
}

// this is for the all clear display button. What's happening here is the all clear button is being asked to clear any text on the display when pressed. The empty quotes symbolize an empty string, so therefore it will be empty everytime the all clear button is clicked.
function clearDisplay() {
    display.textContent = "";
}

// this is for the equal sign to calculate. Also catches any errors if text is not properly written in the calcultor. The eval function acts as like a calculator of some sort. It takes whatever values that are in the display, and calculates them with the operators the previous functions above are mapped to in the HTML file.
function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = "";
        alert("Incorrect Input")
    }
}
