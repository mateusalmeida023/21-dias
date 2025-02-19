/*let num1 = Number(prompt('Digite o primeiro número:'));
let num2 = Number(prompt('Digite o segundo número:'));

let operacao = prompt('Digite a operação a ser feita entre estes dois números(+ ; - ; x ; /):');

switch(operacao){
    case "+":
        console.log(''+ num1 +''+ operacao +''+ num2 +' = '+ (num1+num2))
        break;
    case "-":
        console.log(''+ num1 +''+ operacao +''+ num2 +' = '+ (num1-num2))
        break;
    case "x":
        console.log(''+ num1 +''+ operacao +''+ num2 +' = '+ (num1*num2))
        break;
    case "/":
        console.log(''+ num1 +''+ operacao +''+ num2 +' = '+ (num1/num2))
        break;
    default:
        console.log('Inválido!')
}*/

let opcao = prompt('Escolha o serviço a ser feito(Gasolina, Álcool ou Calibrar Pneus):');

switch(opcao){
    case "Gasolina":
        let valorGasolina = Number(prompt('Qual o valor a ser abastecido:'));
        console.log('Foram abastecidos ' + (valorGasolina / 5) + 'Litros de Gasolina')
        break;
    case "Álcool":
        let  valorAlcool = Number(prompt('Qual o valor a ser abastecido:'));
        console.log('Foram abastecidos ' + (valorAlcool / 3) + 'Litros de Álcool')
        break;
    case "Calibrar Pneus":
        console.log('Pneus calibrados com sucesso!')
        break;
    default:
        console.log('Inválido!')
        break;
}