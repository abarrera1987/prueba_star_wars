<template>
	<div class="home">
		<Header titulo="Lista Peliculas" pagina="home"></Header>
		<TablaPeliculas></TablaPeliculas>
	</div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import TablaPeliculas from '@/components/TablaPeliculas'

export default {
	name: 'listaPeliculas',
	created() {

		document.title= "Lista peliculas";

	},
	components: {
		Header,
		TablaPeliculas
	}
}
</script>
