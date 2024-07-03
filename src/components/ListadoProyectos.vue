<template>
  <div>
    <ul id="listaProyectos">
      <ItemProyecto :proyecto="proyecto" v-for="proyecto in proyectos" :key="proyecto.id" />
    </ul>
  </div>
</template>

<script setup>
import ItemProyecto from './ItemProyecto.vue';

const ambitos = {
  laboral: 'Trabajo',
  personal: 'Personal',
}
const proyectos = [
  {id: 1, nombre: 'SOCD', descripcion: 'Sistema de Organización y Control de Datos', ambito: ambitos.laboral},
  {id: 2, nombre: 'Apps de Notas', descripcion: 'App de notas que hice hace 3 años usando ReactJS', ambito: ambitos.personal},
  {id: 3, nombre: 'Cajero Automático', descripcion: 'App que hice con python, un verano aburrido y solo utilizando mi celular', ambito: ambitos.personal},
]
</script>

<style scoped>
#listaProyectos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 2rem;
  padding: 5rem;
  justify-items: center;
  align-items: center;
  text-align: center;
}
</style>
