let numero = parseFloat(prompt("Digite um número positivo"))


while (numero < 0 || isNaN(numero)) {
    numero = parseFloat(prompt("Insira um número válido"))
}

alert (`O número que você digitou é ${numero}`)