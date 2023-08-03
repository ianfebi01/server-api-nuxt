<script lang="ts" setup>
</script>
<template>
  <div class="flex flex-col gap-4 w-full animate-pulse">
    <div
      v-for="( index) in 10"
      :key="index"
      class="p-6 flex items-center shadow-card border border-gray-200 bg-white rounded-lg grow-[1]"
    >
      <div class="max-w-[400px] w-full h-5 bg-gray-200" />
    </div>
  </div>
</template>
