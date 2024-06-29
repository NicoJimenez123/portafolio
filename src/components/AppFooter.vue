<template>
  <nav class="footer">
    Nicolas Jimenez
    <img :src='gatini' alt="icono de gato"/>
  </nav>
</template>

<script setup>
import gatini from '../assets/gatini.svg'
</script>

<style>
.footer img {
  width: 2rem;
}
</style>