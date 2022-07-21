const checkAnswers = (feedback, studentAswers) => {
    grade = 0
    for (i = 0; i < feedback.length; i += 1) {
        if (studentAswers[i] === feedback[i]) {
            grade += 1
        } else if (studentAswers[i][0] === 'N') {
            grade += 0
        } else if (studentAswers[i] !== feedback[i]) {
            grade -= 0.5
        }
    
    }
    console.log(grade)
}

const checkGrade = (feedback, studentAswers, callback) => {
    callback(feedback,studentAswers)
}

checkGrade(['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'N.A'],checkAnswers)