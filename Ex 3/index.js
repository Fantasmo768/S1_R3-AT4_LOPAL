let soma = 0; //Váriável que vai armazenar o valor da soma das compras
let i = 1; //Váriável que vai contar quantas compras foram adicionadas
let valorCompra = 0; //Váriavel que vai armazenar o valor da compra

do {

    valorCompra = parseFloat(prompt(`Insira o valor da sua ${i}° compra (digite 0 para parar, valores negativos ou não numéricos não serão aceitos)`)) //Comando que vai pedir para o usuário inserir o valor da compra

    while (isNaN(valorCompra) || valorCompra < 0) { //Enquanto o valor inserido não for um número ou for um valor negativo, ele pedirá um novo valor ao usuário
        valorCompra = parseFloat(prompt(`Insira o valor da sua ${i}° compra (Você não digitou um número ou inseriu um número negativo, tente novamente)`)) //COmando que vai pedir o valor novamente
    } if (valorCompra != 0 && valorCompra > 0) { //Se o valor da compra for diferente de 0 ou o valor da compra for maior que 0 ele adicionar +1 ao valor de i e acrescentar o valor da compra ao valor de soma
        i++; //Comando para acrescentar 1 ao i
        soma += valorCompra; //Comando para acrescentar o valor da compra a soma
    }

} while (valorCompra != 0) //Condição para o loop acontecer

alert(`${i}R$`) //Alerta do valor final da compra