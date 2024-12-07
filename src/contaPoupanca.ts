import { Conta } from "./conta";

export class ContaPonpanca extends Conta {
    calcularSaldo(): number {
        const totalCreditos = this.creditos.reduce((acc, credito) => acc + credito.valor, 0);
        const totalDebitos = this.debitos.reduce((acc, debito) => acc + debito.valor, 0);

        return totalCreditos - totalDebitos;
    }
}