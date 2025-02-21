/*
EXERCÍCIO 01

let continuarr;

do {
    let nome = prompt("Insira seu nome:");
    let idade = parseInt(prompt("Insira sua idade:"));
    let peso = Number(prompt("Insira seu peso:"));
    let altura = Number(prompt("Insira sua altura:"));
    let profissao = prompt("Insira sua profissão:");

    console.log("Olá " + nome + ", você tem " + idade + " anos, é  " + profissao + ", tem " + altura + "m de altura e pesa " + peso + "kg");

    if( idade >= 18 ){
        console.log("Você está liberado para tomar umas geladas");
    }else{
        console.log("Sem geladas para você");
    }

    let imc = peso / (altura * altura);

    if( imc < 18.5 ){
        console.log("Magreza");
    }else if( imc >= 18.5 && imc < 24.9 ){
        console.log("Normal");
    }else if( imc >= 24.9 && imc < 30 ){
        console.log("Sobrepeso");
    }else if( imc > 30 ){
        console.log("Obesidade");
    }

    let anoNascimento = 2025 - idade;
    console.log("Você nasceu no ano de " + anoNascimento);

    for(let i = 0; i <= idade; i++){
        console.log(" " + anoNascimento + " - " + i + " anos de idade");
        anoNascimento++;
    }

    continuarr = prompt("Deseja inserir os dados novamente? ( s / n )");
} while (continuarr == "s");
*/

//EXERCÍCIO 2

let confirmar = "Não";
let salario = 0;

while(confirmar != "Sim"){
    let nome = prompt("Informe seu nome:");
    let idade  = parseInt(prompt("Informe sua idade:"));
    salario = parseFloat(prompt("Informe seu salário atual:"));

    console.log("Nome: " + nome + ", Idade: " + idade + ", Salário Atual: R$" + salario);
    confirmar = prompt("Os seus dados foram inseridos corretamente: ( Sim / Não )");
}

let aumento = 0.015
console.log("Previsao salarial para os próximos 10 anos: ")


for( let ano = 1; ano <= 10; ano++ ){
    salario += salario * aumento;
    aumento *= 2;

    console.log((2023 + ano) + " = R$ " + salario)
}

