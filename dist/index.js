"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("./pessoa");
const pessoa_2 = require("./pessoa");
const endereco_1 = require("./endereco");
// Teste para ver se esta funcionando
function autenticarUsuario(usuario) {
    if (usuario.autenticar()) {
        console.log(`usuario foi autenticado.`);
    }
    else {
        console.log(`usuario não foi autenticado.`);
    }
}
const cliente = new pessoa_1.Cliente("Henrique", "123.123.432-45", "3341-3453");
const funcionario = new pessoa_2.Funcionario("Snake", "000.000.000-00", "0000-0000", "BIG BOSS");
autenticarUsuario(cliente);
autenticarUsuario(funcionario);
cliente.adicionarEndereco(new endereco_1.Endereco("46235-642", "Rua Pindamonhagaba", "567", "Apto 653", "Far Far Away", "FFA"));
cliente.listarEnderecos();
