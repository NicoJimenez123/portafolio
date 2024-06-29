<template>
  <div id="ViewPaginaPrincipal">
    <section id="titulo">
      <h3>Página Principal del Portafolio</h3>
    </section>
    <section id="presentacion">Sobre mí</section>
    <section id="proyectos">
      <ListadoProyectos />
    </section>
	</div>
</template>

<script setup>
import ListadoProyectos from '../components/ListadoProyectos.vue';

</script>

<style>
#ViewPaginaPrincipal {
  display: block;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 5rem;
}

#ViewPaginaPrincipal ul {
  list-style: none;
}
</style>
