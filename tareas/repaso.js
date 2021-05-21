/*
    if(condicion || predicado){
        accion true
    }else{
        accion false
    }
*/

// (condicion || predicado) ? accion true : accion false

/*
    if(condicion || predicado){
        accion true
    }else if(condicion || predicado){
        accion true
    }else{
        accion false
    }
*/

// (condicion || predicado) ? accion true : (condicion || predicado) ? accion true : action false

// switch String Number
/*
switch (String) {
    case value1:
        action 
    break;

    case value2:
        action 
    break;

    default:
        action default
}
*/
/*
switch ("Pedro") {
    case "Pedro":
        console.log("TU NOMBRE ES PEDRO")    
    break;

    default:
        console.log("NO TE LLAMAS PEDRO")
        break;
}
*/
/*
let calification = 4
switch (calification) {
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("APROVASTE EL EXAMEN");
    break;

    default:
        console.log("NO APROVASTE");
    break;
}*/

// Objetos Literales
/*
let obj = {
    color: "green",
    pintar: function () {
        return console.log("Pintar de color",this.color)
    }
}

obj.pintar()

let obj2 = {
    color: "red",
    pintar: () => console.log("Pintar de color",obj2.color)
}

let obj3 = {}

obj3.color = "yellow"

delete obj3.color;

*/

// Funciones Flecha / Arrow
/*
const nombre = () => {
    return console.log("Marcos")
} 
*/

// const nombre = () => console.log("Marcos") 
/*
const nombre = (nombre,apellido) => console.log(nombre,apellido)

nombre("Lucas","Montero")
*/

// Ciclos
let array = ["Lucas", "Mateo", "Marcos"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    (index % 3 == 0) ? console.log(element) : null
}












