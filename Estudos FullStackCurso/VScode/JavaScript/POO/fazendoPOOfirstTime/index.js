class spaceShip{
  constructor(name, quantityPeople) {
      this.name = name
      this.quantityPeople = quantityPeople
      this.isHitched = false
      this.doorsOpen = false
  }
  engatarNave(){
    this.isHitched = true
    this.doorsOpen = true
  }
}

function createSpaceShip(){
    let spaceshipName = prompt("Informe o nome da nave: ")
    let spaceshipQuantity = prompt("Informe a quantiade de tripulantes: ")
    let spaceship = new spaceShip(spaceshipName, spaceshipQuantity)
    return spaceship
}

function printSpaceShipList(spaceships){
    let spaceshipList = ""
    spaceships.forEach((spaceship, index)=> {
        spaceshipList += (index + 1) + "- " + spaceship.name + " (" + spaceship.quantityPeople + " tripulantes)\n"
    })
   alert(spaceshipList)    
}

let EngatespaceShipList = []


function menu(){
    let opcao = prompt("O que deseja fazer? \n1 - Engatar Nave \n2 - Imprimir Naves \n3 - Sair do programa")

    switch(opcao){
        case "1":
           let spaceShipAdd = createSpaceShip()
           spaceShipAdd.engatarNave()
           EngatespaceShipList.push(spaceShipAdd)
        break

        case "2":
            printSpaceShipList(EngatespaceShipList)
        break
    }
    return opcao
}

while(menu() != "3"){
    menu()
}

