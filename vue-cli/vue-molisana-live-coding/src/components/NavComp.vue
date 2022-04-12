<template>
  <div>
    <ul>
      <li>Home</li>
      <li class="active">Prodotti</li>
      <li>Chi siamo</li>
      <li>Contatti</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavComp',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import '../style/variabili.scss';
@import '../style/mixin.scss';

  ul{
    @include listaVerticale( center, row );
    justify-content: center;

    li{
      margin: 0 20px;
      padding: 10px;
    }

    .active{
      background: $light-blue;
    }

  }
</style>
