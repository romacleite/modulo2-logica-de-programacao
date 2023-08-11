 console.log("=== CONDICIONAIS ===");

// Entrada
const nota = Number( prompt('Digite a nota do aluno'));
// ?? 0 - checa se não é nulo e seta o zero como valor default caso seja null.
// || 0 - checa se é um valor que não seja null ou string vazia. caso seja, coloca o zero como valor default
let resultado

// Processamento
if(nota >= 7) {
    resultado = "Aprovado"
} else {
    resultado = "Reprovado"
}

if(nota > 10 || nota < 0) {
    resultado = "Nota Inválida"
}


// Saída
console.log(nota);
document.write(`Nota: ${nota} <br>`);
document.write(`Resultado: ${resultado}`)