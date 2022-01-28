    let arrOfEven = []
    let arrOfOdd = []
    let sumEven
    let sumOdd
    let arr = []


    function numInArr(number) {
        while (number > 0) {
            let lastDigit = number % 10
            arr.push(lastDigit)
            number = Math.floor(number / 10)
        }
        return arr
    }

    const odd = (element) => element % 2 === 1

    const even = (element) => element % 2 === 0

    function getOneThousandBetween (arr) {
      let i
      let j
      for ( i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        if (odd(arr[i]) && odd(arr[i + 1]) && odd(arr[j]) && odd(arr[j - 1])) {
          if (arr.slice(i + 2, j - 1).some(even)) {
            return 1000
          }
        }
      }
    }

    function getOneThousandFromEndToBeginning (arr) {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (odd(arr[0]) && odd(arr[1]) && odd(arr[i]) && odd(arr[i - 1])) {
          if (arr.slice(2, i - 1).some(even)) {
            return 1000
          }
        }
      }
    }

    function getOneThousandFromBeginningToEnd (arr) {
      for (let i = 0; i < arr.length; i++) {
        if (odd(arr[7]) && odd(arr[6]) && odd(arr[i]) && odd(arr[i + 1])) {
          if (arr.slice(i + 2, 6).some(even)) {
            return 1000
          }
        }
      }
    }

    function getTwoThousandBetween (arr) {
      let i
      let j
      for ( i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        if (arr.slice(2, i - 1).some(even)) {
          if (odd(arr[i]) && odd(arr[i + 1]) && odd(arr[j]) && odd(arr[j - 1])) {
            const arrOfOddInt = []
            arrOfOddInt.push(arr[i])
            arrOfOddInt.push(arr[i + 1])
            arrOfOddInt.push(arr[j - 1])
            arrOfOddInt.push(arr[j])
            if (arrOfOddInt[0] < arrOfOddInt[1] && arrOfOddInt[2] < arrOfOddInt[3]) {
              return true
            }
          }
        }
      }
    }

    function getTwoThousandFromEndToBeginning (arr) {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (odd(arr[0]) && odd(arr[1]) && odd(arr[i]) && odd(arr[i - 1])) {
          if (arr.slice(2, i - 1).some(even)) {
            const arrOfOddInt = []
            arrOfOddInt.push(arr[0])
            arrOfOddInt.push(arr[1])
            arrOfOddInt.push(arr[i])
            arrOfOddInt.push(arr[i - 1])
            if (arrOfOddInt[0] < arrOfOddInt[1] && arrOfOddInt[2] < arrOfOddInt[3]) {
              return true
            }
          }
        }
      }
    }

    function getTwoThousandFromBeginningToEnd (arr) {
      for (let i = 0; i < arr.length; i++) {
        if (odd(arr[7]) && odd(arr[6]) && odd(arr[i]) && odd(arr[i + 1])) {
          if (arr.slice(i + 2, 6).some(even)) {
            const arrOfOddInt = []
            arrOfOddInt.push(arr[7])
            arrOfOddInt.push(arr[6])
            arrOfOddInt.push(arr[i])
            arrOfOddInt.push(arr[i + 1])
            if (arrOfOddInt[0] < arrOfOddInt[1] && arrOfOddInt[2] < arrOfOddInt[3]) {
              return true
            }
          }
        }
      }
    }

    function firstCondition(arr) {
      if (getOneThousandBetween(arr)) {
        return getOneThousandBetween(arr)
      }
      if (getOneThousandFromEndToBeginning(arr)) {
        return getOneThousandFromEndToBeginning()
      }
      if (getOneThousandFromBeginningToEnd(arr)) {
        return getOneThousandFromBeginningToEnd(arr)
      }
    }

    function secondCondition(arr) {
      if (getTwoThousandBetween(arr)) {
        return 2000
      }
      if (getTwoThousandFromEndToBeginning(arr)) {
        return 2000
      }
      if (getTwoThousandFromBeginningToEnd(arr)) {
        return 2000
      }
    }

    function getArrOfEven (arr) {
      arrOfEven = arr.filter(even)
      return arrOfEven
    }

    function getArrOfOdd (arr) {
      arrOfOdd = arr.filter(odd)
      return arrOfOdd
    }



    function getSumEven (arr) {
      sumEven = arr.reduce((acum, curent) => acum += curent)
      return sumEven
    }

    function getSumOdd (arr) {
      sumOdd = arr.reduce((acum, curent) => acum += curent)
      return sumOdd
    }


    function getOneHundred () {
      getArrOfOdd(arr)
      getArrOfEven(arr)
      getSumEven(arrOfEven)
      getSumOdd(arrOfOdd)
      if (sumEven < sumOdd) {
        return 100
      }
      return 0
    }

function amount(num) {
  numInArr(num)

  if (secondCondition(arr)) {
    return secondCondition(arr)
  }

  if (firstCondition(arr)) {
    return firstCondition(arr)
  }

  return getOneHundred ()
}
