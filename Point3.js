// 3- Ingresar por pantalla un número entre 1 y 12, luego imprimir en letras el mes al
// que corresponde el valor ingresado y los signos del zodiaco. Ejemplo: si el valor
// ingresado es 5, entonces imprimir “Mayo”, “Tauro - Géminis”.

let Month = Number(prompt('Input number from 1 until 12 '))

switch (Month) {
  case 1:
    console.log('January ' + 'Capricornio-Acuario')
    break
  case 2:
    console.log('Febrary ' + 'Acuario-Piscis')
    break
  case 3:
    console.log('March ' + 'Piscis-Aries')
    break
  case 4:
    console.log('April ' + 'Aries-Tauro')
    break
  case 5:
    console.log('May ' + 'Tauro-Geminis')
    break
  case 6:
    console.log('June ' + 'Geminis-Cancer')
    break
  case 7:
    console.log('July' + 'Cancer-Leo')
    break
  case 8:
    console.log('Augost ' + 'Leo-Virgo')
    break
  case 9:
    console.log('September ' + 'Virgo-Libra')
    break
  case 10:
    console.log('October ' + 'Libra-Escorpio')
    break
  case 11:
    console.log('November ' + 'Escorpio-Sagitario')
    break
  case 12:
    console.log('December ' + 'Sagitario-Capricornio')
    break

  default:
    console.log('Input the a valid option')
}
