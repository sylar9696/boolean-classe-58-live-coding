<template>
  <div id="app">
    <header>
      <LogoComp/>
      <NavComp/>
    </header>

    <i class="fa-brands fa-facebook"></i>

    <main>
      <h2>Il contenuto va Qui!</h2>
    </main>

    <FooterComp/>


  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import LogoComp from './components/LogoComp.vue'
import NavComp from './components/NavComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    LogoComp,
    NavComp,
    FooterComp,
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

main{
  background: url('./assets/img/fondo-pag-speciali.jpg');
  padding: 30px 0;
}
</style>
