<script setup lang="ts">
defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <button @click="handleError">
    Clear errors
  </button>
</template>
