

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; 
    
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://codepen.io/Schnawzer");
    //window.location.href = "https://codepen.io/Schnawzer";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load (){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*
function soma(n1, n2){
    return n1 + n2;
}


function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = promt("Qual a sua idade");
console.log(validadeIdade(idade));

*/


/* funcion setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
*/



/*
var count;
for (count = 0; count <=5; count++){
    alert(count);
};

*/

/*
var count = 5;
while(count < 5){
    console.log(count);
    count = count + 1;
};

*/


/*
var idade = promt("qual [e a sua idade");
if (idade >= 18){
    alert("maior dade idade");
}else{
    alert("menor de idade");
};*/  





//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor"roxa"}]
//console.log(frutas);
//alert(fruta[1].nome);




/*var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/




//var lista = ["maça", "laranja", "banana"];
//lista.push("uva");
//lista.pop("laranja");
//console.log(lista[1]);

//console.log(lista.toString());
//console.log(list.join(" "));


//console.log(lista.reverse());



//var nome = "Guilherme";
//var idade = 26;
//var idade2 = 10
//var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));

