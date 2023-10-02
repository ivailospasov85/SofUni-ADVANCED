function sumTable() {
    let sum = document.querySelectorAll('tr td:nth-of-type(2)')

    let arrSum = Array.from(sum)
    let junk = arrSum.pop()
    let sumA = arrSum.reduce((a, number) => {
        let curNum = Number(number.textContent || 0)
        return a + curNum
    }, 0)

    let totalSumId = document.getElementById('sum')
    totalSumId.textContent = sumA
    console.log(sumA);
}