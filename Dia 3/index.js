//prompt()
//abre uma janela para o usuario inserir um valor

//console.log(prompt())

//let entradaDeUsuario = prompt();
//isso espera texto (string)

//console.log(2025 + entradaDeUsuario)

let nome = prompt("Digite seu nome");

let idade = parseInt(prompt("Digite sua idade"));

let altura = Number(prompt("Digite sua altura"));

let peso = Number(prompt("Digite seu peso"));

let anoDeNascimento = 2025 - idade;

let imc = peso / ( altura * altura );

console.log("Ola " + nome + " você tem "+ idade + " anos, nasceu em " + anoDeNascimento +", tem " + altura + " de altura, pesa " + peso +"kg seu IMC é "+imc+"Kg/m2");
