<template>
  <div class="container">
    <div class="row">
      <div
      class="col-10 col-sm-12 col-lg-4 my-3 text-left px-4 py-3 contCard mx-auto mx-lg-0"
      v-for="pelicula in listaPeliculas"
      v-bind:key="pelicula.episode_id"
      >
      <div class="row border rounded p-3 colorCard">
        <div class="col-12">
          <img v-if="pelicula.episode_id == 1" src="../assets/img/1.png" class="imgLogoEpisodio">
          <img v-if="pelicula.episode_id == 2" src="../assets/img/2.png" class="imgLogoEpisodio">
          <img v-if="pelicula.episode_id == 3" src="../assets/img/3.png" class="imgLogoEpisodio">
          <img v-if="pelicula.episode_id == 4" src="../assets/img/4.png" class="imgLogoEpisodio">
          <img v-if="pelicula.episode_id == 5" src="../assets/img/5.png" class="imgLogoEpisodio">
          <img v-if="pelicula.episode_id == 6" src="../assets/img/6.png" class="imgLogoEpisodio">
          <img v-if="pelicula.episode_id == 7" src="../assets/img/7.png" class="imgLogoEpisodio">
        </div>
        <h4 class="col-12 text-warning" style="cursor:pointer;" @click="abreModal(pelicula.opening_crawl)">{{pelicula.title}}</h4>
        <div class="col-12">Episodio: {{pelicula.episode_id}}</div>
        <div class="col-12">Director: {{pelicula.director}}</div>
        <!-- <div class="col-12">Director: {{pelicula.characters}}</div> -->
        <!-- <div class="col-12">Episodio: {{pelicula.opening_crawl}}</div> -->
        <div class="col-12 text-right my-1">
          <button @click="personajes" class="btn btn-outline-warning">Personajes</button>          
        </div>
      </div>
    </div>
    <div>
      <b-modal id="my-modal" hide-footer hide-header>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="text-warning text-center">
                STAR WARS
              </h1>              
            </div>
            <div class="col-12 text-white text-justify">
              {{apertura}}              
            </div>
          </div>          
        </div>
      </b-modal>
    </div>
  </div>
</div>
</template>
<script>
import axios from "axios";
export default {
  name: "TablaPeliculas",
  data() {
    return {
      listaPeliculas: [],
      apertura: ""
    };
  },
  created() {
    this.peliculas();
  },
  methods: {
    peliculas() {
      var self = this;
      axios
      .get(direccion + "films")
      .then(function(response) {
        self.listaPeliculas = response.data.results;
        console.log(response.data.results);
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    abreModal(apertura){

      this.apertura = apertura;
      this.$bvModal.show("my-modal")

    },
    personajes(){
      router.push({ path: "personajes/" });
    }
  }
};
</script>
<style scoped>
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
