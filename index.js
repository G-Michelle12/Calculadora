//Encontrar el numero mayor de una lista de numeros en un array 

let numeros = [5, 10, 15, 60, 8]
let numeroMaximo = 0
let tamaño = numeros.length

for (let i = 0; i < tamaño; i++) {
  if (numeroMaximo < numeros[i]) {
    numeroMaximo = numeros[i]
  }
}

console.log(numeroMaximo)

let maximo = Math.max(5, 10, 15, 60, 8)
console.log(maximo)