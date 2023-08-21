// En cierta universidad se tiene N cantidad de estudiantes. Elabore un algoritmo
// que encuentre el promedio de edades de los estudiantes mayores de 21 años y el
// promedio de edades del resto de estudiantes. Por cada estudiante se tiene un
// registro que contiene su código y edad.

studentsOver21 = 0
studentsUnder21 = 0
amountOver21 = 0
amountUnder21 = 0

let student = Number(prompt('Input quantity '))

for (let i = 1; i <= student; i++) {
  let StudentAge = Number(prompt('Enter the students age'))

  let studentCode = Number(prompt('Enter the students code'))

  if (StudentAge >= 1 && StudentAge <= 21) {
    studentsUnder21 = studentsUnder21 + StudentAge

    amountUnder21 = amountUnder21 + 1
  } else {
    if (StudentAge > 21) {
      studentsOver21 = studentsOver21 + StudentAge

      amountOver21 = amountOver21 + 1
    } else {
      console.log('Edad inválida ingresada para el estudiante ' + i)
    }
  }
}

averageOver21 = studentsOver21 / amountOver21
averageUnder21 = studentsUnder21 / amountUnder21

console.log(
  'The average age of students older than 21 is' +
    averageOver21 +
    ' and the average of the other is ' +
    averageUnder21
)
