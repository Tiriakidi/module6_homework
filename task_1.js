let arr = [1, NaN, '',  22, 0, null];

function findOddEvenNumbers (array) {
    let oddNums = 0;
    let evenNums = 0;
    let nullNums = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === 'number' && !isNaN(array[i])) {
          if (array[i] === 0) {
            nullNums++
          } else if (array[i] % 2 === 0) {
            evenNums++
          } else {
            oddNums++
          }
        }  
    }
    console.log(`odd: ${oddNums}, even: ${evenNums}, 0: ${nullNums}`)
}

findOddEvenNumbers(arr)

  
  
