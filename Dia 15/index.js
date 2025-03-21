let v1 = [4, 7, 3, 8, 9, 23, 1, 12, 15, 32];
let v2 = [21, 7, 13, 18, 32, 29, 100, 121, 43, 15];
let vIguais = [];
let cont = 0;

function numIguais(v1, v2, vIguais) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (v1[i] === v2[j]) {
                
                let duplicado = false;
                for (let k = 0; k < cont; k++) {
                    if (vIguais[k] === v1[i]) {
                        duplicado = true;
                        break;
                    }
                }
                
                
                if (!duplicado) {
                    vIguais[cont] = v1[i];
                    cont++;
                }
            }
        }
    }
}

function escreveUniao(vIguais) {
    for (let i = 0; i < cont; i++) {
        console.log(vIguais[i]);
    }
}

numIguais(v1, v2, vIguais);
escreveUniao(vIguais);
