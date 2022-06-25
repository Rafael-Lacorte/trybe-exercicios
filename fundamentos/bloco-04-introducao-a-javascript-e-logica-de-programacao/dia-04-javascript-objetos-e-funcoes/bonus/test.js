let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
      
      },
      {
        nome: 'William',

      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',

      },
      {
        nome: 'Zoey',
      },
    ],
  };

  console.log(
    moradores.blocoUm[0].nome
  )

  for (blocos in moradores) {
    console.log(moradores[blocos][0].nome)
  }