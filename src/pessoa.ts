import { IUsuario } from "./IUsuario";
import { Endereco } from "./endereco";


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

    adicionarEndereco(endereco: Endereco): void {
        this.enderecos.push(endereco);
    }

    listarEnderecos(): void {
        console.log("Endereços");
        this.enderecos.forEach((endereco, index) => console.log(`${index + 1}. ${endereco.toString()}`));
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