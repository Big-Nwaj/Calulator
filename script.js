function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if (b === 0){
        return "Can't divide by 0";
    }

    return a / b;
}

function square (a){
    return a * a;
}

console.log (square(88))

function greet(a){
    return "Hello " + a;
}

console.log (greet("Mr Micheal"));

function operate(operator,a,b){
    a = Number(a);
    b = Number(b);
    if (operator === "add") return add(a,b);
    if (operator === "subtract") return subtract(a,b); 
    if (operator === "multiply") return multiply(a,b);  
    if (operator === "divide") return divide(a,b);
}

const display = document.getElementById("input");
console.log (display); 

const operatorButtons = document.querySelectorAll(".btn-operator");
console.log (operatorButtons);

operatorButtons.forEach ((button) => {
    button.addEventListener("click",()=> {
        chooseOperator(button.dataset.action);
    });
});

let firstNumber ="";
let currentOperator = null;
let resetScreen = false;

function chooseOperator(operator){
   if (currentOperator !== null){
    evaluate();
   }
   firstNumber = display.textContent;
   currentOperator = operator;

   resetScreen = true;
}

const numberButtons = document.querySelectorAll(".btn-number");
console.log (numberButtons);

numberButtons.forEach ((button) => {
    button.addEventListener("click",()=> {
        appendNumber (button.textContent);
    });
});


function appendNumber(number){
    if(number === "." && display.textContent.includes(".")){
        return;
    }
    if (display.textContent === "0" || resetScreen || display.textContent === "Can't divide by 0") {
        display.textContent = "";
        resetScreen = false;
    }
    display.textContent += number;

}

const equalsButton = document.querySelector(".btn-equals");
equalsButton.addEventListener("click",()=> { 
    evaluate();
});

function evaluate(){
    if (currentOperator === null || resetScreen){
        return;
    }
    let secondNumber = display.textContent;
    let result = operate(currentOperator, firstNumber, secondNumber);
    display.textContent = result;
    history.textContent = `${firstNumber} ${currentOperator} ${secondNumber} = ${result}`;

    firstNumber = result; 
    currentOperator = null;
    resetScreen = true; 
}

const history = document.getElementById("history");
console.log(history); 

const clear = document.querySelector('[data-action="clear"]');
clear.addEventListener("click", () => {
    resetScreen = false;
    display.textContent = "0";
    firstNumber = "";
    currentOperator = null;
    history.textContent = ""; 
});


const deleteBtn = document.querySelector('[data-action="delete"]');
deleteBtn.addEventListener("click",() => {
    if (display.textContent.length === 1)
        {
            display.textContent = "0";
        }
     else{display.textContent = display.textContent.slice(0 , -1)}
    });