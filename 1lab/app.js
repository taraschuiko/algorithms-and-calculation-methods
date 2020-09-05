const math = require('mathjs')

x = 1.27
f = 5.325 - x ** 3 + 2 * x

console.log('Результат:', f)

firstDiff = math.derivative('x^2', 'x').evaluate({x})
secondDiff = math.derivative('2*x', 'x').evaluate({x})

fResult = 5.325 - firstDiff + secondDiff

dX = x - 1.3
fResult = Math.abs(fResult) * dX
mistake = fResult / f

console.log('Похибка:', mistake)