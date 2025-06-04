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

@turbo("¡Acelera rápido!")
class Carro {
    constructor() {
        console.log("Carro creado");
    }
    
}

let carro = new Carro();