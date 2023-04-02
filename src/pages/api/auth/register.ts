import bcrypt from "bcryptjs"
import { NextApiRequest, NextApiResponse } from "next"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user: RegisterForm = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }
  const exists = await prisma.user.count({ where: { email: user.email } })
  if (exists) {
    return res.json(`User already exists with that email`)
  }
  const newUser = await createUser(user)
  if (!newUser) {
    return res.json("Error occured")
  }
  return res.json("Created")
}

const createUser = async (user: RegisterForm) => {
  const passwordHash = await bcrypt.hash(user.password, 10)
  const newUser = await prisma.user.create({
    data: {
      id: (Math.random() * 1000).toString(),
      email: user.email,
      password: passwordHash,
      name: user.name,
    },
  })
  return { id: newUser.id, email: user.email }
}
