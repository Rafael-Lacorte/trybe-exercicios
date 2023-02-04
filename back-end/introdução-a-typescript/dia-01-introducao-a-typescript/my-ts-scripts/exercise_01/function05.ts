// Essa é uma função que verifica se a idade passada é maior ou menor de 18 anos.
const ageInput = 15;

const isOfLegalAge = (param: string | boolean) => {
  return !!param
}

ageInput >= 18
  ? console.log(isOfLegalAge('true'))
  : console.log(isOfLegalAge(false));
