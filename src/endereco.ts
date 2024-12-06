export class Endereco {
    constructor(
        public cep: string,
        public logradouro: string,
        public numero: string,
        public complemento: string,
        public cidade: string,
        public uf: string
    ) {}

    toString(): string {
        return `${this.logradouro}, ${this.numero}${this.complemento ? `, ${this.complemento}` : ""} - ${this.cidade}/${this.uf} (CEP: ${this.cep})`;
    }
}
