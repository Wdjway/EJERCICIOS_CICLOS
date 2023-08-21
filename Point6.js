// 6- Desarrollar un algoritmo que permita ingresar las edades de 10 estudiantes.
// El algoritmo deberá mostrar cuántos estudiantes son mayores de edad y son
// menores de edad.

CounterAdult = 0
CounterMinors = 0

for (let i = 0; i < 10; i++) {
  let StudentAge = Number(prompt('Enter the students age'))

  if (StudentAge >= 18) {
    CounterAdult = CounterAdult + 1
  } else {
    CounterMinors = CounterMinors + 1
  }
}

console.log(
  'Of the 10 students ' +
    CounterAdult +
    ' are of legal age and ' +
    CounterMinors +
    'are minor'
)
