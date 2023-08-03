import { createHmac } from 'crypto'

export default defineEventHandler(async (event) => {
  const body:{message:string} = await readBody(event)

  const SECRET = 'IANFEBI01'
  const hmac = createHmac('sha256', SECRET)
  hmac.update(body.message)

  const hashedMessage = hmac.digest('base64')

  return hashedMessage
})
