let valorBanco = 1000 //Váriável que vai armazenar o valor do banco
let i = 1; //Contador de quantos saques foram realizados
let valorSaque = 0; //Váriavel que armazena o valor dos saques

do { //Faz o código uma vez e enquanto a condição for verdadeira o looping continua 
    valorSaque = parseFloat(prompt(`Insira o valor do seu ${i}° saque (Valor atual ${valorBanco}R$)`)) //Comando para pedir o valor do saque novamente

    while (valorSaque > valorBanco || isNaN(valorSaque) || valorSaque < 0) { //Enquanto valor do saque for maior que o valor do banco, o valor do saque não for um número ou o valor do saque for menor que 0 o looping se repete
        valorSaque = parseFloat(prompt(`Você inseriu inseriu um valor negativo ou não numérico ou inseriu um valor acima do que você tem na sua conta atualmente (Valor atual ${valorBanco}R$)`)) //Comando para pedir o valor do saque novamente

    } if (valorSaque <= valorBanco ) { //Se valor do saque for menor ou igual valor do banco os comandos abaixo vãoa contecer
        i++; //Adiciona 1 ao valor de i
        valorBanco -= valorSaque; //Subtrai o valor do saque do valor do banco
    }

} while (valorBanco > 0) //Condição para o looping acontecer

alert ("Você não possui mais dinheiro em sua conta") //Alerta que o programa acabou