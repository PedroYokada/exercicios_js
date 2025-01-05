// 2º exercício: dada a lista abaixo, ordene-a, usando alguma
// das funções de ordenação do próprio JavaScript,
// e imprima no console a lista resultante.

// Exercício 2

// Explicação: Neste exercício, temos um array unidimensional e homogêneo.
// O exercício já indica que existe alguma função, ou seja, que deve existir
// um bloco de código para ordenar os números dentro do array, uma função que
// deixe em ordem crescente, a ordem seria −2,0,1,5,10 e 53. Ao resolver este
// exercício, pesquisei e utilizei o método sort, no entanto, ele não ordenava
// corretamente, ele ordenava −2,0,1,10,5 e 53, entendi que tinha que
// comparar os valores para ele ordenar corretamente.

var lista2 = [1, 10, 53, 0, -2, 5];

let x, y;
lista2.sort((x, y) => x - y);
console.log(lista2);
