let nome = prompt("Digite seu primeiro nome") //Váriavel que vai guardar o valor do primeiro nome
let sobrenome = prompt("Digite seu sobrenome") //Váriavel que vai guardar o valor do segundo nome

while (nome=== "") { //Enquanto o usuário não inserir um nada em seu primeiro nome o looping continua
    nome = prompt("Você não inseriu nada no seu primeiro nome") //Comando para pedir o valor do nome novamente
} 

while (sobrenome === "") { //Enquanto o usuário não inserir nada em seu sobrenome o looping continua
    sobrenome = prompt("Você não inseriu nada no seu sobrenome") //Comando para pedir o valor novamente
}

alert (`Seu nome é ${nome + " " + sobrenome}`) //Alerta do nome inserido