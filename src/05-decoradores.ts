// Decoradores en TypeScript
// Decoradores basicos
function nitro(target: Function) {
    console.log("Carro equipado con nitro", target.name);
}

@nitro
class Carro {
    constructor() {
        console.log("Carro creado");
    }
    
}

let carro = new Carro();