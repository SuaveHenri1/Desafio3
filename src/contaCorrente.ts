import { Conta } from "./conta";
import { Credito } from "./credito";
import { Debito } from "./debito";

export class ContaCorrente extends Conta {
    constructor(
        numero: string,
        public limite: number = 0
    ) {
        super(numero);
    }

    calcularSaldo(): number {
        const totalCreditos = this.creditos.reduce((acc, credito) => acc + credito.valor, 0);
        const totalDebitos = this.debitos.reduce((acc, debito) => acc + debito.valor, 0);

        return totalCreditos - totalDebitos + this.limite;
    }

    transferir(contaDestino: Conta, valor: number): void {
        if (this.calcularSaldo() >= valor) {
            this.sacar(valor);
            contaDestino.depositar(valor);
            console.log(`Transferencia de R$${valor} realizado com sucesso para a conta ${contaDestino.numero}`);
        } else {
            console.log("Saldo insuficiente");
        }
    }
}