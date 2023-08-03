<script setup lang="ts">

const { data, pending } = useGetArticles(1, 10)

</script>
<template>
  <div class="w-full">
    <card-preview-article

      :datas="data"
    />
    <!-- <card-loading-preview-article v-else-if="pending" /> -->
  </div>
</template>
