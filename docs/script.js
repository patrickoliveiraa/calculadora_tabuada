document.addEventListener("DOMContentLoaded", function () {
    const gerarBtn = document.getElementById("gerarBtn");
    const numeroInput = document.getElementById("numero");
    const tabuadaTBody = document.querySelector("#tabuada tbody");
    const mensagemErro = document.getElementById("mensagemErro");

    gerarBtn.addEventListener("click", function () {
        tabuadaTBody.innerHTML = ""; // Limpa a tabela anterior, se houver.
        mensagemErro.textContent = ""; // Limpa a mensagem de erro anterior.
        const numero = parseInt(numeroInput.value);

        if (isNaN(numero) || numero < 1) {
            mensagemErro.textContent = "Número inválido. Digite um número válido.";
        } else {
            for (let i = 1; i <= 10; i++) {
                const linha = tabuadaTBody.insertRow();
                const multiplicadorCelula = linha.insertCell();
                const resultadoCelula = linha.insertCell();
                multiplicadorCelula.textContent = i;
                resultadoCelula.textContent = numero * i;
            }
        }
    });
});
