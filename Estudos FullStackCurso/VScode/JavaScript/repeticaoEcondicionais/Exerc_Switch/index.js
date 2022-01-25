let distaceAnosLuz = prompt("Qual é a destância em anos-luz: ")

let choiseUser = prompt("Opção de conversão" + "\n 1 - Parsec (pc)" + "\n 2 - Unidade astronômica (AU)" + "\n 3 - Quilômetros(Km)" )
let opcao

switch(choiseUser){
    case "1":
    opcao = "Parsec (pc)"
    let pc =  distaceAnosLuz * 0.306601
    alert("Distância em anos luz: " + distaceAnosLuz + "\n" + opcao +" : " + pc)
    break 
    case "2":
    opcao = "Unidade astronômica (AU)"
    let au = distaceAnosLuz * 63241.1
    alert("Distância em anos luz: " + distaceAnosLuz + "\n" + opcao +" : " + au)
    break   
    case "3":
    opcao = "Quilômetros(Km)"
    let km = distaceAnosLuz * (9.5 * (Math.pow(10, 12)))
    alert("Distância em anos luz: " + distaceAnosLuz + "\n" + opcao +" : " + km)
    break   
    default:
        opcao = "opção fora do escopo"
        alert("Distância em anos luz: " + distaceAnosLuz + "\nUnidade de conversão: " + opcao)
}
