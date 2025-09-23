const MyDate = require('./mydate')

const d1 = new MyDate(1, 1, 2020)
const d2 = new MyDate(9, 12, 2007)
const d3 = new MyDate(77654, 2, 2021)

console.log(d1.printDay())
console.log(d2.printDay())
console.log(d3.printDay())

console.log(d1.earlier(d2))
console.log(d2.earlier(d3))
console.log(d3.earlier(d1))