
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

/*class Carro{
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

*/


/*EXERCÍCIO 01 REVISÃO

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

    mostrarConfig(){
        console.log("Tipo: " + this.Tipo)
        console.log("Processador: " + this.Processador)
        console.log("Vídeo: " + this.Video)
        console.log("Armazenamento: " + this.Armazenamento)
        console.log("Memória RAM: " + this.MemoriaRam)
        console.log("SSD: " + this.SSD)
    }

}

let tipo = prompt("Qual é o tipo do seu computador:")
let processador = prompt("Informe qual o modelo do seu processador:")
let video = prompt("Informe qual é sua placa de vídeo:")
let armazenamento = parseInt(prompt("Qual a capacidade do armazenamento:"))
let memoriaRam = parseInt(prompt("Informe qual a capacidade da Memória Ram do seu computador:"))
let ssd = prompt("Seu computador possui SSD?")

let computador = new Computador(tipo, processador, video, armazenamento, memoriaRam, ssd)

computador.mostrarConfig();

*/

//EXERCÍCIO 02

class Carro{
   Nome
   Potencia
   VelocidadeMaxima
   Aceleracao
   
   constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
   }

   tempoDistancia(distancia){
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
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
    
    consultaVencedor(){
        let menorTempo = this.Participantes[0].tempoDistancia(this.Distancia)
        let Vencedor = this.Participantes[0]

        for(let i = 1; i < this.Participantes.length; i++){
            let tempo = this.Participantes[i].tempoDistancia(this.Distancia)

            if(tempo < menorTempo){
                Vencedor = this.Participantes[i];
                menorTempo = tempo;
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

corrida.consultaVencedor()
corrida.ExibirVencedor()


    











