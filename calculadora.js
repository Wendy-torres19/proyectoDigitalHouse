const suma = require("./modulos/suma")
const resta = require("./modulos/resta")
const multi = require("./modulos/multi")
const divi = require("./modulos/divi")

let resultadoSuma = suma(1,2);
console.log(resultadoSuma);

let resultadoResta = resta(5,2);
console.log(resultadoResta);

let resultadoMulti = multi(3,0);
console.log(resultadoMulti);

let resultadoDivi = divi(3,0);
console.log(resultadoDivi);