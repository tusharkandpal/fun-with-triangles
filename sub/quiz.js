const quizForm = document.querySelector('#quiz-form');
const submitBtn = document.querySelector('#submit-btn');
const output = document.querySelector('#output');

const answers = ['90°', 'right-angled'];

function calculateScore () {
    let form = new FormData(quizForm);
    let index = 0;
    let score = 0;

    for (let value of form.values())
    {
        if (value === answers[index])
            score += 1;
    
        index+=1;
    }

    output.innerText = `Your final score: ${score}`;
}


submitBtn.addEventListener('click', calculateScore)