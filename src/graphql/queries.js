const { GraphQLList, GraphQLID } = require('graphql')
const { UserType } = require('./types')

const { User } = require('../models')

const users = {
    type: new GraphQLList(UserType),
    description: 'Get all users from the database',
    resolve(parent, args){
        return User.find()
    }
}

const user = {
    type: UserType,
    description: 'Query a single user by if',
    args: {
        id: {type: GraphQLID }
    },
    resolve(parent, args){
        return User.findById(args.id)
    }
}

module.exports = {
    users,
    user
}
