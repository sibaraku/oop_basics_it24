const Person = require('./person')

const bob = new Person()
console.log(bob)
console.log(`name: ` + bob.getName)
console.log(`age: ${bob.getAge}`)
