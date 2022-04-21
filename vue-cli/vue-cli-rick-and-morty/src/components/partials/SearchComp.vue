<template>
  <div>
    <!--inserire contenuto componente-->
    <form action="" class="d-flex">
      <input
        type="text"
        class="form-control me-5"
        v-model="searchText">
      <button
        type="submit"
        class="btn btn-primary"
        @click.prevent="$emit( 'funzioneRicerca', searchText )"
      >Ricerca</button>
    </form>
  </div>
</template>

<script>
export default {
  //Cambiare il nome con quello del componente creato
  name: 'SearchComp',
  data(){
    return{
      searchText: ''
    }
  }
}
</script>

<style scoped lang="scss">
 /*Inserire style componente*/
</style>
