<template>
  <div class="w-screen h-screen flex overflow-hidden">
    <layout-sidebar />
    <div class="p-4 w-full overflow-y-scroll">
      <slot />
    </div>
  </div>
</template>
