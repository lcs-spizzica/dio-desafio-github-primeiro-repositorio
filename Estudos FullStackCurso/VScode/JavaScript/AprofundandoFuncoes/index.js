function StoppingSpaceSchip(velocity, printer){
let deceleration = 20

while(velocity>0){
    printer(velocity)
    velocity -= deceleration
}
   alert("Navel parada. As comportas podem ser abertas!")

}

let spaceshipVelocity = 150

StoppingSpaceSchip(spaceshipVelocity, function(velocity){
    alert("Velocidade arual: " + velocity)
})
