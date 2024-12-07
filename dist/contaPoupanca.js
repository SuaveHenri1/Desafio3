"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPonpanca = void 0;
const conta_1 = require("./conta");
class ContaPonpanca extends conta_1.Conta {
    calcularSaldo() {
        const totalCreditos = this.creditos.reduce((acc, credito) => acc + credito.valor, 0);
        const totalDebitos = this.debitos.reduce((acc, debito) => acc + debito.valor, 0);
        return totalCreditos - totalDebitos;
    }
}
exports.ContaPonpanca = ContaPonpanca;
