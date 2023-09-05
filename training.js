// var idadeA = 39;
// var idadeB = 20;
// var idadeC = 41;

// var idadeMedia = (idadeA + idadeB + idadeC) / 3;

// document.write("A média das idades é " + Math.round(idadeMedia));

// var visitantes = parseInt(prompt("Por favor, informe o número de visitantes"));

// if (visitantes <= 5) {
//     alert("O preço dos ingressos é R$20,00");
// } else {
//     if (visitantes <= 15) {
//         alert("O preço dos ingressos é R$15,00");
//     } else {
//         if (visitantes <= 30) {
//             alert("O preço dos ingressos é R$10,00");
//         } else {
//             alert("O preço dos ingressos é R$8,00");
//         }
//     }
// }

// var ageA = 100;
// var ageB = 200;
// var ageC = 300;

// var ageAverage = (ageA + ageB + ageC) / 3;

// alert("A média das idades é " + ageAverage);

// var year = 2100;

// document.write("Fernanda tem " + (year - 1977) + "anos");
// document.write("<br>");
// document.write("Amanda tem " + (year - 1996) + "anos");
// document.write("<br>");
// document.write("Cassandra tem " + (year - 1976) + "anos");
// document.write("<br>");

// document.write("<br>");
// document.write("<br>");
// document.write("<br>");

// year = 2200;

// document.write("Fernanda tem " + (year - 1977) + "anos");
// document.write("<br>");
// document.write("Amanda tem " + (year - 1996) + "anos");
// document.write("<br>");
// document.write("Cassandra tem " + (year - 1976) + "anos");
// document.write("<br>");

// let titulo = document.querySelector('h1');

// titulo.style.opacity = '0';

// function jumpLine() {
//     document.write("<br>" + "<br>");
// }

// function display(sentence) {
//     document.write(sentence);
//     jumpLine();
// }

// var ano = 2016;

// display("Fernanda nasceu em " + (ano - 1977) + "anos");
// display("Amanda nasceu em " + (ano - 1996) + "anos");
// display("Cassandra nasceu em " + (ano - 1976) + "anos");

// function calculateImc(height, weight) {

//     var imc = (height * height / weight);
//     display(" O IMC calculado é " + imc);
// }

// var heightA = 1.72
// var weightA = 73

// var heightB = 1.82
// var weightB = 80

// calculateImc(heightA, weightA);

// calculateImc(heightB, weightB);

// function calculateImc(heightA, weightA) {

// 		return (heightA * heightA) / weightA;
// }

// var heightA = 1.72
// var weightA = 73

// // var heightB = 1.82
// // var weightB = 80

// calculateImc(heightA, weightA);

// // calculateImc(heightB, weightB);

// document.write(calculateImc)
// // console.log(calculateImc);

// function sum(a, b) {
//     return a + b;
// }

// var a = 10
// var b = 20

// var total = sum(a, b)

// console.log(total)

function calculateImc(height, weight) {
    return (height * height) / weight;
}

var height = 1.72;
var weight = 73;

var imc = calculateImc(height, weight);

console.log(imc);

var oi = document.write("aaaaaa");
