const list = array => {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const indice = index + 1;
        console.log(indice,element.titulo)
    }
    return "Fin de la impresion de tareas"
}
module.exports = list