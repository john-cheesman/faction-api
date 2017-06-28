let _personRequest

module.exports = class Person {
    constructor(personRequest) {
        _personRequest = personRequest
    }

    get id() {
        return `_${this.name.toLowerCase()}`
    }

    get name() {
        return _personRequest.name
    }

    get xp() {
        return _personRequest.xp
    }

    toObject() {
        return {
            id: this.id,
            name: this.name,
            xp: this.xp
        }
    }
}
