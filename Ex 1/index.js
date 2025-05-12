let numero = parseFloat(prompt("Digite um número positivo")); //Váriável que vai armazenar o número


while (numero < 0 || isNaN(numero)) { //Enquanto o valor for negativo ou o valor não for um número ele irá repetir o comando
    numero = parseFloat(prompt("Insira um número válido")); //Repetição do pedido de número
}

alert (`O número que você digitou é ${numero}`); //Alerta do número que você digitou