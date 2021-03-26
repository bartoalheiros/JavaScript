/* var nome = "Bartô Alheiros";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
alert(frase.replace("Japão","Brasil")); */

/* Dicionário: são estruturas caracterizadas
por atributos de 'chave e valor'. Se assemelham ao formato .json */

/* var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome); */


/* var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
lista.pop();
lista.pop();
console.log(lista.toString());
console.log(lista.join(" - ")); */

// Condicionais:

/* var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
} */

/* Estruturas de repetição
while: */

/* var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
}; */

/* Estruturas de repetição
for: */

/* for(var count = 1; count <= 5; count++) {
    console.log(count);
    alert(count);
} */

// Datas:

/* var d = new Date();
alert("Mês: " + (d.getMonth()+1));
alert("Minutos: " + d.getMinutes());
alert("Dia da semana: " + d.getDay());
alert("Ano: " + d.getFullYear()); */

// Funções:

/* function soma(n1, n2) {
    return n1 + n2;
}

var validar = 0;

function validaIdade(idade) {
    if (idade >= 18) {
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade);
console.log(validar); */

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar() {
    /* abre em uma nova janela a página indicada */
    window.open("https://store.steampowered.com/?l=portuguese");
    /* abre na mesma janela a página indicada */
    //window.location.href = "https://store.steampowered.com/?l=portuguese";
}

function trocar(element) {
    element.innerHTML = "Obrigado por passar o mouse";
    // alert("Trocar texto");
}

function voltar(element) {
    element.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada");
}

function funcaoChange(element) {
    console.log(element.value);
}




















