class Person {
    #name = ""
    #age = 0
    #kaal = 0
    #pikkus = 0

    constructor(name, kaal, pikkus) {
        this.#name = name
        this.#kaal = kaal;
        this.#pikkus = pikkus;
    } 


    setKaal(kaal) {  
        if (kaal <= 0) {
            throw new Error("Kaal peab olema suurem kui 0");
        }
        this.#kaal = kaal;
    }
 
    setPikkus(pikkus) {
        if (pikkus <= 0) {
            throw new Error("Pikkus peab olema suurem kui 0");
        }
        this.#pikkus = pikkus;
    }

    getBMI() {
        let bmi = this.#kaal / (this.#pikkus * this.#pikkus);
        return Number(bmi.toFixed(2));
    } 






    becomeOlder() {
        this.#age += 1

    }    

    isAdult() {
        if (this.#age < 18) {
            return false 
        } 
        return true
    } 

    printPerson() {
        console.log(this.#name + ', age ' + this.#age + ' years old')
    } 

    setName(name) {
        this.#name = name ()
    }
    getName() {
        return this.#name
    }

    setAge(age) {
        this.#age = age
    }
    getAge() {
        return this.#age

    }



}


module.exports = Person