<template>

<div>
  <div class="row" v-if="!loadingStatus">

    <!-- Spazio ricerca -->
    <SearchComp @funzioneRicerca="metodoSearch"/>

    <!--inserire contenuto componente-->
    <CardAvatar
      v-for="( element, index ) in filtraggio()"
      :key="index"
      :image="element.image"
      :name="element.name"
      :species="element.species"
      :origin="element.origin"
    />
    <!-- componente lunghezza elementi api -->
    <LunghezzaApi :lunghezza="filtraggio().length"/>

  </div>

  <!-- Loader -->
  <div v-else>
    <LoaderComp/>
  </div>

</div>


</template>

<script>

import axios from 'axios';

import CardAvatar from './partials/CardAvatar.vue'
import LoaderComp from './partials/LoaderComp.vue'
import LunghezzaApi from './partials/LunghezzaApi.vue'
import SearchComp from './partials/SearchComp.vue'


export default {
  //Cambiare il nome con quello del componente creato
  name: 'AvatarsComp',
  components: {
    CardAvatar,
    LoaderComp,
    LunghezzaApi,
    SearchComp
  },
  data(){
    return{
      avatarsArray: [],
      loadingStatus: true,
      testoRicerca: ''
      // numeroAvatars: null
    }
  },
  created(){
    //Qui utiliziamo axios
    axios.get( 'https://api.sampleapis.com/rickandmorty/characters' )
         .then( ( res )=>{
           console.log( res.data );
           this.avatarsArray = res.data
           this.loadingStatus = false
          //  this.numeroAvatars = this.avatarsArray.length
         } )
         .catch( (error) => {
           console.log( error )
         } )
  },
  methods: {
    metodoSearch( testo ){
      console.log(testo)
      this.testoRicerca = testo
      console.log(this.testoRicerca)
    },

    filtraggio(){
      if( this.testoRicerca === '' ){
        return this.avatarsArray
      } else{
        return this.avatarsArray.filter( (elem) => {
          return elem.name.toLowerCase().includes(this.testoRicerca.toLowerCase())
        } )
      }
    }
  }
}
</script>

<style scoped lang="scss">
 /*Inserire style componente*/
</style>
