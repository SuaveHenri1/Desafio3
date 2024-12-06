"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = exports.Cliente = exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, cpf, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }
    autenticar() {
        return true;
    }
}
exports.Pessoa = Pessoa;
class Cliente extends Pessoa {
    constructor() {
        super(...arguments);
        this.enderecos = [];
    }
    adicionarEndereco(endereco) {
        this.enderecos.push(endereco);
    }
    listarEnderecos() {
        console.log("Endereços");
        this.enderecos.forEach((endereco, index) => console.log(`${index + 1}. ${endereco.toString()}`));
    }
}
exports.Cliente = Cliente;
class Funcionario extends Pessoa {
    constructor(nome, cpf, telefone, cargo) {
        super(nome, cpf, telefone);
        this.cargo = cargo;
    }
}
exports.Funcionario = Funcionario;
