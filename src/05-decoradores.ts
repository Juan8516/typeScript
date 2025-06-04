// Decoradores en TypeScript

// Decoradores basicos
function nitro(target: Function) {
    console.log("Carro equipado con nitro", target.name);
}

// Decoradores de propiedades
function turbo(mensaje: string) {

    return function (target: any) {
        console.log(`Mi ${target.name} tiene turbo: ${mensaje}`);
    }
}

// Decoradores para crear metodos de clase
function AgregarMetodo(target: any) {
    target.prototype.acelerar = function() {
        console.log("Acelerando...con metodo decorado");
    }
}

interface Carro {
    acelerar: () => void;
}

@AgregarMetodo
class Carro {
    constructor() {
        console.log("Carro creado");
    }
    
}

let carro = new Carro();
carro.acelerar(); //Error con intencion, sin agregar interface