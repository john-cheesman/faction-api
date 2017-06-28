'use strict'

let config = require('./config')

module.exports = {
    getParameter: getParameter
}

function getParameter(request, parameterName) {
    if (request.swagger.params && request.swagger.params[parameterName]) {
        return request.swagger.params[parameterName].value
    }

    console.warn(`Failed to get parameter from request: ${parameterName}`)
}
