// Questão aberta - Esquenta
const meuArray = [24, 'Marina', false]
// índices         0      1       2
const primeiroElemento = meuArray[0] 
const segundoElemento = meuArray[1]
const terceiroElemento = meuArray[2]

console.log(primeiroElemento, segundoElemento, terceiroElemento)

// Prática guiada
// Prática guiada I

/*Crie um array com 3 itens do tipo String
Crie um array com 3 itens do tipo Number
Crie um array com uma String, um número e um booleano;
Crie um array com apenas um valor. Um número.
Crie um array sem nenhum valor dentro.*/

const minhasStrings = ['copo', 'plantinha', 'vinho']

const meusNumeros = [24, 29, 10]

const minhaListaDeVariasCoisas = ['Buda', 2, true]

const meuNumeroSolitario = [2023]

const minhaListaVazia = []

/* Prática guiada II 
Cheque o length do primeiro array. 
O que acontece se tentarmos acessar o índice 3 deste array? (do primeiro)
Verifique se o terceiro array inclui cada um dos itens;
No quarto array, imprima o valor do único item. 
Observe qual o seu índice, e imprima seu tamanho.*/

const tamanhoMinhasStrings = minhasStrings.length
console.log(`Tamanho do array 'Minhas Strings':`, tamanhoMinhasStrings)

const quartoElementoMinhasStrings = minhasStrings[3]
console.log(`Valor que está na posição 3 do array 'Minhas Strings':`, quartoElementoMinhasStrings)

// b)

const temBuda = minhaListaDeVariasCoisas.includes('Buda')
console.log(`O array 'Minha Lista de Várias Coisas' inclui 'Buda'?`, temBuda)

const temDois = minhaListaDeVariasCoisas.includes(2)
console.log(`O array 'Minha Lista de Várias Coisas' inclui '2'?`, temDois)

const temTrue = minhaListaDeVariasCoisas.includes(true)
console.log(`O array 'Minha Lista de Várias Coisas' inclui 'true'?`, temTrue)

// c)

const valorItemUnico = meuNumeroSolitario[0]
console.log(`Qual o valor do 'Número Solitário'?`, valorItemUnico)

const tamanhoMeuNumeroSolitario = meuNumeroSolitario.length
console.log(`Qual o tamanho da lista 'Meu Número Solitário'?`, tamanhoMeuNumeroSolitario)


// Prática guiada III
/*Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.
Faça push() de uma nova string no array copiado
Imprima os dois arrays. Há diferença?
Como podemos resolver isso?
Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.
Imprima novamente ambos os arrays.*/

// a)
const minhasStringsCopiaErrada = minhasStrings

// b)
minhasStringsCopiaErrada.push('livro')

// c)
console.log(`Array original`, minhasStrings)
console.log(`Cópia errada`, minhasStringsCopiaErrada)

// d)
const minhasStringsCopiaCerta = minhasStrings.slice()
// console.log(`Cópia CERTA`, minhasStringsCopiaCerta)

minhasStringsCopiaCerta.splice(2, 2)

console.log(`Array original`, minhasStrings)
console.log(`Cópia certa pós splice():`, minhasStringsCopiaCerta)
