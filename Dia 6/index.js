/*EXERCÍCIO 01

let numero = Number(prompt("Digite o número desejado:"));

for(let cont = 0; cont <= numero; cont++){
    console.log(cont)
}
*/

/*EXERCÍCIO 02

for(let cont = 0; cont <= 50; cont++){
    if(cont % 5 == 0){
        console.log(cont)
    }
}
*/

/*EXERCÍCIO 03

for(let cont = 50; cont >= 0; cont--){
    if(cont % 5 == 0){
        console.log(cont)
    }
}
*/

/*EXERCÍCIO 04

let numero = Number(prompt("Digite o número desejado:"));

for(let cont = 0; cont <= 10; cont++){
    console.log(numero + " x " + cont + " = " + numero*cont)
}

numero++
for(let cont = 0; cont <= 10; cont++){
    console.log(numero + " x " + cont + " = " + numero*cont)
}

numero++
for(let cont = 0; cont <= 10; cont++){
    console.log(numero + " x " + cont + " = " + numero*cont)
}
*/

//OU

/*
let numero = Number(prompt("Digite o número desejado: "))
for(let i = numero; i <= numero + 2; i++){
    console.log("tabuada do numero: " + i)
    for(let j = 0; j <= 10; j++){
        console.log(i + " x " + j + " = " + (i * j))
    }
}