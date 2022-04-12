<template>
  <div>
    <h3>Pastificio</h3>
    <ul>
      <li v-for="(element, index) in menuPastificio" :key='index'>
        <a :href="`${element.url}`">{{element.name}}</a>
      </li>
      <!-- <li>Il Pastificio</li>
      <li>Grano</li>
      <li>Filiera</li>
      <li>100 Anni di Pasta</li>
      <li>Sartoria della Pasta</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PastificioMenuComp',
  data() {
    return {
      menuPastificio: [
        {
          name: 'Il Pastificio',
          url: '/il-pastificio'
        },
        {
          name: 'Grano',
          url: '/Grano'
        },
        {
          name: 'Filiera',
          url: '/Filiera'
        },
        {
          name: '100 Anni di Pasta',
          url: '/100-anni-di-pasta'
        },
        {
          name: 'Sartoria della Pasta',
          url: '/sartoria-della-pasta'
        },

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import '../style/mixin.scss';

h3{
  text-align: left;
}

ul{
  @include listaVerticale(left, column);
  padding-inline-start: 0;
  margin-block-start: 0;

  li{
    margin: 10px 0;
  }
}

</style>
