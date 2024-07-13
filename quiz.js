function checkAnswer() {
    let correctAnswer="4";
    let checkedRadioButton=document.querySelector('input[name="quiz"]:checked');
    let userAnswer=checkedRadioButton? checkedRadioButton.value : null;
    let feedback=document.getElementById('feedback');
    if(userAnswer === correctAnswer){
        feedback.textContent="Correct! Well done.";
    }else{
        feedback.textContent="That's incorrect. Try again!";
    }
}
let submitAnswer=document.getElementById('submit-answer');
submitAnswer.addEventListener('click',checkAnswer);