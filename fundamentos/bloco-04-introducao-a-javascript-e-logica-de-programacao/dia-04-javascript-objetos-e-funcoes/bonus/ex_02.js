let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];


function returnEven(vector) {
    let evenNumbers = []
    for (array of vector){
        for (i = 0; i < array.length; i++){
            if (array[i] % 2 == 0 ){
                evenNumbers.push(array[i])
            } 
        }
    }
    return evenNumbers;
}

console.log(
    returnEven(vector)
)