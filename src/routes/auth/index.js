const MainAuthRouter = require('express').Router();

MainAuthRouter.route('/register')
    .get((req, res) => {
        res.send('Get Auth Router Register')
    })
    .post((req, res) => {
        res.send('Post Auth Router Resister')
    })

module.exports = MainAuthRouter
