let n1;
let n2;
let operators;

const display = document.querySelector("#display")
const btn = document.querySelectorAll("button")
const numbersBtn = document.querySelectorAll("#numbers")
const operatorBtn = document.querySelectorAll("#operator")
const clearBtn = document.querySelector("#clear")

btn.forEach((button) => {
    button.addEventListener("click", () => {
        btnContain = button.innerText;
        display.textContent = btnContain;
    })
})

let operate = function(){
    let result = 0;
    switch

}

let add = function add(arr){ 
    return arr.reduce((n1, n2) => n1 + n2, 0)
;}
console.log(add([5, 9, 10, 20]))

let subtract = function subtract(arr){
    return arr.reduce((n1, n2) => n1 - n2, 0)
;}
console.log(subtract([10, 8, 5, 20]))

let multiply = function multiply(arr){
        return arr.reduce((n1, n2) => n1 * n2)
;}
console.log(multiply([10, 6, 20, 5]))

let divide = function divide(arr){
    return arr.reduce((n1, n2) => n1 / n2)
;}
console.log(divide([100, 5, 4, 20]))