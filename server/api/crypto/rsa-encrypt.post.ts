// import { readFileSync } from 'fs'
// import path from 'path'
import { IRsaPayload } from 'types/crypto'
import { encryptMessage } from '~~/utils/crypto'

export default defineEventHandler(async (event) => {
  // const filePath = path.join(process.cwd(), 'key/rsa', 'public.pem')

  // const publicKey = Buffer.from(
  //   readFileSync(filePath, { encoding: 'utf-8' })
  // )

  const { rsaPub } = useRuntimeConfig()

  const publicKey = Buffer.from(rsaPub, 'base64')

  const body:IRsaPayload = await readBody(event)

  return encryptMessage(body.message, publicKey)
})
