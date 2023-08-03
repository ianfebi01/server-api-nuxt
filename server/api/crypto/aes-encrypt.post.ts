import CriptoJS from 'crypto-js'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { secretAes } = useRuntimeConfig()

  return CriptoJS.AES.encrypt(body.message, secretAes).toString()
})
