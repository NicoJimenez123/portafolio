<template>
  <div :class="`item-proyecto ${props.oculto ? 'proyecto-oculto' : 'proyecto-mostrar'}`">
    <p class="proyecto proyecto-ambito"> {{ props.ambito }} </p>
    <p class="proyecto proyecto-nombre"> {{ props.nombre }} </p>
    <p class="proyecto proyecto-descripcion"> {{ props.descripcion }} </p>
    <p class="proyecto proyecto-tecnologias"> {{ props.tecnologias }} </p>
  </div>
</template>

<script setup>
import { watch } from 'vue';

const props = defineProps({
  ambito: String,
  nombre: String,
  descripcion: String,
  tecnologias: Array,
  oculto: Boolean
})

watch(() => props.oculto, () => {
  alert(props.oculto)
})
</script>

<style>
.item-proyecto {
  width: 100%;
}

.proyecto-mostrar {
  background-color: red;
}

.proyecto-oculto {
  background-color: black;
}
</style>