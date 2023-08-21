/*1- Realizar un programa en el que el usuario introduzca el número del mes (1 al 12)
y se muestra al final si ese mes es de 30 o 31 días.*/

let NumberMonth = Number(
  prompt('Ingrese el número del mes en un rango de1 al 12')
)

if (NumberMonth >= 1 && NumberMonth <= 12) {
  if (
    NumberMonth === 4 ||
    NumberMonth === 6 ||
    NumberMonth === 9 ||
    NumberMonth === 11
  ) {
    console.log('El mes tiene 30 dias')
  } else {
    if (NumberMonth === 2) {
      console.log('Febrero puede tener 28 o 29 dias')
    } else {
      console.log('El mes tiene 31 dias')
    }
  }
}
