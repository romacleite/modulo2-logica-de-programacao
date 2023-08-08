console.log("\n=== DIFERENÇA FUNÇÕES ===")

// Declaração de Função - Nomeada
function soma(n1 = 0, n2 = 0) {
    return n1+n2;
}


// Execução da Função
console.log("result 1", soma()); // 0
console.log("result 1", soma(5)); // 5
console.log("result 1", soma(5, 3)); // 8


// Declaração de Função - Anônima
const multiplica = function (x1 = 0, x2 = 0) {
    return x1 * x2
};

// Execução da Função - Anônima
console.log("result 1", multiplica()); // 0
console.log("result 1", multiplica(2)); // 0
console.log("result 1", multiplica(2, 3)); // 6


// Arrow Function (ela não utiliza a palavra-chave function nem dá nome à função) - Exemplo 1
/* const sum = (a = 0, b = 0) => {
    return a +b;
};*/
const sum = (a = 0, b = 0) => a + b;

// Execução da Arrow Function
console.log("result 1", soma()); // 0
console.log("result 1", soma(5)); // 5
console.log("result 1", soma(5, 3)); // 8

// Arrow Function - Exemplo 2
const greetings = (apelido = "") => "Bom Dia! " + apelido;
// caso seja só um parâmetro, podemos tirar o parêntesis, mas também não podemos definir um valor default para ele
// ex: const greetings = apelido => "Bom dia!" + apelido;

// Execução da Arrow Function - 2
console.log("Greetings: ", greetings());
console.log("Greetings: ", greetings("Rodrigo"));