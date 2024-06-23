<script setup>
import { RouterView } from 'vue-router';
import AppBody from './components/AppBody.vue';
import AppFooter from './components/AppFooter.vue';
import AppTopBar from './components/AppTopBar.vue'
</script>

<template>
  <div>
    <AppTopBar />
    <AppBody>
      <RouterView />
    </AppBody>
    <AppFooter />
  </div>
</template>

<style scoped>
</style>
