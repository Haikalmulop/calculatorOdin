let n1 = ''; //currentValue
let n2 = ''; //previousValue
let operators = '';

const display = document.querySelector("#display-container")
const numbersBtn = document.querySelectorAll("#numbers")
const operatorBtn = document.querySelectorAll("#operator")
const clearBtn = document.querySelector("#clear")
const equalBtn = document.querySelector("#equal")
const decimalBtn = document.querySelector("#decimal")
const currentDisplay = document.querySelector("#current")
const previousDisplay = document.querySelector("#previous")


// take every numbers button 
numbersBtn.forEach((number) => {
    number.addEventListener("click", (e) => {
        //this 1 tell to show button number when clicked
        handleNumber(e.target.textContent);
        currentDisplay.textContent = n1; 
    })
})

//take every operator button
operatorBtn.forEach((op) => {
    op.addEventListener("click", (e) => {
        //this 1 tell to show button number when clicked
        handleOperator(e.target.textContent);
        previousDisplay.textContent = n2 + ' ' + operators;
        currentDisplay.textContent = n1;
    })
});

clearBtn.addEventListener("click", () => {
    n2 = '';
    n1 = '';
    operators = '';
    previousDisplay.textContent = n1;
    currentDisplay.textContent = n1;
})

equalBtn.addEventListener("click", () => {
    if(n2 != '' && n1 != ''){
        operator()
        previousDisplay.textContent = '';
        if(n2.length <= 6){
            currentDisplay.textContent = n2;
        } else{
            currentDisplay.textContent = n2.slice(0, 6)
        }
    }
})

decimalBtn.addEventListener("click", () => {
    decimal()
})

//funtion untuk button number boleh tekan
function handleNumber(num){
    //had kan no boleh tekan kat input
    if(n1.length <= 6)
        n1 += num;
    console.log(n1)
};

//funtion untuk button operator boleh tekan
function handleOperator(op){
    operators = op;
    n2 = n1;
    n1 = '';
        console.log(op)
};

function operator(){
    n2 = Number(n2);
    n1 = Number(n1);

    if(operators === "+"){
        n2 += n1
    } else if (operators === "-"){
        n2 -= n1
    } else if (operators === "*"){
        n2 *= n1
    } else {
        n2 /= n1
    }

    n2 = roundNumber(n2);
    n2 = n2.toString();
    n1 = n2.toString();
};

function roundNumber(num) {
    return Math.round(num * 1000) / 1000
};

function decimal(){
    currentDisplay.textContent = n1 + '.'
    if(!n1.includes(".")){
        n1 += "."
    }    
}
    
