import {Cliente}from "./pessoa";
import { Funcionario } from "./pessoa";
import { Endereco } from "./endereco";

// Teste para ver se esta funcionando

function autenticarUsuario(usuario: {autenticar: () => boolean}) {
    if (usuario.autenticar()) {
        console.log(`usuario foi autenticado.`);
    }
    else {
        console.log(`usuario não foi autenticado.`)
    }
}

const cliente = new Cliente("Henrique", "123.123.432-45", "3341-3453");
const funcionario = new Funcionario("Snake", "000.000.000-00", "0000-0000", "BIG BOSS");

autenticarUsuario(cliente);
autenticarUsuario(funcionario);

cliente.adicionarEndereco(new Endereco("46235-642", "Rua Pindamonhagaba", "567", "Apto 653", "Far Far Away", "FFA"));


cliente.listarEnderecos();