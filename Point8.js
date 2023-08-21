// 


/*8- Se desea elaborar un algoritmo que determine cuántas personas de un grupo
tienen hijos y cuántos no tienen, además se desea conocer el promedio del número
de hijos. (While)*/


counterPeopleWithChildren = 0
counterPeopleNoChildren = 0
addChildren = 0

let People = Number(prompt("Ingrese la cantidad de personas en el grupo"));

let numPerson = 1;

while (numPerson <= People) {
    let numChildren  = Number(prompt("Ingrese el número de hijos de la persona " + numPerson));
    addChildren = addChildren + numChildren

    if (numChildren > 0) {
        counterPeopleWithChildren = counterPeopleWithChildren + 1
    } else {
        counterPeopleNoChildren = counterPeopleNoChildren + 1
    }numPerson = numPerson + 1;
} 

averageChildren = addChildren / People

console.log("Personas con hijos: " + counterPeopleWithChildren);
console.log("Personas sin hijos " + counterPeopleNoChildren);
console.log("Promedio de hijos en el grupo: " + averageChildren);
