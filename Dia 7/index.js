/*EXERCÍCIO 1

let condicao = true;
let maiorNota = 0;
let contHomem = 0;
let contMulherMaisSete = 0;
let totalNotas = 0;
let resposta = null;
let mediaGeral = 0;
let aluno = 0;
let nota = 0;
let sexo = null;

while(condicao){
    nota = Number(prompt("Digite a sua nota:"));
    sexo = prompt("Digite o seu sexo:");

    if(sexo === "Homem"){
        if(maiorNota < nota){
            maiorNota = nota;
        }
        contHomem++;
    }

    if(sexo === "Mulher"){
        if(nota > 7){
            contMulherMaisSete++;
        }
    }
    
    totalNotas += nota;
    aluno++;

    resposta = prompt("Você deseja cadastrar outra nota?");
    if(resposta === "Não"){
        mediaGeral = totalNotas / aluno; 
        condicao = false;
    }
}

console.log("A media geral foi " + mediaGeral);
console.log("A quantidade de homens é "+ contHomem);
console.log("A quantidade de mulheres que teve a nota acima de 7 é " + contMulherMaisSete);
console.log("A maior nota entre os homens foi de "+ maiorNota);
*/

/*EXERCÍCIO 2

let nome = null;
let cpf = 0;
let valor = 0;
let tipo = null;
let saldoTotal = 1500;
let continuar = 0;
let maiorValor = 0;
let totalValor = 0;
let quant = 0;

do {
    nome = prompt("Informe seu nome:");
    cpf = Number(prompt("Informe seu CPF:"));

    valor = Number(prompt("Qual o valor a ser depositado ou sacado:"));
    if(valor < 0){
        console.log("O valor é negativo!");
        break;
    }
    tipo = prompt("Você deseja sacar ou depositar?");

    if(tipo === "saque"){
        saldoTotal -= valor;
    }
    if(saldoTotal < 0){
        console.log("Você sacou um valor acima do seu saldo!");
        break;
    }
    if(tipo === "deposito"){
        saldoTotal += valor;
    }

    if(maiorValor < valor){
        maiorValor = valor;
    }
    totalValor += valor; 
    quant++;

    continuar = Number(prompt("Para continuar digite 1, para parar digite 2:"));

} while (continuar === 1);

console.log("O seu saldo total é de R$ " + saldoTotal);
console.log("O maior valor foi de R$ " + maiorValor);
console.log("A média dos valores foi de R$ "+ (totalValor / quant));
*/


