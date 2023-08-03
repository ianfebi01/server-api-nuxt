<script lang="ts" setup>

</script>

<template>
  <layout-wrapper>
    <span class="text-3xl text-gray-900">Articles</span>
    <Suspense>
      <template #fallback>
        <card-loading-preview-article />
      </template>
      <pages-articles />
    </Suspense>
  </layout-wrapper>
</template>
