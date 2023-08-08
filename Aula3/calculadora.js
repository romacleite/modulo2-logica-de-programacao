console.log("=== CALCULADORA ===");

const somar = function() {
    console.log('-- Clique --');

    // ENTRADA

    const n1 = parseInt(document.getElementById('n1').value || 0);

    const n2 = parseInt(document.getElementById('n2').value || 0);

    // opção mais longa
    // const selecao = document.getElementById('operador').options.selectedIndex;
    // const operacao = document.getElementById('operador').oprtions(selecao).value;

    //opção mais eficiente
    const operacao = document.getElementById('operador').value;
    console.log(n1, operacao, n2);

    // PROCESSAMENTO
    let result;

    switch (operacao) {
        case "+":
            result = n1 + n2;
            break;
      
          case "-":
            result = n1 - n2;
            break;
      
          case "*":
            result = n1 * n2;
            break;
      
          case "/":
            result = n1 / n2;
            break;
      
          case "**":
            result = n1 ** n2;
            break;
    }


    // SAÍDA
    document.getElementById("resultado").value = result;
    
    
}

// DESAFIO - Fazer um programa de comparação entre dois números utilizando os operadores abaixo

    /*
    > 
    <
    >=
    <=
    !=*/