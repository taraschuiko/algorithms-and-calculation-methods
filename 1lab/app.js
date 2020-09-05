const math = require('mathjs')

x = 1.27
f = 5.325 - x ** 3 + 2 * x

console.log('Result:', f)

firstDiff = math.derivative('x^2', 'x').evaluate({x: x})
secondDiff = math.derivative('2*x', 'x').evaluate({x: x})

fResult = 5.325 - firstDiff + secondDiff

t = 15
dX = 0.5 * 10 ** (-t)
fResult = Math.abs(fResult) * dX
mistake = fResult / f

console.log('Mistake:', mistake)