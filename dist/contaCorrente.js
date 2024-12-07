"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const conta_1 = require("./conta");
class ContaCorrente extends conta_1.Conta {
    constructor(numero, limite = 0) {
        super(numero);
        this.limite = limite;
    }
    calcularSaldo() {
        const totalCreditos = this.creditos.reduce((acc, credito) => acc + credito.valor, 0);
        const totalDebitos = this.debitos.reduce((acc, debito) => acc + debito.valor, 0);
        return totalCreditos - totalDebitos + this.limite;
    }
    transferir(contaDestino, valor) {
        if (this.calcularSaldo() >= valor) {
            this.sacar(valor);
            contaDestino.depositar(valor);
            console.log(`Transferencia de R$${valor} realizado com sucesso para a conta ${contaDestino.numero}`);
        }
        else {
            console.log("Saldo insuficiente");
        }
    }
}
exports.ContaCorrente = ContaCorrente;
