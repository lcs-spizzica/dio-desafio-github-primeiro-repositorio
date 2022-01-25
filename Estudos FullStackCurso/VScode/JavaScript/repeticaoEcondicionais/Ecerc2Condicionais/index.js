alert("Bem-vindo ao sistema de iniciação de decolagem!!")
let namePiloto = prompt("Informe seu nome piloto: ")
let velocity = 0
velocity = prompt("Qual velocidade deseja decolar com o foguete ?")
let confirmVelocity = confirm("Estamos indo para " + velocity + "Km/h")

if (confirmVelocity == true) {
    if (velocity <= 0) {
        alert("Nave está parada. Considere partir e aumentar a velocidade")
    } else if (velocity < 40) {
        alert("Você está devagar. Podemos aumentar mais")
    } else if (velocity < 80) {
        alert("Parece uma boa velocidade para manter")
    } else if (velocity < 100) {
        alert("Velocidade alta. Considere diminuir")
    } else {
        alert("Controle automático forçado")
    }

     alert("Nome do piloto: " + namePiloto + "\nVelocidade atual: " + velocity + "Km/h")
} else {
    alert("Velocidade não confirmada!")
}



