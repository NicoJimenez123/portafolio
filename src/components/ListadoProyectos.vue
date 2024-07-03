<template>
  <div id="proyectos">
    <div id='listaTecnologias'>
      <button
        v-for="tecnologia in tecnologias"
        :key="tecnologia"
        @click="onClickTecnologia(tecnologia)"
        :class="`${tecnologiasSeleccionadas.includes(tecnologia) ? 'tecnologia-seleccionada' : 'tecnologia-no-seleccionada'}`"
      >
        {{ tecnologia }}
      </button>
    </div>
    <ul id="listaProyectos">
      <ItemProyecto v-bind="proyecto" v-for="proyecto in proyectos" :key="proyecto.id" />
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ItemProyecto from './ItemProyecto.vue';

const tecnologias = ['Python', 'Javascript', 'ReactJS', 'VueJS']

const tecnologiasSeleccionadas = ref([])

const onClickTecnologia = (event) => {
  // Agregar o quitar tecnologias del array
  if(!tecnologiasSeleccionadas.value.includes(event)){ 
    tecnologiasSeleccionadas.value.push(event)
  } else {
    tecnologiasSeleccionadas.value.splice(tecnologiasSeleccionadas.value.indexOf(event), 1)
  }
  // Modificar proyectos dependendiendo de las tecnologias seleccionadas
  if (tecnologiasSeleccionadas.value.length === 0){
    proyectos.value = proyectos.value.map(proyecto => {
      return {...proyecto, oculto: false}
    })
  }
  else {
    proyectos.value = proyectos.value.map((proyecto) => {
      if (proyecto.tecnologias.some((tecnologia) => tecnologiasSeleccionadas.value.includes(tecnologia))) {
        return {...proyecto, oculto: false}
      }
      return {...proyecto, oculto: true}
    }) 
  }
}

const ambitos = {
  laboral: 'Trabajo',
  personal: 'Personal',
}
const proyectos = ref([
  {id: 1, nombre: 'SOCD', descripcion: 'Sistema de Organización y Control de Datos', ambito: ambitos.laboral, oculto: false, tecnologias: ['Javascript', 'VueJS']},
  {id: 2, nombre: 'Apps de Notas', descripcion: 'App de notas que hice hace 3 años usando ReactJS', ambito: ambitos.personal, oculto: false, tecnologias: ['Javascript', 'ReactJS']},
  {id: 3, nombre: 'Cajero Automático', descripcion: 'App que hice con python, un verano aburrido y solo utilizando mi celular', ambito: ambitos.personal, oculto: false, tecnologias: ['Python']}
])
</script>

<style scoped>
#proyectos{
  display: grid;
  grid-template-columns: 20% 80%;
  grid-gap: 1rem;
  padding: 1rem;
  justify-items: center;
  align-items: center;
  text-align: center;
}

#listaTecnologias{
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  justify-items: center;
  align-items: center;
  text-align: center;
}

#listaTecnologias button{
  width: 100%;
  height: 2rem;
  border-radius: 0.5rem;
  border: none;
  color: var(--text-color);
  background-color: var(--topbar-bg-color);
  cursor: pointer;
}

#listaTecnologias button.tecnologia-seleccionada{
  text-decoration: line-through;
}

#listaProyectos{
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 1rem;
  padding: 1rem;
  justify-items: center;
  align-items: center;
  text-align: center;
}
</style>
