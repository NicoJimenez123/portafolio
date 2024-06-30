<template>
    <nav class="topbar">
			<ul>
				<li>
					<router-link to="/" id="linkHome">
						Home
						<img :src='gatini' alt="icono de gato"/>
					</router-link>
				</li>
				<li>
					<a href="#">Portafolio</a>
				</li>
				<li>
					<button id="toggle-theme">Cambiar Tema</button>
				</li>
			</ul>
    </nav>
</template>

<script setup>
import gatini from '../assets/gatini.svg'
</script>

<style>
#linkHome {
	display: flex;
	justify-content: center;
	align-items: center;
}
.topbar img {
	width: 2rem;
}
</style>