let contador = 0

const tela = document.querySelector('#tela')


function aumentar(){
    contador++
    tela.textContent = contador
}

function diminuir(){
    contador--
    tela.textContent = contador
}

function restart() {
    contador = 0
    tela.textContent = contador
}