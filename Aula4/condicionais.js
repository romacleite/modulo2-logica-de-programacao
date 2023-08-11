 console.log("=== CONDICIONAIS ===");

// Entrada
const nota = Number( prompt('Digite a nota do aluno'));
let resultado = "Nota Inválida";

// Processamento
switch (nota) {
    case 7:
        resultado = "Aprovado";
        break;
    
    default:
        resultado = "Reprovado";
        break;
}

// Saída
console.log(nota);
document.write(`Nota: ${nota} <br>`);
document.write(`Resultado: ${resultado}`);