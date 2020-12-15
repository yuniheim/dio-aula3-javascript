
function botao(){
    document.getElementById("agradecimento").innerHTML = "obrigado por cl- a vtnc";
    console.log(document.getElementById("agradecimento"));
    //alert("eae, clicou porque?")
}

function redirecionar(){
    window.open("https://www.facebook.com/");
    //window.location.href = "https://www.facebook.com/";
}

function trocar(elemento){
    elemento.innerHTML = "4lan mandou abraço"
    //document.getElementById("mouseover").innerHTML = "4lan mandou abraço";
    //alert("4lan mandou abraço");
}

function voltar(elemento){
    elemento.innerHTML = "Maozinha de novo"
    //document.getElementById("mouseover").innerHTML = "Maozinha de novo";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}





/*
function soma (n1, n2){
    return n1 + n2;
}
*/
/*
var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validar);
*/

//alert(soma(5, 10));


/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
*/




/*
var count;
for(count=0; count <=5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;  
};
*/

/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Maior de idade")
}
else{
    alert("Menor de idade")
};
*/


/*
var frutas = [{nome:"maca", cor:"vermelho"}, {nome:"pera", cor:"verde"}]
console.log(frutas);
alert(frutas[1].cor);
*/



/*
var fruta = {nome:"maca", cor:"vermelho"}
console.log(fruta);
alert(fruta.cor);
*/



/*
var lista = ["maca", "pera", "laranja", "uva"]
//lista.push("morango");
//lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
*/




/*
var nome = "Yuniheim";
var n1 = 19;
var n2 = 10;
var frase = "tem um gosto meio roxo"
//alert(" bem vindo " + nome + " vc tem " + idade + " anos");
//alert (idade + idade2)

console.log(nome);
console.log(n1 + n2);
console.log(frase.replace ("roxo", "azul"))
*/