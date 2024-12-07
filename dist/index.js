"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("./pessoa");
const pessoa_2 = require("./pessoa");
const endereco_1 = require("./endereco");
const contaPoupanca_1 = require("./contaPoupanca");
// Teste para ver se esta funcionando
function autenticarUsuario(usuario) {
    if (usuario.autenticar()) {
        console.log(`usuario foi autenticado.`);
    }
    else {
        console.log(`usuario não foi autenticado.`);
    }
}
// Criando 2 funcionarios: 1 gerente e 1 atendente
const func1 = new pessoa_2.Funcionario("Andressa", "345.543.346-00", "9345-3456", "Atendente");
const func2 = new pessoa_2.Funcionario("Snake", "000.000.000-00", "0000-0000", "Gerente (BIG BOSS)");
// Criando os clientes
const cliente1 = new pessoa_1.Cliente("Henrique", "123.123.432-45", "3341-3453");
const cliente2 = new pessoa_1.Cliente("Jorge", "345.634.235-34", "9104-5632");
// Autenticando as pessoas
autenticarUsuario(cliente1);
autenticarUsuario(cliente2);
autenticarUsuario(func1);
autenticarUsuario(func2);
// Adicionando endereços
cliente1.adicionarEndereco(new endereco_1.Endereco("46235-642", "Rua Pindamonhagaba", "567", "Apto 653", "Far Far Away", "FFA"));
cliente1.listarEnderecos();
// Criando contas
const contaCorrente = new contaPoupanca_1.ContaPonpanca("001");
const contaPoupanca = new contaPoupanca_1.ContaPonpanca("002");
// Adicionando a conta ao cliente
cliente1.adicionarConta(contaCorrente);
cliente2.adicionarConta(contaPoupanca);
cliente1.listaContas();
cliente2.listaContas();
