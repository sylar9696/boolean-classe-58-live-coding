<template>
  <div class="text-center">
    <!--inserire contenuto componente-->
    <h2>Ci sono {{ lunghezza }} avatars</h2>
  </div>
</template>

<script>
export default {
  //Cambiare il nome con quello del componente creato
  name: 'LunghezzaApi',
  props: ['lunghezza']
}
</script>

<style scoped lang="scss">
 /*Inserire style componente*/
</style>
