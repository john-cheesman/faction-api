'use strict'

let utility = require('../utility')
let Person = require('../models/person')

module.exports = {
    create
}

function create(request, response) {
    let person;

    person = utility.getParameter(request, 'person')
    return response.status(200).json({ person: new Person(person).toObject() })
}
