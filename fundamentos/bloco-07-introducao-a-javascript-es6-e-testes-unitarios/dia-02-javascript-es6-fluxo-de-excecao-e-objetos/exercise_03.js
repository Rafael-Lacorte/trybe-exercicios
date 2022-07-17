const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


const modifyShift = (object, key, value) => {
    object[key] = value
}

modifyShift(lesson1, 'turno', 'noite')

// console.log(lesson1)

const listKeys = (object) => {
    return Object.keys(object)
}

// console.log(listKeys(lesson1))

const listValues = (object) => {
    return Object.values(object)
}

// console.log(listValues(lesson1))

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

// console.log(allLessons)

function getValueByKey(object, key) {
    return Object.values(object)[key]
}

// console.log(getValueByKey(lesson1, 0))

const verifyPair = (obj, key, value) => {
    const array = Object.entries(obj);
    let hasMatch = false;
    for (let i in array) {
      if (array[i][0] === key && array[i][1] === value) hasMatch = true;
    }
    return hasMatch;
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));

verifyPair(lesson1, 'turno')