<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
      <nav style="display: flex; text-align: center;  justify-content: center; padding: 24px;">
        <RouterLink to="/about">Home</RouterLink>
      </nav>

  <RouterView />
</template>

<style scoped>
</style>
