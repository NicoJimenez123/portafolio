<template>
  <div>
    <ul>
      <li v-for="proyecto in proyectos" :key="proyecto.id">
        {{ proyecto.nombre }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const proyectos = [
  {id: 1, nombre: 'Proyecto 1'},
  {id: 2, nombre: 'Proyecto 2'},
  {id: 3, nombre: 'Proyecto 3'}
]
</script>

<style scoped>
</style>
