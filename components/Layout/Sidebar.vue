<script lang="ts" setup>
import { menu } from '~~/menu'

const route = useRoute()
const router = useRouter()

const activeMenu = (path : string) => {
  return route.path.includes(path)
}

</script>
<template>
  <aside class="w-60 shadow-card flex flex-col gap-4">
    <section class="h-20 flex justify-start items-center p-4">
      <div class="text-2xl text-blue-700">
        Huaa
      </div>
    </section>
    <ul class="flex flex-col gap-2 px-4">
      <li
        v-for="(item, index) in menu"
        :key="index"
        class="h-12  text-sm text-gray-600  rounded-lg flex justify-normal items-center px-4 hover:bg-gray-100 transition-all duration-300 ease-in-out"
        :class="{'text-gray-800 bg-gray-100 font-semibold':activeMenu(item.url)} "
        @click="router.push(item.url)"
      >
        {{ item.title }}
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>

</style>
