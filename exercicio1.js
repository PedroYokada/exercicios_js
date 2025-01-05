// 1º exercício: dada a lista abaixo, multiplique todos os
// números por 2, e imprima no console a lista resultante.
// Obrigatório usar um laço de repetição for para solucionar
// este exercício.

// Exercício 1

var lista1 = [1, 5, 7, 8, 9, 10];

// Explicação: Inicialmente temos um array unidimensional e homogêneo.Cada elemento do
// array possui um índice, o índice do primeiro elemento é 0. Como temos 6 elementos,
// o último é 5.

// O laço de repetição for foi utilizado porque o problema mostra exatamente a.
// Quantidade de elementos que tem na array, então o for é mais interessante,
// pois. É só usar o contador que está dentro do laço, a cada elemento que é contado
// vai multiplicando por 2, até o último elemento do array.

for (let cont = 0; cont < lista1[cont]; cont++) {
  console.log(lista1[cont] * 2);
}
