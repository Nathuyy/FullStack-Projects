const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const botaoId = document.getElementById('button');
const corAtual = document.querySelector('.corAtual');

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

botaoId.addEventListener("click", function() {
    let corHex = "#";  
    for (let i = 0; i < 6; i++) {
        corHex += hex[getRandomNumber()];
    }

    corAtual.textContent = corHex;
    document.body.style.backgroundColor = corHex;
});
