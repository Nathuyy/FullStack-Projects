const cores = ["red", "green", "blue", "purple"];
const botaoId = document.getElementById('button');
const corAtual = document.querySelector('.corAtual');

function getRandomNumber() {
    return Math.floor(Math.random() * cores.length);
}

botaoId.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = cores[randomNumber];
    corAtual.textContent = cores[randomNumber];
});
