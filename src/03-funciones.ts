// funciones
function getNombre(miNombre: string): string {
  
    return `Hola ${miNombre}`;

} // Función que recibe un string y devuelve un string

let miFuncion = (parametro: string): number => {

    return parseInt(parametro);

} // Asignación de la función a una variable

console.log(getNombre("Juan")); // Llamada a la función
console.log(miFuncion("2025")); // Llamada a la función