/**
 * Operador REST/SPREAD
 * Rest --> Juntar
 * Spread --> Espalhar
 * 
 */

 const funcionario = {nome: 'Willian', salario: 12345.99}
 //Sem o rest, irá formar um objeto dentro de clone.
 let clone = {ativo: true, funcionario}
 console.log(clone);
 //Com rest irá formar um objeto único de clone e funcionário.
 clone = {ativo: true, ...funcionario}
 console.log(clone);

 const grupoA = ['João', 'Pedro', 'Gloria']
 const grupoB = ['Maria', ...grupoA, 'Rafaela']
 console.log(grupoB);
 