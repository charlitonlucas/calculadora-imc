const calcular = document.getElementById("calcular");


function imc() {

    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if (nome!== "" && altura !== "" && peso !== "") {

        const valorimc = (peso / (altura * altura)).toFixed(2);

        let classificacao = "";

        if (valorimc < 18.5) {
            classificacao = "abaixo do peso. É importante procurar um nutricionista.";
        } else if (valorimc < 25) {
            classificacao = "com o peso ideal. Continue se alimentando bem e praticando exercícios.";
        } else if (valorimc < 30) {
            classificacao = "um pouco acima do peso. Consulte um nutricionista para que ele possa te orientar";
        } else if (valorimc < 35) {
            classificacao = " acima do peso ideal. procure um nutricionista assim que puder.";
        } else if (valorimc < 40) {
            classificacao = "bem acima do peso ideal. procure um nutricionista assim que puder.";
        } else {
            classificacao = "bem acima do peso ideal. procure um nutricionista assim que puder.";
        }

        resultado.textContent = (nome + " ,seu imc é de : " +valorimc +" , você está " + classificacao);

    } else {
        resultado.textContent = ("Por favor, preencha todos os campos");
    }
}

calcular.addEventListener("click", imc);