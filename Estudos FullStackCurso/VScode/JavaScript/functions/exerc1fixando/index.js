let spaceShipName = prompt("Qual é o nome da nave?")

let velocidade = 0

function acelerar(){
    velocidade += 5
}

function desacelerar(){
    if(velocidade < 0){
        alert("Impossívelo realizar ação!! Nave ja esta parada, ou seja, com velocidade de 0 Km/s")
    }else{
        velocidade -= 5
    }
    
}

function dadosBordo(){
    alert(spaceShipName + " " + velocidade + " Km/s")
}

function sairSisitema(){
    alert(`Você saiu do Sistema!!`)
}


function menu(){
      let opcao = prompt("Qual opção você deseja realizar?" + "\n1 - Acelerar nave em 5km/s" + "\n2 - Desacelerar em 5km/s" + "\n3 - Imprimir dados de Bordo" + "\n4 - Sair do programa(SAIR)") 
       switch(opcao){
        case "1":
            acelerar()
        break

        case "2":
            desacelerar()
        break

        case "3":
            dadosBordo()
        break
        
        case "4":
           alert("Saiu do sistema!!")
        break

        default:
        alert("Opção inválida!!!!")
        
    }
return opcao
}

do{
    menu()
}while (menu() != "4") 
    

