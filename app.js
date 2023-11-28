class Heroi{
    constructor( nome, idade, tipo){
        this.nome = nome;
        this.idade = idade; 
        this.tipo = tipo;
    }

    atacar(){
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'margia'
                break;
            case 'guerreiro':
                ataque = 'espada'
                break;
            case 'monge':
                ataque = 'Artes Marciais'
                break;
            case 'ninja':
                ataque = 'shuriken'
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque} e sua idade é ${this.idade} anos!`)
    }
}

const heroi1 = new Heroi('Gandalf', 200, 'mago')
heroi1.atacar();

const heroi2 = new Heroi('Aragorn', 23 , 'guerreiro');
heroi2.atacar();