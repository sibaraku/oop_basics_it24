const Person = require('./person')

const bob = new Person('Bob', 70, 1.75)
const brian = new Person('Brian', 72, 1.80)
const alice = new Person('Alice', 60, 1.68)


const persons = [bob, brian, alice]


while (bob.getAge() <= 15) {
    bob.becomeOlder()
}  

for (let i = 0; i < 20; i++) {
    brian.becomeOlder()
}  


bob.printPerson()
brian.printPerson()
alice.printPerson()


persons.forEach(person => {
    if (person.isAdult()) {
        console.log(person.getName() + ' is adult')
    } else {
        console.log(person.getName() + ' is not adult')
    } 
})

console.log(bob.getName() + ", BMI:", bob.getBMI());
console.log(brian.getName() + ", BMI:", brian.getBMI());
console.log(alice.getName() + ", BMI:", alice.getBMI());




