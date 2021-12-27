class Calculator{
    constructor(firstNumberElement,secondNumberElement, operatorDisplayElement){
        this.firstNumberElement=firstNumberElement
        this.secondNumberElement=secondNumberElement
        this.operatorDisplayElement = operatorDisplayElement
    }

    clear(){
        this.firstNumberElement.innerText=""
        this.secondNumberElement.innerText=""
        this.operatorDisplayElement.innerText =""
    }

    delete(){
        this.firstNumberElement.innerText= this.firstNumberElement.innerText.slice(0,-1)
    }

    // add number
    appendNumber(number){
       if(number === "." && this.firstNumberElement.innerText.includes(".")) return;
    
       this.firstNumberElement.innerText = this.firstNumberElement.innerText + number.toString()
    }

    // + % * -
    chooseOperation(operator){
        if (this.firstNumberElement.innerText) {
            this.operatorDisplayElement.innerText = operator
        }
    }

    // collect the numbers
    compute(){
        const operand = this.operatorDisplayElement.innerText;
        const first = Number(this.firstNumberElement.innerText);
        const second = Number(this.secondNumberElement.innerText);
        let result = 0;
        if (operand === "+") {
            result = first + second;
        } else if (operand === "-") {
            result = first - second;
        } else if (operand === "*") {
            result = first * second;
        } else if (operand === "÷") {
            result = second / first;
        } 

        this.firstNumberElement.innerText = result;
        this.secondNumberElement.innerText = '';
        this.operatorDisplayElement.innerText = '';

    }

    // show the result
    updateDisplay(){
        this.secondNumberElement.innerText = this.firstNumberElement.innerText;
        this.firstNumberElement.innerText = '';
    }

}



const numberButtons= document.querySelectorAll("[data-number]")
const operationButtons= document.querySelectorAll("[data-operation]")
const equalsButton= document.querySelector("[data-equals]") 
const deleteButton= document.querySelector("[data-delete]") 
const allClearButton = document.querySelector("[data-all-clear]") 
const secondNumberElement= document.querySelector("[data-previous-operand]") 
const firstNumberElement= document.querySelector("[data-current-operand]") 
const operatorDisplayElement= document.querySelector("[data-operator-display]") 

const calculator= new Calculator(firstNumberElement,secondNumberElement, operatorDisplayElement)

numberButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        calculator.appendNumber(button.innerText)
    })
})

operationButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})


equalsButton.addEventListener("click",()=>{
    calculator.compute();
})

deleteButton.addEventListener("click",()=>{
    calculator.delete();
})

allClearButton.addEventListener("click",()=>{
    calculator.clear();
})

