const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector('.buttonEquals')
const clearBtn = document.querySelector('.buttonClear')
const decimal = document.querySelector('.decimal')
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
const calculatorScreen = document.querySelector('.calculator-screen')

//click num
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
        console.log(currentNumber)
    })
})

//display update screen
const updateScreen = (number) => {
    calculatorScreen.value = number
    console.log(number)
}

//input num
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

//add operator to calculate
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

//input operator
const inputOperator = (operator) => {
    if (calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

//clik equal (=)
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

//process to calculate
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}


//AC button
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

//clik decimal
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

//input decimal
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
