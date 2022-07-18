const dividir =(numero1, numero2) =>numero1/numero2
let numero1, numero2, operacion

do {
    numero1 = parseFloat(prompt("ingrese monto a abonar"))
    numero2 = parseFloat(prompt("ingrese cantidad de cuotas en las que quisiera abonar"))
    operacion = prompt("ingrese si para confirmar")
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("por favor ingresar números válidos")
    }

    if (numero2 === 0 && operacion === "si") {
        alert("no se puede dividir entre cero")
    }
} while ((isNaN(numero1) || isNaN(numero2) || (numero2 === 0 && operacion === "si")))

switch (operacion) {
    case "si":
        alert(("Importe a abonar por cuota $") + (dividir(numero1,numero2)))
        break
    default: ("operacion no valida")
        break
}

