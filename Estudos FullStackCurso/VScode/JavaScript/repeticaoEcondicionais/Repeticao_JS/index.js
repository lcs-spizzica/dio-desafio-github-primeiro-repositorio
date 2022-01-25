let spaceshipName = prompt("Qual é o nome da sua nave? ")
let warpCount = 0
let choiseUser = ""
choiseUser = prompt("Deseja entrar na dobra espacial? \n 1 - SIM\n 2 - NÃO")


while(choiseUser == "1" || choiseUser == "sim"){
    warpCount++
    choiseUser = prompt("Deseja entrar na próxima dobra? ")
}

alert("Nave: " + spaceshipName + "\nQuantidade de dobras: " + warpCount)