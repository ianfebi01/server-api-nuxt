export const useCreateHmac = async (value : string) => {
  return await useFetch('/api/crypto/hmac', {
    method: 'POST',
    body  : {
      message: value
    },
    key: 'hmac'
  })
}

export const usePostEncryptData = async (message:string) => {
  return await useFetch('/api/crypto/rsa-encrypt', {
    method: 'POST',
    body  : {
      message
    },
    key: 'rsa'
  })
}
export const usePostDecryptData = async (message:string) => {
  return await useFetch('/api/crypto/rsa-decrypt', {
    method: 'POST',
    body  : {
      message
    },
    key: 'rsa-decrypt'
  })
}

export const usePostEncryptAes = async (message:string) => {
  return await useFetch('/api/crypto/aes-encrypt', {
    method: 'POST',
    body  : {
      message
    },
    key: 'aes'
  })
}
export const usePostDecryptAes = async (message:string) => {
  return await useFetch('/api/crypto/aes-decrypt', {
    method: 'POST',
    body  : {
      message
    },
    key: 'aes-decrypt'
  })
}
