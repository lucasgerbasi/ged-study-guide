function showSolution(id) {
    const solution = document.getElementById(`solution-${id}`);
    if (solution.style.display === 'none' || solution.style.display === '') {
        solution.style.display = 'block';
    } else {
        solution.style.display = 'none';
    }
}

function showTab(tabId) {
    const sections = document.querySelectorAll('main section');
    const buttons = document.querySelectorAll('nav button');
    sections.forEach(section => section.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`nav button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

function toggleQuiz() {
    const quizSection = document.querySelector('.quiz-section');
    quizSection.style.display = (quizSection.style.display === 'none' || quizSection.style.display === '') ? 'block' : 'none';
}

function checkAnswers() {
    let correctAnswers = 0;

    // Question 1
    if (document.querySelector('input[name="q1"]:checked')?.value === 'a') {
        correctAnswers++;
    }
    // Question 2
    if (document.querySelector('input[name="q2"]:checked')?.value === 'b') {
        correctAnswers++;
    }
    // Question 3
    if (document.querySelector('input[name="q3"]:checked')?.value === 'c') {
        correctAnswers++;
    }
    // Question 4
    if (document.querySelector('input[name="q4"]:checked')?.value === 'c') {
        correctAnswers++;
    }
    // Question 5
    if (document.querySelector('input[name="q5"]:checked')?.value === 'a') {
        correctAnswers++;
    }
    // Question 6
    if (document.querySelector('input[name="q6"]:checked')?.value === 'a') {
        correctAnswers++;
    }
    // Question 7
    if (document.querySelector('input[name="q7"]:checked')?.value === 'b') {
        correctAnswers++;
    }
    // Question 8
    if (document.querySelector('input[name="q8"]:checked')?.value === 'a') {
        correctAnswers++;
    }
    // Question 9
    if (document.querySelector('input[name="q9"]:checked')?.value === 'b') {
        correctAnswers++;
    }
    // Question 10
    if (document.querySelector('input[name="q10"]:checked')?.value === 'a') {
        correctAnswers++;
    }
    // Question 11
    if (document.querySelector('input[name="q11"]:checked')?.value === 'a') {
        correctAnswers++;
    }
    // Question 12
    if (document.querySelector('input[name="q12"]:checked')?.value === 'a') {
        correctAnswers++;
    }
    // Question 13
    if (document.querySelector('input[name="q13"]:checked')?.value === 'a') {
        correctAnswers++;
    }
    // Question 14
    if (document.querySelector('input[name="q14"]:checked')?.value === 'b') {
        correctAnswers++;
    }
    // Question 15
    if (document.querySelector('input[name="q15"]:checked')?.value === 'a') {
        correctAnswers++;
    }
    // Question 16
    if (document.querySelector('input[name="q16"]:checked')?.value === 'a') {
        correctAnswers++;
    }
    // Question 17
    if (document.querySelector('input[name="q17"]:checked')?.value === 'c') {
        correctAnswers++;
    }
    // Question 18
    if (document.querySelector('input[name="q18"]:checked')?.value === 'b') {
        correctAnswers++;
    }
    // Question 19
    if (document.querySelector('input[name="q19"]:checked')?.value === 'a') {
        correctAnswers++;
    }
    // Question 20
    if (document.querySelector('input[name="q20"]:checked')?.value === 'e') {
        correctAnswers++;
    }
    // Question 21
    if (document.querySelector('input[name="q21"]:checked')?.value === 'b') {
        correctAnswers++;
    }
    // Question 22
    if (document.querySelector('input[name="q22"]:checked')?.value === 'b') {
        correctAnswers++;
    }
    // Question 23
    if (document.querySelector('input[name="q23"]:checked')?.value === 'b') {
        correctAnswers++;
    }
    // Question 24
    if (document.querySelector('input[name="q24"]:checked')?.value === 'a') {
        correctAnswers++;
    }
    // Question 25
    if (document.querySelector('input[name="q25"]:checked')?.value === 'a') {
        correctAnswers++;
    }
    // Question 26
    if (document.querySelector('input[name="q26"]:checked')?.value === 'a') {
        correctAnswers++;
    }
    // Question 27
    if (document.querySelector('input[name="q27"]:checked')?.value === 'b') {
        correctAnswers++;
    }
    // Question 28
    if (document.querySelector('input[name="q28"]:checked')?.value === 'a') {
        correctAnswers++;
    }
    // Question 29
    if (document.querySelector('input[name="q29"]:checked')?.value === 'a') {
        correctAnswers++;
    }    
    // Question 30
    if (document.querySelector('input[name="q30"]:checked')?.value === 'a') {
        correctAnswers++;
    }    
    // Question 31
    if (document.querySelector('input[name="q31"]:checked')?.value === 'a') {
        correctAnswers++;
    }    
    // Question 32    
    if (document.querySelector('input[name="q32"]:checked')?.value === 'a') {
        correctAnswers++;
    }    
    // Question 33    
    if (document.querySelector('input[name="q33"]:checked')?.value === 'b') {
        correctAnswers++;
    }    
    // Question 34    
    if (document.querySelector('input[name="q34"]:checked')?.value === 'a') {
        correctAnswers++;
    }    
    // Question 35    
    if (document.querySelector('input[name="q35"]:checked')?.value === 'a') {
        correctAnswers++;
    }    
    // Question 36    
    if (document.querySelector('input[name="q36"]:checked')?.value === 'a') {
        correctAnswers++;
    }    
    // Question 37    
    if (document.querySelector('input[name="q37"]:checked')?.value === 'b') {
        correctAnswers++;
    }    
    // Question 38    
    if (document.querySelector('input[name="q38"]:checked')?.value === 'd') {
        correctAnswers++;
    }    
    // Question 39    
    if (document.querySelector('input[name="q39"]:checked')?.value === 'c') {
        correctAnswers++;
    }    
    // Question 40    
    if (document.querySelector('input[name="q40"]:checked')?.value === 'b') {
        correctAnswers++;
    }


    document.getElementById('result').textContent = `You got ${correctAnswers} out of 20 correct!`;
}
