const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

async function createUser(name, email) {
  await prisma.user.create({
    data: {
      name: name,
      email: email,
    },
  });
}

async function getAllUsers(req, res) {
  const allUsers = await prisma.user.findMany();
  return allUsers;
}

module.exports = {
  createUser,
  getAllUsers,
};
