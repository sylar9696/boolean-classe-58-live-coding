<template>
  <div id="app">


    <HelloWorld :msg="`ciao dal props`"/>


    <header>
      <LogoComp />
      <NavComp />
    </header>

    <i class="fa-brands fa-facebook"></i>

    <main>
      <ProductsSection/>
      <!-- Card -->
      <!-- <div class="products"> -->
        <!-- Componente con props array -->
        <!-- <ProductComp
          v-for="(element, index) in products"
          :key="index"
          :details="element"
        /> -->

        <!-- Componente con props oggetto -->
        <!-- <ProductComp
          v-for="(element, index) in products"
          :key="index"
          :src="element.src"
          :titolo="element.titolo"
        /> -->


        <!-- <ProductComp/>
        <ProductComp/>
        <ProductComp/>
        <ProductComp/> -->
        <!-- <div class="product">
          <div class="box">
            <img src="https://www.lamolisana.it/wp-content/uploads/2021/04/1-spaghetto-quadrato.jpg" alt="">
            <h3>N.4 Spaghetto Quadrato Bucato</h3>
          </div>
        </div> -->
        <!-- <div class="product">
          <div class="box">
            <img src="https://www.lamolisana.it/wp-content/uploads/2021/04/1-spaghetto-quadrato.jpg" alt="">
            <h3>N.4 Spaghetto Quadrato Bucato</h3>
          </div>
        </div>
        <div class="product">
          <div class="box">
            <img src="https://www.lamolisana.it/wp-content/uploads/2021/04/1-spaghetto-quadrato.jpg" alt="">
            <h3>N.4 Spaghetto Quadrato Bucato</h3>
          </div>
        </div>
        <div class="product">
          <div class="box">
            <img src="https://www.lamolisana.it/wp-content/uploads/2021/04/1-spaghetto-quadrato.jpg" alt="">
            <h3>N.4 Spaghetto Quadrato Bucato</h3>
          </div>
        </div>
        <div class="product">
          <div class="box">
            <img src="https://www.lamolisana.it/wp-content/uploads/2021/04/1-spaghetto-quadrato.jpg" alt="">
            <h3>N.4 Spaghetto Quadrato Bucato</h3>
          </div>
        </div> -->
      <!-- </div> -->

    </main>

    <FooterComp />


  </div>
</template>

<script>
  //import HelloWorld from './components/HelloWorld.vue'
  import LogoComp from './components/LogoComp.vue'
  import NavComp from './components/NavComp.vue'
  import FooterComp from './components/FooterComp.vue'
  // import ProductComp from './components/ProductComp.vue'
  import ProductsSection from './components/ProductsSection.vue'

  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      LogoComp,
      NavComp,
      FooterComp,
      // ProductComp,
      ProductsSection
    },
    data(){
      return{
        // products: [
        //       {
        //         src: "https://www.lamolisana.it/wp-content/uploads/2021/04/1-spaghetto-quadrato.jpg",
        //         titolo: "N.4 Spaghetto Quadrato Bucato",
        //         tipo: "lunga",
        //         cottura: 6,
        //       },
        //       {
        //         src: "https://www.lamolisana.it/wp-content/uploads/2021/04/5-fettuccine.jpg",
        //         titolo: "N.5 Fettuccine",
        //         tipo: "lunga",
        //         cottura: 13,
        //       },
        //       {
        //         src: "https://www.lamolisana.it/wp-content/uploads/2021/04/6-linguine.jpg",
        //         titolo: "N.6 Linguine",
        //         tipo: "lunga",
        //         cottura: 12,
        //       },
        //       {
        //         src: "https://www.lamolisana.it/wp-content/uploads/2021/04/7-mezze-linguine.jpg",
        //         titolo: "N.7 Mezze Linguine",
        //         tipo: "lunga",
        //         cottura: 11,
        //       },
        //       {
        //         src: "https://www.lamolisana.it/wp-content/uploads/2021/04/11-spaghettino-quadrato.jpg",
        //         titolo: "n.11 Spaghettino Quadrato",
        //         tipo: "lunga",
        //         cottura: 9,
        //       },
        //       {
        //         src: "https://www.lamolisana.it/wp-content/uploads/2021/05/38-mezze-maniche.jpg",
        //         titolo: "N.38 Mezze maniche",
        //         tipo: "corta",
        //         cottura: 12,
        //       },
        //       {
        //         src: "https://www.lamolisana.it/wp-content/uploads/2021/05/44-sedani.jpg",
        //         titolo: "N.44 Sedani",
        //         tipo: "corta",
        //         cottura: 8,
        //       },
        //       {
        //         src: "https://www.lamolisana.it/wp-content/uploads/2021/05/49-sedani.jpg",
        //         titolo: "N.49 Sedanini",
        //         tipo: "corta",
        //         cottura: 8,
        //       },
        //       {
        //         src: "https://www.lamolisana.it/wp-content/uploads/2021/05/53-lumachine.jpg",
        //         titolo: "N.53 Lumachine",
        //         tipo: "corta",
        //         cottura: 12,
        //       },
        //       {
        //         src: "https://www.lamolisana.it/wp-content/uploads/2021/05/55-chifferi-rigati.jpg",
        //         titolo: "N.55 Chifferi rigati",
        //         tipo: "corta",
        //         cottura: 12,
        //       },
        //       {
        //         src: "https://www.lamolisana.it/wp-content/uploads/2021/05/58-misto-corto.jpg",
        //         titolo: "N.58 Misto corto",
        //         tipo: "corta",
        //         cottura: 9,
        //       },
        //       {
        //         src: "https://www.lamolisana.it/wp-content/uploads/2021/06/84-ditale-quadrato.jpg",
        //         titolo: "N.84 Ditale Quadrato",
        //         tipo: "cortissima",
        //         cottura: 12,
        //       },
        //     ],
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  main {
    background: url('./assets/img/fondo-pag-speciali.jpg');
    padding: 30px 0;
  }

  .products{
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
</style>
