<template>
  <div>
    <h3>Prodotti</h3>
    <ul>
      <li v-for="(element, index) in menuProdotti" :key='index'>
        <a :href="`${element.url}`">{{element.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProdottiMenuComp',
  data() {
    return {
      menuProdotti: [
        {
          name: 'Le Classiche',
          url: '/le-classiche'
        },
        {
          name: 'Le Integrali',
          url: '/le-integrali'
        },
        {
          name: 'Le Speciali',
          url: '/le-speciali'
        },
        {
          name: 'Le Biologiche',
          url: '/le-biologiche'
        },
        {
          name: 'Le Gluten Free',
          url: '/le-gluten-free'
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
