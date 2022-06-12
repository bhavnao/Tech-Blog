const { User } = require('../models');

const userData = 
    {   
        username: "barbara",
        email: "barbara@gmail.com",
        password: "p@ssword1"
    }


const seedUsers = () => User.create(userData);

module.exports = seedUsers;