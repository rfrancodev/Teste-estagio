
function fibonacci(num) {

let n1 = 0, n2 = 1, novoNumero;

    if (num === 0 || num === 1) {
        return `O numero ${num} pertence a sequencia`
    }

    novoNumero = n1 + n2
        while (novoNumero <= num) {
            if (novoNumero === num) {
                return `O numero ${num} pertence a sequencia`
            }
            n1=n2
            n2=novoNumero
            novoNumero = n1+n2
        }
        return `O numero ${num}  não pertence a sequencia`
}

const numero = 6
console.log(fibonacci(numero));
