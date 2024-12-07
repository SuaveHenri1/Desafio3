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
        this.contas = [];
    }
    adicionarEndereco(endereco) {
        this.enderecos.push(endereco);
    }
    listarEnderecos() {
        console.log("Endereços");
        this.enderecos.forEach((endereco, index) => console.log(`${index + 1}. ${endereco.toString()}`));
    }
    adicionarConta(conta) {
        this.contas.push(conta);
        console.log(`Conta ${conta.numero} adicionada ao cliente ${this.nome}.`);
    }
    listaContas() {
        console.log(`Contas do cliente ${this.nome}:`);
        this.contas.forEach((conta, index) => console.log(`${index + 1}. Conta Numero: ${conta.numero}`));
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
