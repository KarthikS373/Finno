import crypto from "crypto-js"

const decryptPassword = (encryptedData: string, key: string) => {
  const decrypted = crypto.AES.decrypt(encryptedData, key).toString(crypto.enc.Utf8)

  return decrypted
}

export default decryptPassword
