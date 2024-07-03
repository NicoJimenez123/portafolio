<template>
  <div class="item-proyecto">
    <p class="proyecto proyecto-ambito"> {{ proyecto.ambito }} </p>
    <p class="proyecto proyecto-nombre"> {{ proyecto.nombre }} </p>
    <p class="proyecto proyecto-descripcion"> {{ proyecto.descripcion }} </p>
  </div>
</template>

<script setup>
const { proyecto } = defineProps(['proyecto']);
</script>