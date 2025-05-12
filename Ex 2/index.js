let media = 0 //Váriavel que vai armazenar o valor da média
let i = 0 //Váriavel que vai armazenar o valor do i
let notas = 0 //Váriavel que vai armazenar o valor das notas
let soma = 0 //Váriavel que vai armazenar o valor da soma das notas

do { //Ele vai realizar uma vez o comando e repetir caso notas seja maior ou igual a 0
    notas = parseFloat(prompt(`Insira o valor da ${i+1}° nota (valor negativo para parar, valores acima de 0 e valores não numéricos não serão permitidos)`)) //Comando para pedir o valor da nota
    
    while(isNaN(notas) || notas > 10) { //Enquanto a nota não for um número ou for maior que 10 ele vai repetir o programa
        notas = parseFloat(prompt(`Insira o valor da ${i+1}° nota (valor negativo para parar, valores acima de 0 e valores não numéricos não serão permitidos)`))
    } if (notas >= 0 && notas <= 10) { //Se a nota for maior ou igual a 0 e o valor for menor ou igual a 10 ele vai adicionar o valor da nota a soma e vai aumentar em 1 o valor de i
        soma += notas
        i++
    }
} while (notas >= 0) //Condição para o código se repetir mais de uma vez

    media = soma/i //Cáculo da média
    alert(media.toFixed(2)) //Alerta do resultado da média e resultado arredondado