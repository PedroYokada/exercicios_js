// 3º exercício: dado o objeto abaixo, imprima as chaves do mesmo.
// Valido usar a API Object na solução deste exercício.

// Exercício 3

// Explicação: Neste exercício, temos um array bidimensional e heterogêneo.
// Achei interessante utilizar um laço de repetição for, dentro do laço temos
// um método entries, o key seria nome,idade,cidade, profissão,hobbies e values
// são as informações, cada informação tendo um índice, formando um objeto
// e consequentemente array de pares, a cada índice que passa o laço vai
// imprimindo informação por informação.

const pessoa = {
  nome: "João",
  idade: 25,
  cidade: "Franco da Rocha",
  profissao: "Desenvolvedor",
  hobbies: ["Leitura", "Ciclismo", "Fotografia"],
};

for (const [key, value] of Object.entries(pessoa)) {
  console.log(`${key}: ${value}`);
}
