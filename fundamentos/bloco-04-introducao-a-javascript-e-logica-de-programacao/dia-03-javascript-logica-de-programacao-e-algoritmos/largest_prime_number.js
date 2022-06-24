
let largestPrime = 0

for (indexNumber = 2; indexNumber < 100; indexNumber++){
    let isPrime = true
    for (i = 2; i < indexNumber; i++){
        if (indexNumber % i == 0){
            isPrime = false
        }
    }
    if (indexNumber > 1 && isPrime == true) {
        if (indexNumber > largestPrime) {
            largestPrime = indexNumber
        }
    }
}


console.log(largestPrime)
