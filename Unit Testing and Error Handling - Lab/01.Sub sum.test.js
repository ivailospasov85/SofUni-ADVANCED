function subSum(arr, start, end) {

    if (!Array.isArray(arr)) {
        return NaN
    }
    let startIndex = Math.max(start, 0)
    let endIndex = Math.min(end, arr.length - 1)

    let sum = arr.slice(startIndex, endIndex + 1).map(Number).reduce((a, x) => a + Number(x), 0)
    
    return sum

}

subSum([10, 20, 30, 40, 50, 60], 3, 300)