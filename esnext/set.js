// Não aceita repetição e não possui index
const times = new Set()
// Vai ignorar o segundo FLA pois não aceita repetições
times.add('FLA').add('PNG').add('PRG').add('VFK').add('FLA')
console.log(times);
console.log(times.size);
console.log(times.has('fla'));
console.log(times.has('FLA'));
times.delete('PRG')
console.log(times.has('PRG'));

const nomes = ['brTT', 'Robo', 'Shrimp', 'Goku', 'Goku']
const nomesSet = new Set(nomes)
console.log(nomesSet);
