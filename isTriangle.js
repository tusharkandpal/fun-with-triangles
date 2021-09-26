const inputs = document.querySelectorAll('.angles');
const checkBtn = document.querySelector('#check-btn');
const output = document.querySelector('#output');

function calSumOfAngles(a, b , c) {
    let sum = a + b + c;
    return sum;
}

function isTriangle() {

    if(inputs[0].value && inputs[1].value && inputs[2].value)
    {
    let sumOfAngles = calSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

    if(sumOfAngles === 180)
    output.innerText = 'yes, it forms a triangle!';
    else output.innerText = 'nope, it is something else..';
    }
    else
    output.innerText = 'please, enter valid values!';
}

checkBtn.addEventListener('click', isTriangle);