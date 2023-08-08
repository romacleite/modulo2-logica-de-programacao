console.log("=== COMPARAÇÃO NUMÉRICA ===");

const comparar = function () {
    console.log('-- Clique --');

    // ENTRADA

    const n1 = parseInt(document.getElementById('n1').value || 0);

    const n2 = parseInt(document.getElementById('n2').value || 0);

    const operacao = document.getElementById('operador').value;
    console.log(n1, operacao, n2);

    // PROCESSAMENTO
    let result;

    switch (operacao) {
        case ">":
            if(n1 > n2) {
                result = true;
            } else {
                result = false;
            }
            break;

        case "<":
            if(n1 < n2) {
                result = true;
            } else {
                result = false;
            }
            break;

        case ">=":
            if(n1 >= n2) {
                result = true;
            } else {
                result = false;
            }
            break;

        case "<=":
            if(n1 <= n2) {
                result = true;
            } else {
                result = false;
            }
            break;

        case "!=":
            if(n1 != n2) {
                result = true;
            } else {
                result = false;
            }
            break;

        case "==":
            if(n1 == n2) {
                result = true;
            } else {
                result = false;
            }
            break;
    }


    // SAÍDA
    document.getElementById("resultado").value = result;


}