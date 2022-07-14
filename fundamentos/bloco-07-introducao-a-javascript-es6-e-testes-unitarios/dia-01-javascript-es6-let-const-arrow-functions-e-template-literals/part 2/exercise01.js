const factorial = (number) => {
    let factorial = number
    for (i = number - 1; i > 0; i-- ) {
        factorial*= i
        console.log(factorial)
    }
}

factorial(10)