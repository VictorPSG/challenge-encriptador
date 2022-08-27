var string;
const vogais = ["a","e","i","o","u"];
const caracteres = ["ai","enter","imes","ober","ufat"];
var contador = 0;
function separaString(string){
    while(contador<string.length){
        for(var i=0; i<5;i++){
            for(;string[contador]==vogais[i];){
                string[contador]=caracteres[i];
                console.log(string);
                contador++;
                i=0;
            }
        }
        contador++;
    }
    i=0;
    contador=0;
    return string;
}
function encripta(string){
    string = string.toString();
    string = string.replace(/,/g,"");
    return string;
}
function descriptografar(string){
    string = string.replace(/ai/g, "a");
    string = string.replace(/enter/g, "e");
    string = string.replace(/imes/g, "i");
    string = string.replace(/ober/g, "o");
    string = string.replace(/ufat/g, "u");
    return string;
}
function botCodificar(){
    resultado=[];
    string = document.querySelector("textarea").value;
    string = string.split("");
    string = separaString(string);
    string = encripta(string);
    console.log(string);
    document.getElementById("res1").innerHTML=string;
}
function botDecode(){
    resultado=[];
    string = document.querySelector("textarea").value;
    //string = string.split("");
    string = descriptografar(string);
    document.getElementById("res1").innerHTML=string;
}