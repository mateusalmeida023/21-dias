/*EXERCÍCIO 01
let arrayUsuario = [];
let num = parseInt(prompt("Insira o número desejado:"));
let i;

for(i = 0; i < 10; i++){
    const numero = parseInt(prompt("Informe um número:"));

    arrayUsuario[i] = numero;
}

let indices = [];
let contador = 0;
for(i = 0; i < 10; i++){
    if(num === arrayUsuario[i]){
        indices[contador] = i;
        contador++;
    }    
}

console.log("O número " + num + " aparece nos índices " + indices);

*/

/*EXERCÍCIO 02
let arrayDeNumeros = [];


for(let i = 4; i >= 0; i--){
    let num = parseInt(prompt('Informe o número:'));

    arrayDeNumeros[i] = num;
}

console.log(arrayDeNumeros);

*/

/*EXERCÍCIO 03
let quant = parseInt(prompt("Quantos números irão ser inseridos:"));

let arrayNumeros = []
let arrayContrario = []
let j = quant-1;

for(let i = 0; i < quant; i++){
    let num = parseInt(prompt("Informe o " + (i+1) + "o número:"));
    
    arrayNumeros[i] = num;
    arrayContrario[j] = num;
    j--;
}

console.log("Array inserido: " + arrayNumeros);
console.log("Array contrário: " + arrayContrario);

*/

/*EXERCÍCIO 04

let num = parseInt(prompt("Insira um número:"));

let fibonacci = []

fibonacci[0] = num - 1;
fibonacci[1] = num;

for(let i = 2; i < 10; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Fibonacci: " + fibonacci);

*/

////////////////////////////////////////////////// DIA 11 ///////////////////////////////////////////

/*EXERCÍCIO 01

let arrayAlunos = []
let arrayNotas = []
let i = 1;
let soma = 0;

let continuar = true;

while(continuar){
    let aluno = prompt("Insira o nome do aluno:")
    arrayAlunos[i] = aluno;

    let nota = parseFloat(prompt("Insira a nota do aluno " + aluno + ":"))
    arrayNotas[i] = nota;

    soma += nota;    
    continuar = prompt("Se você deseja continuar digite 1:");
    if(continuar != 1){
        continuar = false;
        continue;
    }
    i++;

}

console.log("A nota dos alunos é: " + arrayNotas);

let media = soma / i;

console.log("A média geral das notas dos " + i + " alunos é: " + media);

*/

/*EXERCÍCIO 02

let modelos = []
let anos = []
let valor = []

let continuar = true;

let i = 0;

while(continuar){
    let m = prompt("Insira o modelo do carro:");
    modelos[i] = m;

    let a = parseInt(prompt("Insira o ano do carro:"))
    anos[i] = a;

    let v = parseFloat(prompt("Insira o valor do carro:"));
    valor[i] = v;

    i++;

    continuar = prompt("Você deseja cadastrar mais um carro: Se sim, se sim digite 1");
    if( continuar != 1 ){
        continuar = false;
        continue;
    }
}

for(let k = 0; k < i; k++){
    console.log(' ' + modelos[k] + ' , ' + anos[k] + ' , R$' + valor[k]);
}

let ordenaModelo = 0
let ordenaAno = 0
let ordenaValor = 0

for(let y = 0; y < i - 1; y++){
    for(let z = 0; z < i - y - 1; z++){
        if(valor[z] > valor[z+1]){
            
            ordenaModelo = modelos[z]
            modelos[z] = modelos[z+1]
            modelos[z+1] = ordenaModelo

            ordenaAno = anos[z]
            anos[z] = anos[z+1]
            anos[z+1] = ordenaAno

            ordenaValor = valor[z]
            valor[z] = valor[z+1]
            valor[z+1] = ordenaValor

        }
    }
}


console.log('Carros Ordenados:')
for(i = 0; i < valor.length; i++){
    console.log(modelos[i] + ' - ' + anos[i] + ' - R$' + valor[i]);
}

*/

////////////////////////////////////////////////// DIA 12 ///////////////////////////////////////////

/*
let arrayNomes = []
let arraySenhas = []

let continuar = true;
let cont = 0;

let nome;
let senha;

while(continuar){
    let opcao = prompt("Digite o que você deseja fazer: Cadastrar ( 1 ), Login ( 2 ), Excluir ( 3 ), Encerrar ( 4 )");

    switch(opcao){
        case "1":
            arrayNomes[cont] = prompt("Digite o nome de usuário:");
            arraySenhas[cont] = prompt("Informe a senha a ser cadastrada:");
            cont++;

            break;
        case "2":
            let login;
            nome = prompt("Digite o nome de usuário:");
            
            senha = prompt("Informe a sua senha:");

            for(let i = 0; i < arrayNomes.length; i++){
                if(nome === arrayNomes[i] && senha === arraySenhas[i]){
                    login = true;
                }
            }

            if(login){
                console.log("Login feito com sucesso!");
            }else{
                console.log("Login ou senha incorretos!");
            }
            break;

        case "3":
            nome = prompt("Digite o nome de usuário que deseja excluir:");

            let contaux = 0;
            let nomesAux = []
            let senhasAux = []

            for(i = 0; i < cont; i++){
                if(nome === arrayNomes[i]){
                    console.log("Cadastro excluído!");
                }else{
                    nomesAux[contaux] = arrayNomes[i];
                    senhasAux[contaux] = arraySenhas[i];
                    contaux++;
                }
            }

            arrayNomes = nomesAux;
            arraySenhas = senhasAux;
            cont--

            break;

        case "4":
            console.log("Programa encerrado!");
            continuar = false;
            break;
        
        default:
            console.log("Opcao inválida, escolha outra!");
            break;
    }

}

*/

   




