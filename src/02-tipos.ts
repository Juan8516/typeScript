// Solo se usa let y const en typescript, no se usa var

// Definición de variables con tipos primitivos
let nombreUsuario: string = "Juan";
let apellidosUsuario: string = "Salazar";

console.log(`Nombre: ${nombreUsuario}, Apellidos: ${apellidosUsuario}`);

// Definición de variables con tipos primitivos - const
const nacionalidadUsuario: string = "Colombiano";

// nacionalidadUsuario = "Mexicano"; // Esto causará un error porque 'const' no permite reasignación

// String
let pais: string = "Colombia";
console.log(`País: ${pais}`);

// Number
let edadUsuario: number = 40;
console.log(`Edad: ${edadUsuario}`);

// Boolean
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

// Mezcla de tipos en arrays
let decadas: Array<number|string> = [1980, 1990, 2000, 2010, "2020"]; // Array con mezcla de tipos
console.log(`Décadas: ${decadas.join(", ")}`);

// Tipos especiales
let sinDefinir: undefined = undefined;
let nulo: null = null;
console.log(`Sin definir: ${sinDefinir}, Nulo: ${nulo}`);

// Tipos personalizados
type Usuario = string | number | boolean;
let nombreYedad: Usuario = "Carlos"; // Puede ser un string
let edadYactivo: Usuario = 30; // Puede ser un número
console.log(`Nombre y edad: ${nombreYedad}, Edad y activo: ${edadYactivo}`);