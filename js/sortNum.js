const lowerValue = 0;
const upperValue = 100;
const numSecret = numAleatorio();

function numAleatorio() {
    //gerei numero aleatório, arredondando para Inteiro, multiplicando pra não dar < 0 e somando + 1
    return parseInt(Math.random() * upperValue + 1);
}

console.log(numSecret)

//manipulando os campos SPAN
const elementLowerValue = document.getElementById('lower-value');
elementLowerValue.innerHTML = lowerValue;

const elementUpperValue = document.getElementById('upper-value');
elementUpperValue.innerHTML = upperValue;

//vou usar a Web Speech API, pra reconhecimento de voz, olhar o arq -> voicerecognition.js: 
//link: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

//usamos esses códigos dados ^, p que se houver quaisquer implementações futuras, oferecam suporte...

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;