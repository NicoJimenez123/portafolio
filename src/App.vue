<script setup>
import { onMounted } from 'vue';
import AppBody from './components/AppBody.vue';
import AppFooter from './components/AppFooter.vue';
import AppTopBar from './components/AppTopBar.vue'

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('toggle-theme').addEventListener('click', function() {
    if (document.documentElement.getAttribute('data-theme') === 'light') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  });
});

</script>

<template>
  <div class="app">
    <AppTopBar />
    <AppBody />
    <AppFooter />
  </div>
</template>

<style scoped>
</style>
