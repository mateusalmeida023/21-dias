/*let fome = prompt('Você está com fome?');
let dinheiro = prompt('Você tem dinheiro?');
let aberto = prompt('O restaurante está aberto?');

if(fome === "Não" || dinheiro === "Não"){
    console.log('Hoje a janta será em casa!')
}
if((fome === "Sim" && dinheiro === "Sim") && aberto === "Não"){
    console.log('Peça um delivery!')
}
if(fome === "Sim" && dinheiro === "Sim" && aberto === "Sim"){
    console.log('Hoje o jantar será no restaurante preferido!')
}
*/

let nome = prompt('Digite seu nome:');
let idade = Number(prompt('Digite sua idade:'));
let habilitacao = prompt('Possui habilitação:');
let carro = prompt('Você possui um carro:');

if(idade < 18 || habilitacao === "Não"){
    console.log(" " + nome +", você não pode ditigir")
}
if((idade >= 18 && habilitacao === "Sim") && carro === "Não"){
    console.log(" " + nome + ", você pode dirigir mas não tem um carro")
}
if(idade >= 18 && habilitacao === "Sim" && carro === "Sim"){
    console.log(" " + nome + ", você será o motorista!")
}

