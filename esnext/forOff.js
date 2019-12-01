/**
 * FOR OF roda em cima dos valores e não dos indices que nem o FOR IN
 */
for (let letra of 'cod3r'){
    console.log(letra);
}

const assuntosEcama = ['Map', 'Set', 'Promise']

for (let i in assuntosEcama){
    console.log(i);
}

for (let assunto of assuntosEcama){
    console.log(assunto);
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let chave of assuntosMap.keys()){
    console.log(chave);
}

for(let valor of assuntosMap.values()){
    console.log(valor);
}
