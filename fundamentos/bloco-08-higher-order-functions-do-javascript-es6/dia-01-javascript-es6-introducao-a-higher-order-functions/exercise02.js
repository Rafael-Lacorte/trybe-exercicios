lotteryResult = (number, func) => {
    lotteryNumber = Math.random() * 5
    roundedLotteryNumber = Math.round(lotteryNumber)
    return func(number, roundedLotteryNumber)
}

const checkResult = (choosenNumber, winnerNumber) => {
    if (choosenNumber === winnerNumber) {
        return 'Parabéns você ganhou'
    }
    return 'Tente novamente'
}

// lotteryResult(3, checkResult)

console.log(lotteryResult(3,checkResult))