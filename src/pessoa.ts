import { IUsuario } from "./IUsuario";
import { Endereco } from "./endereco";
import { Conta } from "./conta";


export abstract class Pessoa implements IUsuario {
    constructor(
        public nome: string,
        public cpf: string,
        public telefone: string
    ) {}

    autenticar(): boolean {
        return true;
    }
}

export class Cliente extends Pessoa {
    enderecos: Endereco[] = [];
    contas: Conta[] = [];

    adicionarEndereco(endereco: Endereco): void {
        this.enderecos.push(endereco);
    }

    listarEnderecos(): void {
        console.log("Endereços");
        this.enderecos.forEach((endereco, index) => console.log(`${index + 1}. ${endereco.toString()}`));
    }

    adicionarConta(conta: Conta): void {
        this.contas.push(conta);
        console.log(`Conta ${conta.numero} adicionada ao cliente ${this.nome}.`);
    }

    listaContas(): void {
        console.log(`Contas do cliente ${this.nome}:`);
        this.contas.forEach((conta, index) => console.log(`${index + 1}. Conta Numero: ${conta.numero}`));
    }
}

export class Funcionario extends Pessoa {
    constructor(
        nome: string,
        cpf: string,
        telefone: string,
        public cargo: string
    ) {
        super(nome, cpf, telefone);
    }
}