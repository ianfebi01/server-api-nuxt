<script lang="ts" setup>
// loading
const loading = reactive({
  hmac: false,
  rsa : {
    encrypt: false,
    decrypt: false
  },
  aes: {
    encrypt: false,
    decrypt: false
  }
})
// HMAC
const resHmac = ref<string>('')

const createHmac = async (event:Event) => {
  if (event.target) {
    const form = new FormData(event.target as HTMLFormElement)
    loading.hmac = true
    const { data } = await useCreateHmac(form.get('hmac') as string)
    resHmac.value = data.value as string
    loading.hmac = false
  }
}

// RSA Encript
const resRsa = reactive({
  encrypt: '',
  decrypt: ''
})
const encriptRSA = async (value: Event) => {
  if (
    value.target
  ) {
    const form = new FormData(value.target as HTMLFormElement)

    loading.rsa.encrypt = true
    const { data } = await usePostEncryptData(form.get('encrypt') as string)
    resRsa.encrypt = data.value as string
    loading.rsa.encrypt = false
  }
}
// RSA decrypt

const decryptRSA = async (value: Event) => {
  if (
    value.target
  ) {
    const form = new FormData(value.target as HTMLFormElement)

    loading.rsa.decrypt = true
    const { data } = await usePostDecryptData(form.get('decrypt') as string)
    resRsa.decrypt = data.value as string
    loading.rsa.decrypt = false
  }
}

// AES encrypt

const resAes = reactive({
  encrypt: '',
  decrypt: ''
})
const encryptAES = async (value: Event) => {
  if (
    value.target
  ) {
    const form = new FormData(value.target as HTMLFormElement)

    loading.aes.encrypt = true
    const { data } = await usePostEncryptAes(form.get('encrypt') as string)
    resAes.encrypt = data.value as string
    loading.aes.encrypt = false
  }
}
const decryptAES = async (value: Event) => {
  if (
    value.target
  ) {
    const form = new FormData(value.target as HTMLFormElement)

    loading.aes.decrypt = true
    const { data } = await usePostDecryptAes(form.get('decrypt') as string)
    resAes.decrypt = data.value as string
    loading.aes.decrypt = false
  }
}
</script>

<template>
  <layout-wrapper>
    <!-- HMAC -->
    <div class="flex flex-col gap-2">
      <h1 class="text-gray-900 font-bold">
        HMAC
      </h1>
      <form @submit.prevent="(e:Event)=>createHmac(e)">
        <input
          v-types="'number'"
          name="hmac"
          placeholder="eg. Ian Febi S"
          class="px-4 h-10 border border-gray-200 focus:outline-none focus:border-blue-300"
        >
        <button
          type="submit"
          class="bg-blue-500 text-white h-10 px-4"
        >
          Create HMAC
        </button>
      </form>
      <div class="flex flex-col gap-2">
        <span class="font-semibold text-gray-900">Result: </span>
        <div
          v-if="loading.hmac"
          class="h-6 max-w-[400px] w-full bg-gray-200 animate-pulse"
        />
        <p
          v-else-if="!loading.hmac && resHmac !== ''"
          class="text-gray-500 break-words"
        >
          {{ resHmac }}
        </p>
      </div>
    </div>
    <!-- RSA -->
    <div class="flex flex-col gap-2">
      <h1 class="text-gray-900 font-bold">
        RSA Encript
      </h1>
      <form @submit.prevent="(e:Event)=>encriptRSA(e)">
        <input
          name="encrypt"
          placeholder="eg. Ian Febi S"
          class="px-4 h-10 border border-gray-200 focus:outline-none focus:border-blue-300"
        >
        <button
          type="submit"
          class="bg-blue-500 text-white h-10 px-4"
        >
          Encript RSA
        </button>
      </form>
      <div class="flex flex-col gap-2">
        <span class="font-semibold text-gray-900">Result: </span>
        <div
          v-if="loading.rsa.encrypt"
          class="h-6 max-w-[400px] w-full bg-gray-200 animate-pulse"
        />
        <p
          v-else-if="!loading.rsa.encrypt && resRsa.encrypt !== ''"
          class="text-gray-500 break-words"
        >
          {{ resRsa.encrypt }}
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <h1 class="text-gray-900 font-bold">
        RSA decrypt
      </h1>
      <form @submit.prevent="(e:Event)=>decryptRSA(e)">
        <input
          name="decrypt"
          placeholder="eg. Ian Febi S"
          class="px-4 h-10 border border-gray-200 focus:outline-none focus:border-blue-300"
        >
        <button
          type="submit"
          class="bg-blue-500 text-white h-10 px-4"
        >
          Encript RSA
        </button>
      </form>
      <div class="flex flex-col gap-2">
        <span class="font-semibold text-gray-900">Result: </span>
        <div
          v-if="loading.rsa.decrypt"
          class="h-6 max-w-[400px] w-full bg-gray-200 animate-pulse"
        />
        <p
          v-else-if="!loading.rsa.decrypt && resRsa.decrypt !== ''"
          class="text-gray-500 break-words"
        >
          {{ resRsa.decrypt }}
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <h1 class="text-gray-900 font-bold">
        AES Encrypt
      </h1>
      <form @submit.prevent="(e:Event)=>encryptAES(e)">
        <input
          name="encrypt"
          placeholder="eg. Ian Febi S"
          class="px-4 h-10 border border-gray-200 focus:outline-none focus:border-blue-300"
        >
        <button
          type="submit"
          class="bg-blue-500 text-white h-10 px-4"
        >
          Encript AES
        </button>
      </form>
      <div class="flex flex-col gap-2">
        <span class="font-semibold text-gray-900">Result: </span>
        <div
          v-if="loading.aes.encrypt"
          class="h-6 max-w-[400px] w-full bg-gray-200 animate-pulse"
        />
        <p
          v-else-if="!loading.aes.encrypt && resAes.encrypt !== ''"
          class="text-gray-500 break-words"
        >
          {{ resAes.encrypt }}
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <h1 class="text-gray-900 font-bold">
        AES Decrypt
      </h1>
      <form @submit.prevent="(e:Event)=>decryptAES(e)">
        <input
          name="decrypt"
          placeholder="eg. Ian Febi S"
          class="px-4 h-10 border border-gray-200 focus:outline-none focus:border-blue-300"
        >
        <button
          type="submit"
          class="bg-blue-500 text-white h-10 px-4"
        >
          Decrypt AES
        </button>
      </form>
      <div class="flex flex-col gap-2">
        <span class="font-semibold text-gray-900">Result: </span>
        <div
          v-if="loading.aes.decrypt"
          class="h-6 max-w-[400px] w-full bg-gray-200 animate-pulse"
        />
        <p
          v-else-if="!loading.aes.decrypt && resAes.decrypt !== ''"
          class="text-gray-500 break-words"
        >
          {{ resAes.decrypt }}
        </p>
      </div>
    </div>
  </layout-wrapper>
</template>
