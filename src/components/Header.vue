<template>
	<div id="header">
		<b-navbar toggleable="lg" id="navBar">
			<b-navbar-brand href="#">
				<img alt="Vue logo" src="../assets/img/logo.png" id="logoHeader" />
			</b-navbar-brand>
			<b-navbar-nav>{{titulo}}</b-navbar-nav>

			<b-navbar-toggle target="nav-collapse" id="btn-menu"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto align-items-lg-center" right>
					<b-navbar-nav class="text-left py-1 p-lg-2">
						<a href="/">Peliculas</a>
					</b-navbar-nav>
					<b-navbar-nav class="text-left py-1 p-lg-2">
						<a href="/personajes">Personajes</a>
					</b-navbar-nav>
					<b-nav-form v-if="pagina == 'personajes'">
						<select class="form-control" v-model="tipo">
							<option value="name">Nombre</option>
							<option value="eye_color">Color ojos</option>
							<option value="gender">Género</option>
						</select>
						<input v-if="this.tipo != 'gender'" name="tipo" v-model="buscarXTipo" class="form-control px-1 mx-lg-1 my-2" />
						<select v-if="this.tipo == 'gender'" v-model="buscarXTipoSelect" class="form-control px-1 mx-lg-1 my-2">
							<option value="n/a">N/A</option>
							<option value="female">Hombre</option>
							<option value="male">Mujer</option>
						</select>
						<button @click="buscar" class="btn btn-outline-light my-1 my-lg-0">Buscar</button>
					</b-nav-form>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>


<script>

export default {
	name: "Header",
	props: {
		titulo: String,
		pagina: String
	},
	data() {
		return {
			buscador: 0,
			buscarXTipo: "",
			tipo: "name",
			buscarXTipoSelect: "n/a"
		};
	},
	methods:{

		buscar() {

		}
	}
};
</script>

<style scope>
a {
	color: #fff !important;
}
a:hover {
	color: yellow !important;
}
#logoHeader {
	max-width: 100%;
	height: 50px;
}
#navBar {
	background-color: black;
	color: white;
}
#btn-menu {
	background-color: white;
}
.form-inline {
	width: 100%;
}
</style>
