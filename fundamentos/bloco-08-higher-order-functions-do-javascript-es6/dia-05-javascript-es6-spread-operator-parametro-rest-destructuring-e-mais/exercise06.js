const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

toObject = ([model, brand, year]) => ({model, brand,year })

console.log(toObject(palio))