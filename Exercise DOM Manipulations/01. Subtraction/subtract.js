function subtract() {
    const firstNum=document.querySelector('#firstNumber');
    const secondNum=document.querySelector('#secondNumber');
    const result=document.querySelector('#result');

    result.textContent=Number(firstNum.value)-Number(secondNum.value);
}