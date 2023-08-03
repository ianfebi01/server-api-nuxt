import { constants, privateDecrypt, publicEncrypt } from 'crypto'

export const encryptMessage = (message:string, publicKey:Buffer) => {
  const encryptedData = publicEncrypt({
    key     : publicKey,
    padding : constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256'
  }, Buffer.from(message))

  return encryptedData.toString('base64')
}

export const decryptMessage = (encryptedMessage: string, privateKey:Buffer) => {
  const bufferData = Buffer.from(encryptedMessage, 'base64')
  const decryptedData = privateDecrypt({
    key     : privateKey,
    padding : constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256'
  }, bufferData)

  return decryptedData.toString()
}
