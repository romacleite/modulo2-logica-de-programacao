console.log("=== CALCULADORA IMC ===");

const calcular = function () {
    console.log('-- Clique --');

    // ENTRADA

    const peso = parseFloat(document.getElementById('peso').value || 0);
    console.log(peso);

    const altura = parseFloat(document.getElementById('altura').value || 0);
    console.log(altura);

    // PROCESSAMENTO
    const imc = peso / (altura*altura);
    console.log(imc);

    let classi;

    if (imc <= 18.5) {
        classi = "Baixo peso"
    } else if (imc >= 18.6 && imc <= 24.9) {
        classi = "Peso normal"
    } else if (imc >= 25 && imc <= 29.9) {
        classi = "Sobrepeso"
    } else if (imc >= 30 && imc <= 34.9) {
        classi = "Obesidade Grau I"
    } else if (imc >= 35 && imc <= 39.9) {
        classi = "Obesidade Grau II"
    } else if (imc >= 40) {
        classi = "Obesidade Grau III"
    } 

    console.log(classi);

    // SAÍDA
    document.getElementById("imc").value = imc.toFixed(1)*1;
    document.getElementById("classi").value = classi;


}

// Cálculo IMC:
// peso / (altura*altura);


// Classificações IMC:
// Abaixo de 18,5 -> Baixo peso
// Entre 18,6 e 24,9 -> Peso normal
// Entre 25 e 29,9 -> Sobrepeso
// Entre 30 e 34,9 -> Obesidade grau I
// Entre 35 e 39,9 -> Obesidade grau II
// Acima de 40 -> Obesidade grau III