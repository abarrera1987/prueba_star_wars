<template>
	<div id="listaPersonajes">
		<Header titulo="Personajes" pagina="personajes"></Header>
		<div class="container">
			<div class="row">
				<div class="col-10 col-sm-12 col-lg-4 my-3 text-left px-4 py-3 contCard mx-auto mx-lg-0" v-for="personaje in personajes">
					<div class="row border rounded p-3 colorCard">
						<h4 class="col-12 text-warning">{{personaje.name}}</h4>
						<div class="col-12">Color de Ojos: {{personaje.eye_color}}</div>
						<div class="col-12">Genero: {{personaje.gender}}</div>
						
					</div>
				</div>
				<div class="col-12">
					<b-pagination v-if="filas_total > 9" id="paginador" @change="listaPersonajes" align="center" size="md" :total-rows="filas_total" :current-page="pagina" :per-page="10" >

					</b-pagination>
					
				</div>
				
			</div>
		</div>
	</div>
	
	
</template>
<script>
import Header from '@/components/Header.vue';
import axios from "axios";
export default {

	name: "Personajes",
	created() {
		
		document.title= "Personajes";
		this.listaPersonajes();
		
	},
	data(){
		
		return{
			personajes: [],
			filas_total: 0,
			pagina: 1,
			pelicula: ""
		}
		
	},
	methods: {
		
		listaPersonajes(pagina){

			if(pagina === undefined){

				pagina = this.pagina;

			}

			var self = this;

			axios.get(direccion + "people/?page="+pagina).then(function(response) {
				self.personajes = response.data.results;
				self.filas_total = response.data.count;
				
			})
			.catch(function(error) {
				console.log(error);
			});

		},
		filmPersonaje(film){
			axios.get(film).then(function(response) {
				
				return response.data.title;
			})
			.catch(function(error) {
				console.log(error);
			});
		}
		
	},
	components: {
		Header
	},
};
</script>

<style >
.page-link, .page-item.disabled .page-link {

	color: #FFF !important;
	border-color: #000 !important;
	background-color: #000 !important;

}
.page-item.active .page-link {
	color: #000 !important;
	background-color: yellow !important;
}
.contCard {
	max-height: 250px;
	overflow: hidden;
}
.colorCard {
	min-height: 250px;
	background-color: #20222e;
	color: #FFF;

}

.imgLogoEpisodio{

	width: 50px;
}
.modal-content{

	color: yellow;
	background-color: #000 !important;
}
</style>
