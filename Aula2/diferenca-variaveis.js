console.log("\n=== DIFERENÇA VARIÁVEIS ===")

/* Emascript
Em 2015 (Antes Jun) - ES5 (var)
Em 2015(Depois Jun) - ES6 (let, const)

Hoje, o uso do var foi descontinuado em favor do uso do let e do const.

Var - pode ser redeclarada e redefinida/reatribuida*/
var escola = "Lets Code"; 
var escola = "Ada"; //redeclaração (recriar na Memória) - PERMITIDA
var escola = true; //redeclaração (recriar na Memória) - PERMITIDA
escola = 10; //reatribuição (mudar o valor) - PERMITIDA
escola = null; //reatribuição (mudar o valor) - PERMITIDA
console.log(escola);

// Let - não pode ser redeclarada, mas pode ser redefinida/reatribuida
let company = "Let's Code"
// let company = "Ada" // redeclaração (recriar na Memória) - PROIBIDO
company = "Ada" //reatribuição (mudar o valor) - PERMITIDA
console.log("company", company)

// Const - não pode ser redeclarada nem redefinida/reatribuída
const empresa = "Let's Code"
// const empresa = "Ada" // redeclaração (recriar na Memória) - PROIBIDO
// empresa = "Ada" // reatribuição (mudar o valor) - PROIBIDO
console.log("empresa", empresa)
