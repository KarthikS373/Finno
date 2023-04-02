import crypto from "crypto-js"

const encryptPassword = (password: string, key: string) => {
  const encrypted = crypto.AES.encrypt(password, key).toString()

  return encrypted
}

export default encryptPassword
