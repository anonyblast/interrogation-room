function startGame() {
    var question1, question2, question3, question4, question5, result;
    question1 = confirm("Você conhecia a vítima?");
    question2 = confirm("Você estava nos arredores do local do crime?");
    question3 = confirm("Você tem algum álibi?");
    question4 = confirm("Você já brigou por qualquer motivo com a vitima?");
    question5 = confirm("Você já havia cometido algum crime semelhante antes?");
    result = document.getElementById('result');

    if (question1 == true && question2 == true && question3 == false && question4 == true) {
        result.innerText = 'Culpado!';
    } else if (question3 == false && question2 == true && question5 == true) {
        result.innerText = 'Culpado!';
    } else if (question1 == true && question2 == true && question3 == false && question4 == false && question5 == false) {
        result.innerText = 'Muito suspeito!';
    } else if (question1 == false && question2 == false && question3 == true && question5 == true) {
        result.innerText = 'Muito suspeito!';
    } else if (question1 == true && (question2 == true || question4 == true)) {
        result.innerText = 'Muito suspeito!';
    } else if (question3 == true) {
        result.innerText = 'Inocente!';
    } else {
        result.innerText = 'Pouco suspeito!';
    }
}