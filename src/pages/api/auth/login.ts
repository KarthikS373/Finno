import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const u: LoginForm = {
    email: req.body.email,
    password: req.body.password,
  }
  const user = await prisma.user.findUnique({
    where: { email: u.email },
  })
  if (!user || !(await bcrypt.compare(u.password, user.password)))
    return res.json({ error: 'Incorrect details' })
  return res.json({ id: user.id, email: user.email })
}

export default handler
