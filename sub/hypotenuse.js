const sides = document.querySelectorAll('.sides');
const findBtn = document.querySelector('#find-btn');
const output = document.querySelector('#output');

function findSumOfSides(a ,b) {
    let sum = a*a + b*b;
    return sum;
}

function findHypotenuse() {

    if (Number(sides[0].value) <= 0 || Number(sides[1].value) <=0)
    {
        output.innerText = 'Values cannot be negative/empty/0.';

    }
    else
    {
        
        let sumOfSides = findSumOfSides(Number(sides[0].value), Number(sides[1].value));

        let hypotenuse = Math.sqrt(sumOfSides);

        output.innerText = `The hypotenuse is: ${hypotenuse} cm`;
    }
    
}

findBtn.addEventListener('click', findHypotenuse);
