const math = require('mathjs')

let x = [
  3.10, 5.17, 5.34, 3.10, 5.17, 2.27, 2.27, 3.78, 3.96, 7.43, 5.34, 3.10,
  0.23, 0.65, 0.23, 4.54, 0.24, 0.76, 1.34, 15.00, 0.43, 0.42, 0.01, 0.91
]

function expectation(a, n){
    const p = 1 / n
    let sum = a.reduce((accumulator, currentValue, i) => accumulator + (a[i] * p), 0)
    return sum
}
let xExpect = expectation(x, x.length)
console.log('Математичне сподівання: ', xExpect)

let xAverage = x.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / x.length
console.log('Середнє арефметичне: ', xAverage)

let xMeanSquare = x.reduce((accumulator, currentValue) => accumulator + currentValue ** 2, 0) / x.length
console.log('Середнє квадратів: ', xMeanSquare)

let variance = x.reduce((accumulator, currentValue) => accumulator + (currentValue - xMeanSquare) ** 2, 0) / x.length
console.log('Дисперсія: ', variance)

let skv = variance ** (1 / 2)
console.log('СКВ: ', variance)

let alphabet = []
x.forEach(element => {
    if (!alphabet.includes(element)) alphabet.push(element)
})
let entropy = -alphabet.reduce((accumulator, currentValue) => {
    probability = x.filter(elemet => elemet === currentValue).length / x.length
    return accumulator + probability * math.log(probability)
}, 0)
console.log('Ентропія: ', entropy)