const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let calculation = []
let calcualtionString = ""
let accumulativeCalculation = []


let operatorButtons = ["+", "-", "*", ".", "/"];

function checkOperator (value) {
    if (operatorButtons.includes(value)) {
        const pieces = calculation.toString.split(/[+-*./]/)
        const last = pieces[pieces.length - 1]
    }
}

function isNumeric(num){
    return !isNaN(num)
  }

function addToScreen (value){
    calculation.push(value)
    accumulativeCalculation = calculation.join('')
    screenDisplay.textContent = accumulativeCalculation
}

function action(button) {
    const value = button.textContent

    if (value === "CLEAR") {
        calculation = []
        screenDisplay.textContent = '.'
    } else if (value === "=") {
        screenDisplay.textContent = calculate()
    } else {
        if ((isNumeric(calculation[calculation.length - 1]) === false) && (isNumeric(value) === false)) {
            return
        } else {
            addToScreen (value)
        }
    }
}

buttons.forEach(button => button.addEventListener('click', () => action(button)))