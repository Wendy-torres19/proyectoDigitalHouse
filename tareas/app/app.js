
let tareas = [];

let tarea1 = {
    titulo: "Tarea Uno",
    descripcion: "Descripcion de la tarea 1",
    estado: true
}

let tarea2 = {
    titulo: "Tarea Dos",
    descripcion: "Descripcion de la tarea 2",
    estado: false
}

let tarea3 = {
    titulo: "Tarea Tres",
    descripcion: "Descripcion de la tarea 3",
    estado: true
}

tareas.push(tarea1);
tareas.push(tarea2);
tareas.push(tarea3);

const list = require("./functions/list")

const action = process.argv[2]


switch (action) {
    case "listar":
        list(tareas)    
    break;

    default:
        console.log("No se encontro una accion")
        console.log("Las acciones validas son:");
        console.log("listar: listamos todas las tareas");
    break;
}