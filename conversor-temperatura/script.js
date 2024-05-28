document.addEventListener('DOMContentLoaded', function(){
    const entrada = document.getElementById('entrada');
    const saida = document.getElementById('saida');
    const valorTemp = document.getElementById('valor');
    const resultado = document.getElementById('resultado');
    const converterBtn = document.getElementById('converter');

    converterBtn.addEventListener('click', function(){
        const unidadeEntrada = entrada.value;
        const unidadeSaida = saida.value;
        const temperatura = parseFloat(valorTemp.value);

        if(isNaN(temperatura)){
            resultado.textContent = "Insira um valor válido, por favor.";
            return;
        }

        let tempConvertida;

        if (unidadeEntrada === 'Celsius' && unidadeSaida === 'Fahrenheit') {
            tempConvertida = (temperatura * 9/5) + 32;
        } else if (unidadeEntrada === 'Fahrenheit' && unidadeSaida === 'Celsius') {
            tempConvertida = (temperatura - 32) * 5/9;
        } else if (unidadeEntrada === 'Celsius' && unidadeSaida === 'Kelvin') {
            tempConvertida = temperatura + 273.15;
        } else if (unidadeEntrada === 'Kelvin' && unidadeSaida === 'Celsius') {
            tempConvertida = temperatura - 273.15;
        } else if (unidadeEntrada === 'Fahrenheit' && unidadeSaida === 'Kelvin') {
            tempConvertida = (temperatura - 32) * 5/9 + 273.15;
        } else if (unidadeEntrada === 'Kelvin' && unidadeSaida === 'Fahrenheit') {
            tempConvertida = (temperatura - 273.15) * 9/5 + 32;
        } else if (unidadeEntrada === unidadeSaida) {
            tempConvertida = temperatura;
        } else {
            resultado.textContent = 'Por favor, selecione unidades de conversão válidas.';
            return;
        }

        resultado.textContent = `Resultado: ${tempConvertida.toFixed(2)} ${unidadeSaida}`;
    });
});

