<template>
  <div>
    <HeaderComp msg="Sono il titolo del header"/>

    <div class="container">
      <AvatarsComp/>
    </div>

  </div>
</template>

<script>
import "bootstrap"

//componenti
import HeaderComp from './components/HeaderComp.vue'
import AvatarsComp from './components/AvatarsComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    AvatarsComp
  }
}
</script>

<style lang="scss">

@import "bootstrap/dist/css/bootstrap.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  font-family: "Montserrat", sans-serif;
  background-image: linear-gradient(to left, transparent 0px, transparent 20px, rgba(0, 0, 0, 0.02) 20px, rgba(0, 0, 0, 0.02) 40px), linear-gradient(to bottom, transparent 0px, transparent 20px, rgba(0, 0, 0, 0.02) 20px, rgba(0, 0, 0, 0.02) 40px);
  background-size: 40px, 100% 40px;
}
</style>
