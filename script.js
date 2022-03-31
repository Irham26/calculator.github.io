// ini untuk mendeklarasikan numbers
const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
        
    })
   
})

//ini untuk mendeklarasikan screen calculator 
const calculatorScreen=document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    calculatorScreen.value=number
}

//ini untuk menyimpan 2 angka dan 1 operator
let prevNumber = ""
let calculationOperator=""
let currentNumber=""

//ini untuk memberikan kondisi pada inputan 0 di awal
const inputNumber = (number) => {
    if (currentNumber === "0"){
        currentNumber = number
    }else{
        currentNumber += number
    }
    
}

//ini untuk mendeklarasikan operator button
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
}

// untuk mendeklarasikan tombol =
const equalSign= document.querySelector(".equal-sign")

equalSign.addEventListener("click", ()=>{
    calculate()
    updateScreen(currentNumber)
})

// ini untuk menentukan rumus operator
const calculate = () =>{
    let result = ''
    switch(calculationOperator){
        case "+":
            result = parseInt (prevNumber) + (currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        case "√":
            result =  currentNumber
            break
        default:
        return
    }

currentNumber = result
calculationOperator=""
}

// ini untuk deklarasi penghapusan
const clearBtn = document.querySelector(".all-clear")

clearBtn.addEventListener("click",() => {
    clearAll()
    updateScreen(currentNumber)
   
})

const clearAll = ()=>{
    prevNumber = ""
    calculationOperator=""
    currentNumber="0"
}

const decimal = document.querySelector(".decimal")

decimal.addEventListener("click" , (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal=(dot)=>{
    currentNumber += dot
}
    




