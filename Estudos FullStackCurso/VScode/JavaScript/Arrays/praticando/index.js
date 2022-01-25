const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwth", 15, false]
  ];


  const filterArray = hitchedSpaceships.filter(spaceship =>{
return spaceship[1] > 9
  }).map(spaceship =>{
      return spaceship[0]
  })


  const plataformNotConfirmed = hitchedSpaceships.findIndex(spaceship =>{
      return spaceship[2] == false
  })

  let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + filterArray.join(", ")
message += "\nPlataform com processo de engate: " + (plataformNotConfirmed + 1)
message += "\nEspaçonaves destacadas: " + highlightedSpaceships.join(", ")

alert(message)