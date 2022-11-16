// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço do gasolina;
//  3 - O tipo de combustível que está no seu carro;
//  4 - Gasto médio de combustível do carro por KM;
//  5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.
const preço_etanol = 5.79;
const preço_gas = 6.66;
var tipo_combust = "Gasolina"
const km_litro = 10;
let dest_km = 100;
let gastos;

console.log(tipo_combust);
if (tipo_combust.includes("Etanol")){
    let gastos = (dest_km/km_litro)*preço_etanol;
    console.log("Foram gastos nessa viagem R$"+gastos.toFixed(2));
} else {
    tipo_combust.includes("Gasolina") ? gastos = (dest_km/km_litro)*preço_gas : "";
    console.log("Foram gastos nessa viagem R$"+gastos.toFixed(2));
} 
