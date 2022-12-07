const fs = require('fs').promises;

async function readAll() {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data)
    const names = simpsons.map(({id, name }) => `${id} ${name}`)
    names.forEach(element => {
        console.log(element)        
    });
}

// readAll()

async function findbyId(id) {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data)
    const chosenSimpson = simpsons.find((simpsons) => Number(simpsons.id) === id)

    if(!chosenSimpson) {
      throw new Error('id não encontrado');
    }
    return chosenSimpson
}

// findbyId(1)

async function filterSimpsons() {
    const fileContent = await fs
      .readFile('./simpsons.json', 'utf-8');
    
    const simpsons = JSON.parse(fileContent);
    const newArray = simpsons.filter((simpsons) => simpsons.id !== '10' && simpsons.id !== '6')
    await fs.writeFile('/simpsons.js', JSON.stringify(newArray))
  }

//   filterSimpsons()

async function filterSimpsons() {
    const fileContent = await fs
      .readFile('./simpsons.json', 'utf-8');
    
    const simpsons = JSON.parse(fileContent);
    const familyIds = [1,2,3,4]
    const newArray = simpsons.filter((simpsons) => familyIds.includes(simpsons.id))
    await fs.writeFile('/simpsons.js', JSON.stringify(newArray))
  }

//     filterSimpsons()

async function addSimpson() {
    const fileContent = await fs
        .readFile('./simpsons.json', 'utf-8');
    const newArray = simpsons.filter((simpsons) => simpsons.id !== '10' && simpsons.id !== '6')
    const simpsons = JSON.parse(fileContent);
    simpsons.push({ id: '8', name: 'Nelson Muntz' })
    await fs.writeFile('/simpsons.js', JSON.stringify(simpsons))
    }

    // addSimpson()

async function addMaggieRemoveNelson() {
    const fileContent = await fs
        .readFile('./simpsons.json', 'utf-8');
    
    const simpsons = JSON.parse(fileContent);
    const newArray = simpsons.filter((simpsons) => simpsons.id !== '8')
    newArray.push({ id: '15', name: 'Maggie Simpson' })
    await fs.writeFile('/simpsons.js', JSON.stringify(newArray))
    }

    addSimpson()