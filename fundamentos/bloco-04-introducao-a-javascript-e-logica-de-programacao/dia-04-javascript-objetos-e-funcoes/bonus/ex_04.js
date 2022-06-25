let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

console.log(
    `O morador do ${Object.keys(moradores)[0]} de nome ${moradores.blocoUm[0].nome} ${moradores.blocoUm[0].sobrenome} mora no ${moradores.blocoUm[0].andar}° andar, no apartamento ${moradores.blocoUm[0].apartamento}.`
)