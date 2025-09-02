//Criação do JSON

var json1 = `{
    "id":1,
    "nome": "Isabella",
    "sobrenome": "Toledo",
    "escolaridade": "Educação superior",
    "bairro": "Bras cubas",
    "cidade": "São Paulo",
    "pais": "Brasil",
    "imagem": "<img src='img/c7b57a2fbe0ee6387266fb195ccfa053.jpg' whidth='200px'>",
    "link": "https://pt.wikipedia.org/wiki/Beauty_and_the_Beast_(filme_de_1991)"

}`

//Converter o texto STRING para JSON
var dados1 = JSON.parse(json1)

var link1 =`<a href="${dados1.link}">Visite nosso site</a>`;

//FRONT END
function valor() {
   var identificador = document.getElementById('valorDigitado').value

   if(identificador == dados1.id) {
   document.getElementById('imagem').innerHTML = dados1.imagem
   document.getElementById('nome').innerHTML = dados1.nome
   document.getElementById('sobrenome').innerHTML = dados1.sobrenome
   document.getElementById('escolaridade').innerHTML = dados1.escolaridade
   document.getElementById('bairro').innerHTML = dados1.bairro
   document.getElementById('cidade').innerHTML = dados1.cidade
   document.getElementById('pais').innerHTML = dados1.pais
   document.getElementById('link').innerHTML = link1
} else{
    document.getElementById('erro').innerHTML = "Registro Inválido"
}
}

console.log(dados1)

