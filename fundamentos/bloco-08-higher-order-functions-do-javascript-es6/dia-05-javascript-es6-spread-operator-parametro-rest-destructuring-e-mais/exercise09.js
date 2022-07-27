
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };


function months({spring,summer,autumn,winter }) {
    return [...spring,...summer, ...autumn, ...winter]
}

console.log(months(yearSeasons))