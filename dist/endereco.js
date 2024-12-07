"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    constructor(cep, logradouro, numero, complemento, cidade, uf) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
    }
    toString() {
        return `${this.logradouro}, ${this.numero}${this.complemento ? `, ${this.complemento}` : ""} - ${this.cidade}/${this.uf} (CEP: ${this.cep})`;
    }
}
exports.Endereco = Endereco;
