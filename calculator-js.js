// ************************************ MODEL ********************************

let input1 = document.querySelector('#input-1');
let input2 = document.querySelector('#input-2');
let arithmeticHolder;
let resultText = document.querySelector('#result-text');
let arithmeticCatcher = document.querySelector('#arithmetic-catcher');


const arithmeticAdd = document.querySelector('#arithmetic-value-add');
const arithmeticSub = document.querySelector('#arithmetic-value-subtract');
const arithmeticMult = document.querySelector('#arithmetic-value-multiply');
const arithmeticDiv = document.querySelector('#arithmetic-value-divide');
const arithmeticMod = document.querySelector('#arithmetic-value-modulo');
const equalTo = document.querySelector('#equal-to');

// ************************************ VIEWS ********************************





// ************************************ CONTROL ********************************

function addition(input1Par, input2Par) {
    let sum = Number(input1Par) + Number(input2Par);
    resultText.innerText = sum;
}

function subtraction(input1Par, input2Par) {
    let difference = Number(input1Par) - Number(input2Par);
    resultText.innerText = difference;
}

function multiplication(input1Par, input2Par) {
    let product = Number(input1Par) * Number(input2Par);
    resultText.innerText = product;
}

function division(input1Par, input2Par) {
    if (input1Par => input2Par && input2Par !== 0) {
        let quotient = Number(input1Par) / Number(input2Par);
        resultText.innerText = quotient;
    }
    else {
        resultText.innerText = 'Invalid Operation';
    }
}

function modulation(input1Par, input2Par) {
    if (input1Par => input2Par && input2Par !== 0) {
        let finalAnswer = Number(input1Par) % Number(input2Par);
        resultText.innerText = finalAnswer;
    }
    else {
        resultText.innerText = 'Invalid Operation';
    }
}


arithmeticAdd.addEventListener('click', () => {
    arithmeticHolder = '+';
    arithmeticCatcher.innerText = '+';
    if (arithmeticHolder === '+') {
    equalTo.addEventListener('click', () => {
        addition(input1.value, input2.value);
    })} else {
        resultText.innerText = 'NaN';
    }
});

arithmeticSub.addEventListener('click', () => {
    arithmeticHolder = '-';
    arithmeticCatcher.innerText = '-';
    if (arithmeticHolder === '-') {
    equalTo.addEventListener('click', () => {
        subtraction(input1.value, input2.value);
    })} else {
        resultText.innerText = 'NaN';
    }
});

arithmeticMult.addEventListener('click', () => {
    arithmeticHolder = '*';
    arithmeticCatcher.innerText = '*';
    if (arithmeticHolder === '*') {
    equalTo.addEventListener('click', () => {
        multiplication(input1.value, input2.value);
    })} else {
        resultText.innerText = 'NaN';
    }
});

arithmeticDiv.addEventListener('click', () => {
    arithmeticHolder = '/';
    arithmeticCatcher.innerText = '/';
    if (arithmeticHolder === '/') {
    equalTo.addEventListener('click', () => {
        division(input1.value, input2.value);
    })} else {
        resultText.innerText = 'NaN';
    }
});

arithmeticMod.addEventListener('click', () => {
    arithmeticHolder = '%';
    arithmeticCatcher.innerText = '%';
    if (arithmeticHolder === '%') {
    equalTo.addEventListener('click', () => {
        modulation(input1.value, input2.value);
    })} else {
        resultText.innerText = 'NaN';
    }
});