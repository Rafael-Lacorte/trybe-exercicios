const template = 'Tryber x aqui!'

const insertName = (name) => {
    let frase = template.replace('x', name)
    return frase
}



const skills = ['Git', ' JavaScript', ' Bootstrap ']

const myFavoriteSkills = (frase) => {
    let message = `${frase}\nMinhas três habilidades principais são: ${skills} `
    console.log(message)
}

myFavoriteSkills(insertName('rafael'))