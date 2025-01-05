// 4º exercício: Crie um laço de repetição do tipo for que rode de 0
// a 20, inclusivo, e imprima no console o valor atual toda vez que
// o mesmo for par.

// Explicação: O caso é bem semelhante ao do primeiro exercício, pois sabemos
// a quantidade de valores, de 0 a 20, portanto é só colocar um contador do primeiro
// elemento que é 0 até 20, no entanto, tem que colocar uma condição, que somente
// números pares serão exibidos. Dentro da condição o contador faz uma divisão por 2,
//  se o resto for igual a 0, esse valor é par, e o laço vai contar até o contador
//   for igual a 20.

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
