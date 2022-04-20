<template>
  <div class="row">
    <!--inserire contenuto componente-->
    <CardAvatar
      v-for="( element, index ) in avatarsArray"
      :key="index"
      :image="element.image"
      :name="element.name"
      :species="element.species"
      :origin="element.origin"
    />

  </div>
</template>

<script>

import axios from 'axios';

import CardAvatar from './partials/CardAvatar.vue'

export default {
  //Cambiare il nome con quello del componente creato
  name: 'AvatarsComp',
  components: {
    CardAvatar
  },
  data(){
    return{
      avatarsArray: []
    }
  },
  created(){
    //Qui utiliziamo axios
    axios.get( 'https://api.sampleapis.com/rickandmorty/characters' )
         .then( ( res )=>{
           console.log( res.data );
           this.avatarsArray = res.data
         } )
         .catch( (error) => {
           console.log( error )
         } )
  }
}
</script>

<style scoped lang="scss">
 /*Inserire style componente*/
</style>
