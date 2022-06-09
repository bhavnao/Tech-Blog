const { User } = require('../models');

const userData = [
    {   id: 1,
        username: "barbara",
        email: "barbara@gmail.com",
        password: "p@ssword1"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;