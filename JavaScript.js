
 	
var hours, min, sec;

var day = new Array( 'Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado')
var month = new Array( 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')


var clock = function (){
 
  var date = new Date();

     hours = date.getHours().toString().length < 2 ? "0" + date.getHours() : date.getHours();


     min = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();
;
     sec = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds();


     var time = hours + ':' + min + ':' + sec;

     var fullDate = day[date.getDay()] + ' , ' + date.getDate() + ' de ' + month[ date.getMonth() ] + ' de ' + date.getFullYear();


     document.getElementById('time').innerHTML = time;
     document.getElementById('date').innerHTML = fullDate;




}

d = new Date();
hour = d.getHours();


if(hour <5){
	alert(" Olá, tenha uma Boa noite !");
}
else
if(hour <8){
	alert(" Olá, tenha um Bom Dia !");
}
else
if(hour  <12){
	alert("Olá, tenha um Bom dia !");
}
else
if(hour <18){
	alert("Olá, tenha uma Boa Tarde");
}
else{
	alert("Olá, tenha uma Boa Noite.");
}


setInterval(function(){

clock();

}, 1000)



