const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

async function createUser(req, res) {
  const name = req.body.name;
  const email = req.body.email;
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
