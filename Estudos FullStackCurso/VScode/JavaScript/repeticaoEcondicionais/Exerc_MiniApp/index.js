
let DateEntry = prompt('Digite a data de partida(formato DD/MM/YYYY)')

let departureDate = moment(DateEntry, "DD/MM/YYYY")
alert(departureDate)

let today = moment()

let dateDiff = today - departureDate

let chosenOption = prompt('Escolha como gostaria de exibir o tempo de partida\n 1 - Segundos\n 2 - Minutos\n 3- Horas\n 4 - Dias')

if(chosenOption == "1"){
    let secondsOfDeparture = Math.round(dateDiff/ 1000)
    alert('tempo de vôo: ' + secondsOfDeparture + " segundos")
}else if(chosenOption == "2"){
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert('tempo de vôo: ' + minutesOfDeparture + " minutos")
}else if(chosenOption == "3"){
    let hoursOfDeparture = Math.round(dateDiff/ 1000 / 3600)
    alert('tempo de vôo: ' + hoursOfDeparture + " horas")
}else if(chosenOption == "4"){
    let hoursOfDeparture = Math.round(dateDiff/ 1000 / 3600 / 2400)
    alert('tempo de vôo: ' + hoursOfDeparture + " dias")
}else{
    alert("Opção inválida!!")
}
