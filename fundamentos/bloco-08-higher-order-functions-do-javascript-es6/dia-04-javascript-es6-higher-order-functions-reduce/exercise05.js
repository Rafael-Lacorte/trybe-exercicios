const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(arr) {
  return arr.reduce((acc, curr,) => acc + curr.toLowerCase().split('').reduce((acc2, curr2) => curr2 === 'a' ? acc2 + 1 : acc2, 0), 0)
  
}

console.log(containsA(names))