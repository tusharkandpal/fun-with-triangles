const params = document.querySelectorAll('.parameters');
const findAreaBtn = document.querySelector('#find-area-btn');
const output = document.querySelector('#output');

function findArea () {

    if (Number(params[0].value) <= 0 || Number(params[1].value) <= 0)
    {
        output.innerText = 'the input values cannot be negative/empty/0';
    }
    else
    {
        let area = 0.5*Number(params[0].value)*Number(params[1].value);

        output.innerText = `the area of triangle is: ${area} cm²`;
    }

    

}

findAreaBtn.addEventListener('click', findArea);