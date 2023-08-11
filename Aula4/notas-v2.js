 console.log("=== CONDICIONAIS ===");

// Entrada
const nota = Number( prompt('Digite a nota do aluno'));
let resultado = "";

// Processamento
if (0 <= nota && nota < 5) {
    resultado = "Reprovado";
} else if ( 5 <= nota && nota < 7) {
    resultado = "Em Recuperação";
} else if ( 7 <= nota && nota <= 10) {
    resultado = "Aprovado";
} else {
    resultado = "Nota Inválida";
}

// Saída
console.log(nota);
document.write(`Nota: ${nota} <br>`);
document.write(`Resultado: ${resultado}`);