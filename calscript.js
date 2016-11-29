window.onload=manejarClick;

var cifra1;
cifra1="";
var control=true;

function manejarClick() {

var uno=document.getElementById("uno");
uno.addEventListener("click",function() {
                   clicNumero("1");
               });
var dos=document.getElementById("dos");
dos.addEventListener("click",function() {
                   clicNumero("2");
               });
   var tres=document.getElementById("tres");
tres.addEventListener("click",function() {
                   clicNumero("3");
               });
var cuatro=document.getElementById("cuatro");
cuatro.addEventListener("click",function() {
                   clicNumero("4");
               });
var cinco=document.getElementById("cinco");
cinco.addEventListener("click",function() {
                   clicNumero("5");
               });
var seis=document.getElementById("seis");
seis.addEventListener("click",function() {
                   clicNumero("6");
               });
var siete=document.getElementById("siete");
siete.addEventListener("click",function() {
                   clicNumero("7");
               });
var ocho=document.getElementById("ocho");
ocho.addEventListener("click",function() {
                   clicNumero("8");
               });
var nueve=document.getElementById("nueve");
nueve.addEventListener("click",function() {
                   clicNumero("9");
               });
var cero=document.getElementById("cero");
cero.addEventListener("click",function() {
                   clicNumero("0");
               });
var sumar=document.getElementById("sumar");
sumar.addEventListener("click",function() {
                   clicNumero("+");
               });
var restar=document.getElementById("restar");
restar.addEventListener("click",function() {
                   clicNumero("-");
               });
var dividir=document.getElementById("dividir");
dividir.addEventListener("click",function() {
                   clicNumero("/");
               });
var multiplicar=document.getElementById("multiplicar");
multiplicar.addEventListener("click",function() {
                   clicNumero("*");
               });


var cort=document.getElementById("cortar");
cort.addEventListener("click",borrar);

var bor=document.getElementById("borrar")
bor.addEventListener("click",eliminar)

var igual=document.getElementById("igual");
igual.addEventListener("click",calcular);
}
function clicNumero(num){
   cifra1 += num;
   var panta=document.getElementById("res");
   panta.textContent=cifra1;
}
function calcular(){
   var fin=eval(cifra1);
   var panta=document.getElementById("res");
   panta.textContent=fin;
}
function borrar (){
     var panta=document.getElementById("res");
     var b=cifra1.slice(0,-1);
     cifra1=b;
    panta.textContent=cifra1;
}

function eliminar(){
  var total=eval(cifra1="");
   var pantalla=document.getElementById("res");
   pantalla.textContent=total;
   }