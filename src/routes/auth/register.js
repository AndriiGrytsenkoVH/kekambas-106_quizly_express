const { User } = require('../../models');
const bcrypt = require('bcrypt')


module.exports = async (req, res) => {
    console.log(req.body)
    if (req.body.password !== req.body.confirmPass){
        res.send({ error: 'Your Passwords do not match'})
    } else {
        const { username, email, password } = req.body
        const passwordHash = await bcrypt.hash(password, 10)
        const user = new User({ username, email, password: passwordHash})
        user.save()
        res.send(`New User Created - ${user.username}`)
    }
}
