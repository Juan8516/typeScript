"use strict";
// Solo se usa let y const en typescript, no se usa var
// Definición de variables con tipos primitivos
let nombreUsuario = "Juan";
let apellidosUsuario = "Salazar";
console.log(`Nombre: ${nombreUsuario}, Apellidos: ${apellidosUsuario}`);
// Definición de variables con tipos primitivos - const
const nacionalidadUsuario = "Colombiano";
// nacionalidadUsuario = "Mexicano"; // Esto causará un error porque 'const' no permite reasignación
// String
let pais = "Colombia";
console.log(`País: ${pais}`);
// Number
let edadUsuario = 40;
console.log(`Edad: ${edadUsuario}`);
// Boolean
let verdadero = true;
console.log(`¿Es verdadero? ${verdadero}`);
// Any
let variableCualquiera = "Esto puede ser cualquier cosa, string en este caso";
console.log(`Variable any: ${variableCualquiera}`);
variableCualquiera = 42; // Ahora es un número
console.log(`Variable any ahora es un número: ${variableCualquiera}`);
// Arrays
let lenguajes = ["JavaScript", "TypeScript", "Python"];
console.log(`Lenguajes: ${lenguajes.join(", ")}`);
// Mezcla de tipos en arrays
let decadas = [1980, 1990, 2000, 2010, "2020"]; // Array con mezcla de tipos
console.log(`Décadas: ${decadas.join(", ")}`);
// Tipos especiales
let sinDefinir = undefined;
let nulo = null;
console.log(`Sin definir: ${sinDefinir}, Nulo: ${nulo}`);
let nombreYedad = "Carlos"; // Puede ser un string
let edadYactivo = 30; // Puede ser un número
console.log(`Nombre y edad: ${nombreYedad}, Edad y activo: ${edadYactivo}`);
