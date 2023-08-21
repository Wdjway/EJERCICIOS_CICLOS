// 7- Desarrollar un algoritmo que permita ingresar 5 productos de la canasta familiar;
// nombre del producto y su precio, que al final me muestra cuanto es el subtotal
// (precio sin IVA), cuánto es el IVA del 19% y cuál es el total que debe pagar una
// persona.

AdderPrice = 0
for (let i = 0; i < 5; i++) {
 
  let productValue = Number(prompt('Input Value of product'))

  AdderPrice = AdderPrice + productValue
}
ValueIVA = AdderPrice * 0.19

console.log('The subtotal is: ' + AdderPrice)
console.log('the IVA porcent is: ' + ValueIVA)
console.log('the total price is: ' + (AdderPrice + ValueIVA))