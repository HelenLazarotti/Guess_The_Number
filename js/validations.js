//verifica se valor é valido:
function  validValue(saidNum){

    //preciso transformar o número falado em inteiro:
    const num = +saidNum

    //verifico:
    //obs: selecionei conteudo de dentro if e na luz yellow, pedi p automaticamente criar uma função global...
    if(itsInvalid(num)){
        //se eu falar game over:
        if(saidNum.toUpperCase() === 'GAME OVER'){
            document.body.classList.add('gameOverBody')
            document.body.innerHTML = `
            <h1>"Game Over"</h1>
            <button class="btn_playAgain" id="playAgain">Jogar Novamente</button>`
        } else {
            //mostro na tela:
            div_guess.innerHTML += `<div>Valor inválido</div>`
        }
        //coloco em todos, pra que não execute + nada dessas funções:
        return
    }
    if (numLowerOrUpper(num)){
        //mostro na tela:
        div_guess.innerHTML += `<div>INVÁLIDO: Valor precisa estar entre: ${lowerValue} e ${upperValue}</div>`

        return
    }

    //se o num falado é igual ao aletório do computador:
    if(num === numSecret){
        document.body.innerHTML = `
        <h2>Você ACERTOU!!!</h2>
        <h3>O número secreto era ${numSecret}</h3>
        <button class="btn_playAgain" id="playAgain">Jogar Novamente</button>
        `
    } else if (num > numSecret) {
        div_guess.innerHTML += `
        <div>O número é menor 
            <i class="fa-solid fa-angles-down"></i>
        </div>`
    } else {
        div_guess.innerHTML += `
        <div>O número é maior 
            <i class="fa-solid fa-angles-up"></i>
        </div>`
    }
}

function numLowerOrUpper(num) {
    return num > upperValue || num < lowerValue
}

function itsInvalid(num) {
    return Number.isNaN(num)
}

//botão pra jogar novamente:
document.body.addEventListener('click', e => {
    if (e.target.id === 'playAgain'){
        window.location.reload()
    }
})
