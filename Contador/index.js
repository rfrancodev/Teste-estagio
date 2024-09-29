
function contarLetra(texto) {

    let contador = 0

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === 'a'|| texto[i] === 'A') {
            contador= contador + 1
        }
    }

    if (contador > 0) {
        return `A letra a ocorre ${contador} vezes`
    } else {
        return `A letra a não ocorre`
        
    }
}

const resultado = contarLetra(" Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.") 

console.log(resultado);