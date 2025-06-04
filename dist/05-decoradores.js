"use strict";
// Decoradores en TypeScript
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decoradores basicos
function nitro(target) {
    console.log("Carro equipado con nitro", target.name);
}
// Decoradores de propiedades
function turbo(mensaje) {
    return function (target) {
        console.log(`Mi ${target.name} tiene turbo: ${mensaje}`);
    };
}
// Decoradores para crear metodos de clase
function AgregarMetodo(target) {
    target.prototype.acelerar = function () {
        console.log("Acelerando...con metodo decorado");
    };
}
let Carro = class Carro {
    constructor() {
        console.log("Carro creado");
    }
};
Carro = __decorate([
    AgregarMetodo
], Carro);
let carro = new Carro();
carro.acelerar(); //Error con intencion, sin agregar interface
