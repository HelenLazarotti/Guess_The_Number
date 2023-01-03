const div_guess = document.querySelector('#guess');
const number = document.querySelector('.box');

//vou usar a Web Speech API: 
//link: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

//usamos esses códigos dados ^, p que se houver quaisquer implementações futuras, oferecam suporte...

//coloco window 1º pra que quando carregar a pág ele já capite a voz...
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

//digo que é pra reconhecer em PT-BT:
recognition.lang = 'pt-Br';

//começar:
recognition.start();

//a função indicada aqui, vai pegar all que eu to falando:
recognition.addEventListener('result', onSpeak)

//tudo que falamos vai estar salvo em um evento:
function onSpeak(event){
    /*console.log(event)
    se eu der esse console, me retorna um objeto enorme, se eu ir no item RESULTS -> 0 -> 0, vai aparecer oq eu falei, e eu preciso apenas dessa parte, para acessá-la:*/
    
    //acessar apenas o falado:
    const saidNum = event.results[0][0].transcript;

    //Preciso que apareça na tela, não console, então crio uma função:...
    showGuess(saidNum);

    //preciso verifica se é um valor válido:
    validValue(saidNum);
    
    //vejo se é game over:
    gameOver()
}

//função pra exibir o chute na tela:
function showGuess(saidNum){

    //disse pra mostrar na tela:
    div_guess.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${saidNum}</span>`
}

//função pra dizer Game Over:
function gameOver(){
    document.body.classList.add('gameOverBody')
    document.body.innerHTML = `
    <h1>"Game Over"</h1>
    <button class="btn_playAgain" id="playAgain">Jogar Novamente</button>`
    
}

//evento pra não parar o jogo até eu acertar:
recognition.addEventListener('end', () => recognition.start())
//ou seja, quando minha função acabar, ele inicia mais uma vez...

