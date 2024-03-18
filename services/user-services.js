const prisma = require("../models/db");

exports.createUser = async (username, password, Address, Phone, idCard) => {
    try {
        return await prisma.user.create({
            data: {
                username,
                password,
                Address,
                Phone,
                idCard
            }
        });
    } catch (error) {
        throw new Error(`Failed to create user: ${error.message}`);
    }
};

exports.getUserByUsername = (user) => {
    return prisma.user.findFirst({
        where: {
            username: user,
        }
    })
}

exports.getUserByPassword = (userPassword) => {
    return prisma.user.findFirst({
      where: {
        password: userPassword,
      }
    })
}
