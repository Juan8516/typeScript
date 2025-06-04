"use strict";
//POO en typescript
class Gato {
    //Propiedades o atributos
    constructor(nombre, edad, raza) {
        this.nombre = nombre; // Propiedad de instancia
        this.edad = edad; // Propiedad de instancia
        this.raza = raza; // Propiedad de instancia
    }
    //Métodos
    maullar() {
        console.log(`${this.nombre} dice: ¡Miau!`); // Método de instancia
    }
    presentar() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy de la raza ${this.raza}.`); // Método de instancia
    }
    getRaza() {
        return this.raza; // Método de instancia
    }
    setRaza(nuevaRaza) {
        this.raza = nuevaRaza; // Método de instancia
    }
    // set es un método que asigna/modifica un valor (guardarEdad actualiza this.edad).
    // get es un método que obtiene/retorna un valor (sacarEdad devuelve this.edad).
    // (En este caso: set guarda una nueva edad y get recupera la edad almacenada).
    set guardarEdad(nuevaEdad) {
        this.edad = nuevaEdad; // Método de instancia
    }
    get sacarEdad() {
        return this.edad; // Método de instancia
    }
    //metodos estaticos: Los métodos estáticos son funciones asociadas a la clase (no a instancias) 
    // que se llaman directamente desde la clase, sin necesidad de crear un objeto.
    static info() {
        console.log("Los gatos son animales domésticos muy populares."); // Método estático
    }
    static infoRaza(raza) {
        console.log(`La raza ${raza} es conocida por su belleza y carácter.`); // Método estático
    }
}
let miGato1 = new Gato("Tanque", 2, "Siames"); // Crear una instancia de la clase Gato
miGato1.maullar(); // Llamar al método maullar
miGato1.presentar(); // Llamar al método presentar
console.log("");
let miGato2 = new Gato("Mimi", 3, "Persa"); // Crear otra instancia de la clase Gato
miGato2.maullar(); // Llamar al método maullar  
miGato2.presentar(); // Llamar al método presentarse
miGato2.setRaza("Bengalí"); // Cambiar la raza del gato utilizando el método setRaza
console.log("");
//Getter y Setter
console.log(miGato1.getRaza()); // Llamar al método getRaza para obtener la raza del gato
console.log(miGato2.getRaza()); // Llamar al método getRaza para obtener la raza del gato
console.log("");
miGato1.guardarEdad = 4; // Cambiar la edad del gato utilizando el setter
console.log(miGato1.sacarEdad); // Llamar al método getRaza para obtener la raza del gato
console.log("");
//metodos estaticos
Gato.info(); // Llamar al método estático info de la clase Gato
Gato.infoRaza("Siames"); // Llamar al método estático infoRaza de la clase Gato
console.log("");
// Herencia: La herencia permite crear nuevas clases basadas en clases existentes,
// heredando sus propiedades y métodos. Esto promueve la reutilización del código y la creación de jerarquías de clases.
// En JavaScript, la herencia se puede implementar utilizando la palabra clave extends.
class SuperGato extends Gato {
    // La clase SuperGato hereda de la clase Gato
    // Propiedades o atributos adicionales
    constructor(nombre, edad, raza, superpoder) {
        super(nombre, edad, raza); // Llamar al constructor de la clase padre (Gato)
        this.superpoder = superpoder; // Propiedad adicional de la subclase
    }
    setSuperpoder(nuevoSuperpoder) {
        this.superpoder = nuevoSuperpoder; // Método de instancia
    }
    getSuperpoder() {
        return this.superpoder; // Método de instancia
    }
    mostrarSuperpoder() {
        console.log(`${this.nombre} tiene el superpoder de ${this.superpoder}.`); // Método de instancia
    }
}
let miSuperGato = new SuperGato("Manolo", 1, "Persa", "volar"); // Crear una instancia de la clase SuperGato
miSuperGato.maullar(); // Llamar al método maullar de la clase padre (Gato)
miSuperGato.mostrarSuperpoder(); // Llamar al método mostrarSuperpoder de la clase SuperGato 
