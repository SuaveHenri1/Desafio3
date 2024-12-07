"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debito = void 0;
class Debito {
    constructor(valor, data = new Date()) {
        this.valor = valor;
        this.data = data;
    }
}
exports.Debito = Debito;
