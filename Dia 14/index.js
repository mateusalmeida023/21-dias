
/*
function cadastro()
{
    let porcent;
    let salComAumento;
    let nome = prompt("Informe o nome do usuário:");

    let salario = Number(prompt("Informe o salário do usuário:"));

    calcAumento(salario)

    mostraDados(nome, salario, porcent, salComAumento)
}

function calcAumento(salario)
{

    if(salario <= 1500)
    {
        porcent = 20;
        salComAumento = salario + ( salario * 1.20 )
    }
    else if(salario > 1500 && salario <= 2000)
    {
        porcent = 15;
        salComAumento = salario + ( salario * 1.15 )
    }
    else if(salario > 2000 && salario <= 3000)
    {
        porcent = 10;
        salComAumento = salario + ( salario * 1.10 )
    }
    else
    {
        porcent = 5;
        salComAumento = salario + ( salario * 1.05 )
    }
}

function mostraDados(nome, salario, porcent, salComAumento){
    console.log("Nome : " + nome + " /   Salário : R$ " + salario + " /    % de Aumento : " + porcent + " %  /   Salário Ajustado : R$ " + salComAumento)
}

function novoCad(continuar){
    continuar = prompt("Você deseja inserir um novo cadastro se sim digite 1:");
    return continuar;
}

do{
    let continuar = 1;
    cadastro();

    novoCad(continuar);

}while(continuar == 1);
*/
var porcent
var salComAumento

function cadastro() {
    let nome = prompt("Informe o nome do usuário:");
    let salario = Number(prompt("Informe o salário do usuário:"));

    calcAumento(salario);

    mostraDados(nome, salario, porcent, salComAumento);
}

function calcAumento(salario) {
    if (salario <= 1500) {
        porcent = 20;
        salComAumento = salario + (salario * (porcent / 100)); // Corrigido o cálculo
    } else if (salario > 1500 && salario <= 2000) {
        porcent = 15;
        salComAumento = salario + (salario * (porcent / 100)); // Corrigido o cálculo
    } else if (salario > 2000 && salario <= 3000) {
        porcent = 10;
        salComAumento = salario + (salario * (porcent / 100)); // Corrigido o cálculo
    } else {
        porcent = 5;
        salComAumento = salario + (salario * (porcent / 100)); // Corrigido o cálculo
    }
}

function mostraDados(nome, salario, porcent, salComAumento) {
    console.log("Nome : " + nome + " /   Salário : R$ " + salario + " /    % de Aumento : " + porcent + " %  /   Salário Ajustado : R$ " + salComAumento);
}

function novoCad() {
    let continuar = prompt("Você deseja inserir um novo cadastro? Se sim digite 1:");
    return continuar == 1;
}

do {
    cadastro();
} while (novoCad()); 