// 2- Realizar un algoritmo que calcule el porcentaje de descuento que va a tener un
// cliente dependiendo de los siguientes datos:
// - Si el cliente compró un carro o una moto, el descuento será del 15%
// - Si el cliente compró una bicicleta o una patineta, el descuento será del
// 10%


let product = prompt("Input the vehicle that want to pay: a. Car b.Bike c.Bicycle d.Skate e.Electric Scooter");

if (product === "a" || product === "b") {
    console.log("Your descount is of 15%")
} else {
    if (product === "c" || product === "d") {
        console.log('Your descount is of 10%')
    } else {
        if (product === "e") {
            console.log("Your descount is of 5%")
        } else {
            console.log("please select a product of the list ")
        }
}
}