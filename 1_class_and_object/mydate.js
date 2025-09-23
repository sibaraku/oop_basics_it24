class MyDate {
    #day;
    #month;
    #year;

    constructor(day, month, year) {
    this.#day = day;
    this.#month = month;
    this.#year = year;
    this.isValid();
}

    isValid() {
        if (!Number.isInteger(this.#day) || !Number.isInteger(this.#month) || !Number.isInteger(this.#year)) {
        console.log("The day, month, and year must be integers.");
        return false;
        }
        if (this.#month < 1 || this.#month > 12) {
        console.log("The month must be in the range 1-12.");
        return false;
        }
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (this.#day < 1 || this.#day > daysInMonth[this.#month - 1]) {
        console.log(`The day must fit the month. Month ${this.#month} contains ${daysInMonth[this.#month - 1]} days.`);
        return false;
        }
        return true;
}

printDay() {
    return `${this.#day}.${this.#month}.${this.#year}`;
 }

earlier(compared) {
    if (!(compared instanceof MyDate)) return false;
    if (this.#year < compared.#year) return true;
    if (this.#year > compared.#year) return false;
    if (this.#month < compared.#month) return true;
    if (this.#month > compared.#month) return false;
    return this.#day < compared.#day;
    }
}

module.exports = MyDate;


