import { Credito } from "./credito";
import { Debito } from "./debito";

export abstract class Conta {
    protected debitos: Debito[] = [];
    protected creditos: Credito[] = [];
    protected saldo: number = 0;

    constructor(
        public numero: string
    ) {}

    depositar(valor: number): void {
        const credito = new Credito(valor);
        this.creditos.push(credito);
        console.log(`Deposito de R$${valor} realizado com sucesso.`)
    }

    sacar(valor: number): void {
        const saldoAtual = this.calcularSaldo();
        if(saldoAtual >= valor) {
            const debito = new Debito(valor);
            this.debitos.push(debito);
            console.log(`Saque re R$${valor} realizado com sucesso.`)
        }
        else {
            console.log("Saldo insuficiente");
        }
    }

    abstract calcularSaldo(): number;
}