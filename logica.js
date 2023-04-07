

let numero_ingresado = prompt("Ingrese un numero primo");
let aux = 0;
if (numero_ingresado != 1) {
    if (primo(numero_ingresado)) {
        console.log(numero_ingresado + " Es primo")
        siguiente_num_primo(numero_ingresado)
    } else {
        console.log("El numero " + numero_ingresado + " no es primo")
        siguiente_num_primo(numero_ingresado)
    }
} else {
    console.log("El numero " + numero_ingresado + " no es primo")
    siguiente_num_primo(numero_ingresado)
}
function primo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
}
function siguiente_num_primo(numero_a_evaluar) {
    aux = numero_a_evaluar
    aux++
    while (primo(aux) == false) {
        aux++
    }
    console.log("El siguiente numero primo es: " + aux)
}