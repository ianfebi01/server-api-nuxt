<script lang="ts" setup>
import { Post } from '~~/types/articles'
interface Props{
    datas: Post[]
}

defineProps<Props>()
</script>
<template>
  <div class="flex flex-col gap-4 w-full">
    <div
      v-for="(item, index) in datas"
      :key="index"
      class="p-6 flex items-center shadow-card border border-gray-200 bg-white rounded-lg grow-[1]"
    >
      <p>{{ item?.title }}</p>
    </div>
  </div>
</template>
