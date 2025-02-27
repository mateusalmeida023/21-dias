
/* EXERCÍCIO 01

class Computador{
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    SSD
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.Tipo = tipo
        this.Processador = processador
        this.Video = video
        this.Armazenamento = armazenamento
        this.MemoriaRam = memoriaRam
        this.SSD = ssd
    }

    ExibirInformações(){
        console.log("Informações do computador:")
        console.log("Tipo: " + this.Tipo)
        console.log("Processador: "  + this.Processador)
        console.log("Vídeo: " + this.Video)
        console.log("Armazenamento: " + this.Armazenamento)
        console.log("Memória Ram: " + this.MemoriaRam)
        console.log("SSD: " + this.SSD)

    }
}

let pcMateus = new Computador("Desktop", "Ryzen 5", "Dedicado", "1000gb", "16gb", true);
pcMateus.ExibirInformações();

*/

//EXERCÍCIO 02

class Carro{
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao

    constructor(nome, potencia, velocidademaxima, aceleracao){
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidademaxima
        this.Aceleracao = aceleracao
    }
    
    calculo(distancia){
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao);
        return resultado;
    }
}


class Corrida{
    Nome
    Tipo
    Distancia
    Participantes
    Vencedor

    constructor(nome, tipo, distancia){
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Participantes = [] 
        this.Vencedor = ""
    }

    DefinirVencedor(){
        let menorTempo = this.Participantes[0].calculo(this.Distancia);
        let vencedor = this.Participantes[0]

        for(let i = 1; i < this.Participantes.length; i++){
            let tempo = this.Participantes[i].calculo(this.Distancia);
            if(tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.Participantes[i]
            }


        }
        return this.Vencedor = vencedor;
    }

    ExibirVencedor(){
        alert("O vencedor é: " + this.Vencedor.Nome)
    }


}

let corrida = new Corrida("Monza", "Fórmula 1", 60000);

corrida.Participantes[0] = new Carro("Kicks", 120, 160, 5);
corrida.Participantes[1] = new Carro("Fiesta", 160, 140, 8);
corrida.Participantes[2] = new Carro("Peugeot", 220, 190, 10);

corrida.DefinirVencedor()
corrida.ExibirVencedor()


