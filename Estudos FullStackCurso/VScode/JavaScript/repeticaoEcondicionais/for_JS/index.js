let spaceshipName = prompt("Qual é o nome da nave?")
let newSpaceShip = ""
let charChoice = prompt("Qual caractere deseja alterar no nome da nave?")
let charReplacement = prompt("Qual letra você deseja por no lugar?")

for (let pos = 0; pos < spaceshipName.length; pos++) {
    if(spaceshipName[pos] == charChoice){
        newSpaceShip += charReplacement
    }else{
        newSpaceShip += spaceshipName[pos]
    }
 
}

alert("O novo nome da nave é: " + newSpaceShip)