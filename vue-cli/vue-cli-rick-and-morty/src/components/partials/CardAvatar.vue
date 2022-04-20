<template>
  <div class="col-3 text-center my-5">
    <!--inserire contenuto componente-->
      <img :src="image" alt="" class="rounded-circle">
      <h3 class="my-3">{{name}}</h3>
      <div class="divider my-3"></div>
      <h4 class="my-3">{{origin}}</h4>
      <span class="fw-bolder my-3">{{species}}</span>
  </div>
</template>

<script>
export default {
  //Cambiare il nome con quello del componente creato
  name: 'CardAvatar',
  props: {
    image: String,
    name: String,
    species: String,
    origin: String,
  }
}
</script>

<style scoped lang="scss">
 /*Inserire style componente*/
 .divider{
   width: 30%;
   height: 1px;
   background-color: #1a1a1a;
   margin: 0 auto;
 }
</style>
