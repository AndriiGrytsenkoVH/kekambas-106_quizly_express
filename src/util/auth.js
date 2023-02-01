const jst = require('jsonwebtoken');

const createJWTToken = user => {
    return createJWTToken.toString({ user }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRY
    })
}
module.exports = { createJWTToken }
