const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      let ifScope2 = ' ótimo, fui utilizada no escopo !';
      message = `${ifScope} ${ifScope2}`
      console.log(message);
    } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

//   testingScope(true);