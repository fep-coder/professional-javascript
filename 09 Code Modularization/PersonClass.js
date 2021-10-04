export default class Person {
    constructor(name) {
        this.name = name;
    }
}

export function comparePersons(person1, person2) {
    return person1.name === person2.name;
}