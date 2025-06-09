function showTab(tabId) {
    // Hide all sections and deactivate all buttons
    document.querySelectorAll('main section.subject-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('nav button').forEach(button => {
        button.classList.remove('active');
    });

    // Show the target section and activate its button
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`nav button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

function toggleQuiz() {
    const quizSection = document.querySelector('.quiz-section');
    if (quizSection) {
        const isHidden = quizSection.style.display === 'none' || quizSection.style.display === '';
        quizSection.style.display = isHidden ? 'block' : 'none';
    }
}

function checkAnswers() {
    const correctAnswersMap = {
        // Basic Arithmetic Answers
        'q1': 'b', 'q2': 'b', 'q3': 'c', 'q4': 'c', 'q5': 'a',
        'q6': 'a', 'q7': 'b', 'q8': 'a', 'q9': 'b', 'q10': 'a',
        'q11': 'a', 'q12': 'a', 'q13': 'a', 'q14': 'b', 'q15': 'a',
        'q16': 'c', 'q17': 'c', 'q18': 'a', 'q19': 'd', 'q20': 'a',
        // Algebra Answers
        'q21': 'a', 'q22': 'a', 'q23': 'b', 'q24': 'a', 'q25': 'a',
        'q26': 'a', 'q27': 'b', 'q28': 'a', 'q29': 'a', 'q30': 'a',
        'q31': 'a', 'q32': 'a', 'q33': 'a', 'q34': 'a', 'q35': 'a',
        'q36': 'a', 'q37': 'b', 'q38': 'a', 'q39': 'a', 'q40': 'e'
    };
    
    let score = 0;
    const activeQuiz = document.querySelector('.quiz-section');
    const questions = activeQuiz.querySelectorAll('.problem');
    const totalQuestions = questions.length;

    questions.forEach(question => {
        const questionName = question.querySelector('input[type="radio"]').name;
        const correctAnswerValue = correctAnswersMap[questionName];
        
        // Reset previous feedback
        question.querySelectorAll('label').forEach(label => {
            label.classList.remove('correct', 'incorrect');
        });

        const selectedAnswer = question.querySelector(`input[name="${questionName}"]:checked`);
        
        if (selectedAnswer) {
            const selectedLabel = selectedAnswer.parentElement;
            if (selectedAnswer.value === correctAnswerValue) {
                score++;
                selectedLabel.classList.add('correct');
            } else {
                selectedLabel.classList.add('incorrect');
                // Also show the correct answer
                const correctLabel = question.querySelector(`input[value="${correctAnswerValue}"]`).parentElement;
                correctLabel.classList.add('correct');
            }
        } else {
            // If no answer is selected, just show the correct answer
            const correctLabel = question.querySelector(`input[value="${correctAnswerValue}"]`).parentElement;
            correctLabel.classList.add('correct');
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You got ${score} out of ${totalQuestions} correct!`;
}