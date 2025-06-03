// Solo se usa let y const en typescript, no se usa var

// Definición de variables con tipos primitivos
let nombreUsuario: string = "Juan";
let apellidosUsuario: string = "Salazar";

console.log(`Nombre: ${nombreUsuario}, Apellidos: ${apellidosUsuario}`);

// Definición de variables con tipos primitivos - const
const nacionalidadUsuario: string = "Colombiano";

// nacionalidadUsuario = "Mexicano"; // Esto causará un error porque 'const' no permite reasignación

// string
let pais: string = "Colombia";
console.log(`País: ${pais}`);

// number
let edadUsuario: number = 40;
console.log(`Edad: ${edadUsuario}`);

// boolean
let verdadero: boolean = true;
console.log(`¿Es verdadero? ${verdadero}`);

// Any
let variableCualquiera: any = "Esto puede ser cualquier cosa, string en este caso";
console.log(`Variable any: ${variableCualquiera}`);
variableCualquiera = 42; // Ahora es un número
console.log(`Variable any ahora es un número: ${variableCualquiera}`);

// Arrays
let lenguajes: string[] = ["JavaScript", "TypeScript", "Python"];
console.log(`Lenguajes: ${lenguajes.join(", ")}`);

let decadas: Array<number> = [1980, 1990, 2000, 2010];
console.log(`Décadas: ${decadas.join(", ")}`);

// Tipos especiales
let sinDefinir: undefined = undefined;
let nulo: null = null;
console.log(`Sin definir: ${sinDefinir}, Nulo: ${nulo}`);