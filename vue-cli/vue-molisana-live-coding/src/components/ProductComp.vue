<template>
    <div class="product">
      <div class="box">
        <!-- <img :src="details.src" alt="">
        <h3>{{ details.titolo }}</h3> -->
        <img :src="src" alt="">
        <h3>{{ titolo }}</h3>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ProductComp',
    // props: ['details']
    props: {
      src: String,
      titolo: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .product {
    display: flex;
    flex-basis: calc((100% / 4) - 8px);
    border: 1px solid #daedf3;

    .box {
      background-color: #fff;

      img {
        width: 100%;
      }
    }
  }
</style>
