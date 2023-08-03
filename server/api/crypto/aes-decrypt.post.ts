import CriptoJS from 'crypto-js'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { secretAes } = useRuntimeConfig()

  const bytes = CriptoJS.AES.decrypt(body.message, secretAes)
  return bytes.toString(CriptoJS.enc.Utf8)
})
