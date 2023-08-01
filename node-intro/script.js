console.log("probando ejecutar js con node")


let algo = 10;
algo += 20
algo += "patata"

console.log(algo)

// require => busca otro archivo en js y lo ejecuta
const patata = require("./script2.js")
// 1. leer y procesa todo el codigo de este archivo
// 2. recibir, cualquier data que esté siendo exportada

console.log(patata)


const superheroes = require('superheroes');

console.log( superheroes.random() )

let cool = require('cool-ascii-faces')

console.log(cool())

const cows = require('cows');


const cowsArr = cows();
console.log(cowsArr[50])