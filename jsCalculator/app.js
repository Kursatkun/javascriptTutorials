const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')
const previousResultScreen = document.querySelector('.previousResultScreen')

let calculation = []
let calcualtionString = ""
let accumulativeCalculation
let calculationQueue = []

let operatorButtons = ["+", "-", "*", "/"];

function decideOperation (value, num1, num2) {
    switch (true) {
        case value === "+":
            return (parseInt(num1, 10) + parseInt(num2, 10)).toString()
        case value === "-":
            return (parseInt(num1, 10) - parseInt(num2, 10)).toString()
        case value === "*":
            return (parseInt(num1, 10) * parseInt(num2, 10)).toString()
        case value === "/":
            return (parseInt(num1, 10) / parseInt(num2, 10)).toString()       
    }
}

function emptyArray (array) {
    while (array.length) {
    array.pop();
    }
    console.log("array is reseted")
    console.log(array)
}

function isNumeric(num){
    return !isNaN(num)
}
123+123
function addToScreen (value){
    let temp
    if ((calculationQueue.length === 2) && operatorButtons.includes(value)) {
        calculationQueue.push(calculation.join(''))
        temp = decideOperation(calculationQueue[1], calculationQueue[0], calculationQueue[2])
        emptyArray(calculationQueue)
        emptyArray(calculation)
        calculationQueue.push(temp)
        calculationQueue.push(value)
        accumulativeCalculation = calculationQueue.join('')
        previousResultScreen.textContent = accumulativeCalculation
        console.log("here1")
        console.log(calculation)
        console.log(calculationQueue)
    } else if ((operatorButtons.includes(value)) && calculationQueue.length <2) {
        calculationQueue.push(calculation.join(''))
        calculationQueue.push(value)
        calculation.push(value)
        accumulativeCalculation = calculationQueue.join('')
        previousResultScreen.textContent = accumulativeCalculation
        screenDisplay.textContent = calculation.join('')
        emptyArray(calculation)
        console.log("here2")
        console.log(calculationQueue)
    } else {
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
        console.log("here3")
        console.log(calculation)
    }

}

function action(button) {
    const value = button.textContent
    if (value === "CLEAR") {
        emptyArray(calculationQueue)
        emptyArray(calculation)
        screenDisplay.textContent = '0'
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