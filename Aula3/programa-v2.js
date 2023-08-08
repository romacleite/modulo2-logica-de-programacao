console.log("=== MEU SEGUNDO PROGRAMA ===");

function converter () {
    console.log('- Clique');

    // Entrada
    let entrada = document.getElementById('nome').value;
    console.log(entrada);

    // Processamento
    entrada = entrada.toUpperCase();
    console.log(entrada);

    // Saída
    
    document.getElementById('saida').innerText = entrada;

}
