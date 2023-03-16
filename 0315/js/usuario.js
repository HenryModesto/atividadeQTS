export class Usuario {

    //CONSTRUTOR
    constructor(nome, cpf, renda) {

        this.nome = nome;
        this.cpf = cpf;
        this.renda = renda;
        this.aliquota = this.calcularAliquota();
        this.imposto = this.calcularImposto();
    }

    //CALCULA ALIQUOTA
    calcularAliquota() {

        if (this.renda <= 22847.76) {
            return 0;
        }
        else if (this.renda > 22847.76 && this.renda <= 33919.80) {
            return 7.5;
        }
        else if (this.renda > 33919.80 && this.renda <= 45012.60) {
            return 15;
        }
        else if (this.renda > 45012.60 && this.renda <= 55976.16) {
            return 22.5;
        }
        else {
            return 27.5;
        }
    }

    //CALCULA IMPOSTO
    calcularImposto() {
        if (this.aliquota == 0) {
            return 0;
        }   
        else {
            return ((this.renda * this.aliquota) / 100 ).toFixed(2);
        }
    }

}



