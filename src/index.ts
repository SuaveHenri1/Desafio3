import {Cliente}from "./pessoa";
import { Funcionario } from "./pessoa";
import { Endereco } from "./endereco";
import { ContaPonpanca } from "./contaPoupanca";

// Teste para ver se esta funcionando

function autenticarUsuario(usuario: {autenticar: () => boolean}) {
    if (usuario.autenticar()) {
        console.log(`usuario foi autenticado.`);
    }
    else {
        console.log(`usuario não foi autenticado.`)
    }
}

// Criando 2 funcionarios: 1 gerente e 1 atendente

const func1 = new Funcionario("Andressa", "345.543.346-00", "9345-3456", "Atendente");
const func2 = new Funcionario("Snake", "000.000.000-00", "0000-0000", "Gerente (BIG BOSS)");

// Criando os clientes

const cliente1 = new Cliente("Henrique", "123.123.432-45", "3341-3453");
const cliente2 = new Cliente("Jorge", "345.634.235-34", "9104-5632");

// Autenticando as pessoas

autenticarUsuario(cliente1);
autenticarUsuario(cliente2);
autenticarUsuario(func1);
autenticarUsuario(func2);

// Adicionando endereços

cliente1.adicionarEndereco(new Endereco("46235-642", "Rua Pindamonhagaba", "567", "Apto 653", "Far Far Away", "FFA"));

cliente1.listarEnderecos();

// Criando contas
const contaCorrente = new ContaPonpanca("001");
const contaPoupanca = new ContaPonpanca("002");

// Adicionando a conta ao cliente

cliente1.adicionarConta(contaCorrente);
cliente2.adicionarConta(contaPoupanca);

cliente1.listaContas();
cliente2.listaContas();