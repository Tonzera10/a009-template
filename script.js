// const pessoa = prompt("Qual seu nome?");
// const corFavorita = prompt("Qual sua cor favorita?");
// const citacaoFavorita = prompt("Qual sua citação favorita?")
// const nomeMaiusculo = pessoa.toUpperCase();

// const fraseConcatenada = "A cor favorita de " + nomeMaiusculo + " é " + corFavorita + " e sua citação favorita é " + "\"" + citacaoFavorita + "\"";
// const fraseTemplate = `A cor favorita de ${nomeMaiusculo} é ${corFavorita}`;
// const fraseComDuasLinhas = `Nome: ${nomeMaiusculo} \nCor favorita: ${corFavorita}`
// const numeroDeLetras = "O número de caraccteres do seu nome é: " + nomeMaiusculo.length;

// console.log(fraseConcatenada);
// //console.log(fraseTemplate);
// console.log(fraseComDuasLinhas);
// console.log(numeroDeLetras);
// console.log("Tem a letra a? " + nomeMaiusculo.includes("A"));

const nomeDoUsuario = prompt("Qual seu Nome?");
const emailDoUsuario = prompt("Qual seu Email?");

const frase1 = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeDoUsuario}! Com ${nomeDoUsuario.length} caracteres.`;
const novaFrase = frase1.replaceAll("r", "l");

console.log(novaFrase);
console.log("O seu e-mail tem @? ", emailDoUsuario.includes("@"));