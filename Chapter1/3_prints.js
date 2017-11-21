console.log("Impresiones de tipo")
console.log(typeof 4.5);
console.log(typeof "x");

//Console distinta
console.log("");
console.log("Numeros positivos");
console.log(- (10 - 22));

//booleans
console.log("");
console.log("Comparacion de mayores");
console.log(3 > 2);
console.log(3 < 2);

//Comparación de cadenas
console.log("");
console.log("Comparacion de cadenas");
console.log("Aardvark" < "Zoroaster");
//-> true
console.log("Itchy" !== "Scratchy");
//-> true

console.log("");
console.log(NaN == NaN);
//-> false

//Operadores -> &&
console.log("");
console.log("Comparacion con operadores: &&");
console.log(true && false);
//-> false
console.log(true && true);
//-> true

//Operadores-> ||
console.log("");
console.log("Comparacion con operaciones de ||");
console.log(false || true);
// -> true
console.log(false || false);
// -> false

//Operaciones dentro de console
console.log("");
console.log("Operaciones dentro de console -> \"1 + 1 == 2 && 10 * 10 > 50\"");
console.log(1 + 1 == 2 && 10 * 10 > 50);

console.log("");
console.log("Operados: ? en las impresiones	");
console.log(true ? 1 : 2);
// -> 1
console.log(false ? 1 : 2);
// -> 2