import type { NextApiRequest, NextApiResponse } from "next"
import Twilio from "twilio"

const accountSid = process.env.TWILIO_ACCOUNT_SID as string
const authToken = process.env.TWILIO_AUTH_TOKEN as string

const client = Twilio(accountSid, authToken)

const handler = (req: NextApiRequest, res: NextApiResponse<APITypes>) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
      data: undefined,
      error: undefined,
    })
  }

  const { name, message, to } = req.body

  return client.messages
    .create({ body: `Hello ${name}, ${message}, - Regarding Team Finno`, from: "", to: to })
    .then((d: { sid: any }) => {
      console.log(d)

      return res.status(200).json({
        data: d,
        error: undefined,
        message: "Message sent successfully",
      })
    })
    .catch((err: any) => {
      console.log(err)
      return res.status(500).json({
        data: undefined,
        error: undefined,
        message: "An error occurred",
      })
    })

  res.status(200).send({
    message: "Connection Successful",
    error: null,
    data: null,
  })
}

export default handler
