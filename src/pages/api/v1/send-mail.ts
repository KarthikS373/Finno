import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

import SendGrid from "@sendgrid/mail"

import decryptPassword from "../../../utils/functions/decrypt-password"

if (!process.env.EMAIL_USERNAME || !process.env.EMAIL_PASSWORD || !process.env.EMAIL_HASHKEY) {
  throw new Error("Missing email credentials")
}

const EMAIL_USERNAME = process.env.EMAIL_USERNAME
const EMAIL_PASSWORD = decryptPassword(process.env.EMAIL_PASSWORD, process.env.EMAIL_HASHKEY)

const client = SendGrid

client.setApiKey(process.env.SENDGRID_API_KEY as string)

const handler = async (req: NextApiRequest, res: NextApiResponse<APITypes>) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
      data: undefined,
      error: undefined,
    })
  }

  const expenseDetails = [
    {
      date: "2022-03-31",
      description: "Office supplies",
      amount: 25.0,
    },
    {
      date: "2022-04-01",
      description: "Lunch with clients",
      amount: 50.0,
    },
    {
      date: "2022-04-02",
      description: "Parking fees",
      amount: 10.0,
    },
  ]

  const message = {
    personalizations: [
      {
        to: [
          {
            email: "lit2021012@iiitl.ac.in",
            name: "Karthik S",
          },
        ],
      },
      {
        from: {
          email: "notification@finno.com",
          name: "Notifications: Team Finno",
        },
        to: [
          {
            email: "lit2021012@iiitl.ac.in",
            name: "Karthik S",
          },
        ],
      },
    ],
    subject: "Finno: Account Summary",
    content: [
      {
        type: "text/html",
        value: `
        <html>
        <head>
          <style>
            table {
              border-collapse: collapse;
            }
            td, th {
              border: 1px solid black;
              padding: 5px;
            }
          </style>
        </head>
        <body>
          <h1>Expense Details</h1>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              ${expenseDetails
                .map(
                  (expense) => `
                <tr>
                  <td>${expense.date}</td>
                  <td>${expense.description}</td>
                  <td>${expense.amount}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </body>
      </html>
        `,
      },
    ],
    attachments: [
      {
        content:
          "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCiAgICA8aGVhZD4KICAgICAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1lZGdlIj4KICAgICAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KCiAgICA8L2JvZHk+Cgo8L2h0bWw+Cg==",
        filename: "index.html",
        type: "text/html",
        disposition: "attachment",
      },
    ],
    ipPoolName: "transactional email",
    mailSettings: {
      bypassListManagement: {
        enable: false,
      },
      footer: {
        enable: false,
      },
      sandboxMode: {
        enable: false,
      },
    },
    trackingSettings: {
      clickTracking: {
        enable: true,
        enableText: false,
      },
      openTracking: {
        enable: true,
        substitutionTag: "%open-track%",
      },
      subscriptionTracking: {
        enable: false,
      },
    },
  }

  return client
    .send(message as any)
    .then(() => {
      console.log("Mail sent successfully")
      return res.status(200).json({
        message: "Mail sent successfully",
        data: undefined,
        error: undefined,
      })
    })
    .catch((error: any) => {
      console.error(error)
      return res.status(400).json({
        message: "Error sending Email",
        data: undefined,
        error: error,
      })
    })
}

export default handler
