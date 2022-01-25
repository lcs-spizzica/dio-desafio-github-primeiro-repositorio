let mySpaceship = {
    name: "",
    tipo: "",
    maxVelocity: 0,
    incialVelocity: 0
}

mySpaceship = function callPrompts(mySpaceship){
do{
    this.name = prompt("Qual é o nome da nave?")
    this.tipo = prompt("Qual é o tipo da nave?")
    this.maxVelocity = prompt("Qual é a velocidade max que a nave pode chegar?")
    let confirmInfos = prompt("As informações estão corretas?" + "\nNome da nave: " + this.name + "\nTipo da nave: " + this.tipo + "\nVelocidade Max suportada: " + this.maxVelocity)
}while(confirmInfos = false || null) 
}

callPrompts(mySpaceship)