"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const credito_1 = require("./credito");
const debito_1 = require("./debito");
class Conta {
    constructor(numero) {
        this.numero = numero;
        this.debitos = [];
        this.creditos = [];
        this.saldo = 0;
    }
    depositar(valor) {
        const credito = new credito_1.Credito(valor);
        this.creditos.push(credito);
        console.log(`Deposito de R$${valor} realizado com sucesso.`);
    }
    sacar(valor) {
        const saldoAtual = this.calcularSaldo();
        if (saldoAtual >= valor) {
            const debito = new debito_1.Debito(valor);
            this.debitos.push(debito);
            console.log(`Saque re R$${valor} realizado com sucesso.`);
        }
        else {
            console.log("Saldo insuficiente");
        }
    }
}
exports.Conta = Conta;
