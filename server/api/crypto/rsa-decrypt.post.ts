// import { readFileSync } from 'fs'
// import path from 'path'
import { IRsaPayload } from 'types/crypto'
import { decryptMessage } from '~~/utils/crypto'

export default defineEventHandler(async (event) => {
  // const filePath = path.join(process.cwd(), 'key/rsa', 'private.pem')
  // const privateKey = readFileSync(filePath, { encoding: 'utf-8' })

  const { rsa } = useRuntimeConfig()

  const privateKey = Buffer.from(rsa, 'base64')

  const body:IRsaPayload = await readBody(event)

  return decryptMessage(body.message, privateKey)
})
