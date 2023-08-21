// 4- Una distribuidora de huevos quiere contratarlo para que realice un algoritmo que
// calcule el precio de venta para una cantidad de huevos a llevar por un determinado
// cliente. Guiándose por la siguiente información:


let numberEggs = Number(
  prompt('Input the Quantity eggs to go')
)

eggsPrice = 250

if (numberEggs >= 1 && numberEggs <= 100) {
  console.log(
    'The price to pay ' +
      (eggsPrice * numberEggs - eggsPrice * numberEggs * 0.03) +
      ' and your descount is  3%'
  )
} else {
  if (numberEggs >= 101 && numberEggs <= 200) {
    console.log(
      'The price to pay is ' +
        (eggsPrice * numberEggs - eggsPrice * numberEggs * 0.05) +
        'and your descount is of 5%'
    )
  } else {
    if (numberEggs >= 201 && numberEggs <= 300) {
      console.log(
        'The price to pay is ' +
          (eggsPrice * numberEggs - eggsPrice * numberEggs * 0.08) +
          ' and your descount is of 8%'
      )
    } else {
      if (numberEggs >= 301) {
        console.log(
          'The price to pay is ' +
            (eggsPrice * numberEggs - eggsPrice * numberEggs * 0.1) +
            'and your descount is of 10%'
        )
      } else {
        console.log('if you want the descount, please play eggs')
      }
    }
  }
}