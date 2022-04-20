## Live coding rick and morty

# 1° creare il progetto con Vue cli
Dopo aver creata la repository vuota su github, la cloniamo sul pc e apriamo la cartella con vs code.
Utilizzando il terminale nella cartella del progetto il comando di Node:

```
vue create .
```

# 2° Importare bootstrap 5 (opzionale)
Per importarlo dobbiamo lanciare da terminale dentro la cartella del progetto due comandi:

```
npm install --save bootstrap
npm install --save @popperjs/core
```

Dopo aver installato le 2 dipendenze di bootstrap 5 dobbiamo importare i file CSS e JS di riferimento dentro app.vue

Dentro la sezione "script" scriviamo:
```
import "bootstrap"
```

Dentro la sezione "style" scriviamo:
```
@import "bootstrap/dist/css/bootstrap.min.css";
```

Da qui in poi possiamo usare le classi di bootstrap 5

# 3° creiamo un componente
Prima cosa creare un file all'interno della cartella "components", il nome del file deve essere con la prima lettera maiuscola e di due parole in camelcase, esempio: HeaderComp.vue

la struttura del componente deve essere all'inizio la seguente:

```javascript
<template>
  <header>
    <!--inserire contenuto componente-->
    ciao
  </header>
</template>

<script>
export default {
  //Cambiare il nome con quello del componente creato
  name: 'HeaderComp',
}
</script>

<style scoped lang="scss">
 /*Inserire style componente*/
</style>
```

Secondo passaggio andare in App.vue e importare il componente nello "script" in questo modo:

``` javascript
<script>
import "bootstrap"

//importiamo i componenti
import HeaderComp from './components/HeaderComp.vue'

export default {
  name: 'App',
  components: {
    //Inseriamo il nome del componente
    HeaderComp
  }
}
</script>
```

Utiliziamo il componente dentro il template di App.vue in questo modo:

``` javascript
<template>
  <div>
    <HeaderComp/>
  </div>
</template>
```

# 4° utilizzare axios nel progetto

Per utilizzarlo dobbiamo importare axios tramite npm da terminale con questo comando:
``` javascript
npm i axios
```

Dopo l'installazione bisogna importarlo nel componente di utilizzo nella sezione "script" in questo modo:
``` javascript
<script>
//Importiamo axios
import axios from 'axios';

export default {
  //Cambiare il nome con quello del componente creato
  name: 'AvatarsComp',
  data(){
    return{
      //Creare un array dove salvare i data della chiamata axios
      //Modificare il nome a piacere
      avatarsArray: []
    }
  },
  created(){
    //Qui utiliziamo axios
    //Modificare il link con l'api che si vuole usare
    axios.get( 'https://api.sampleapis.com/rickandmorty/characters' )
         .then( ( res )=>{
           //Controllo delle informazioni che otteniamo alla chiamata
           console.log( res.data );
           //Modifica dell'array dove salveremo i dati
           this.avatarsArray = res.data
         } )
         //Salvataggio in console di possibili errori
         .catch( (error) => {
           console.log( error )
         } )
  }
}
</script>
```

# 5° come usare i props tra componente padre e figlio

I props ci servono quando vogliamo passar ele informazioni tra due componenti, e il componente padre è colui che ha i dati da passare al componente figlio.


Componente Padre:
``` javascript
<template>
  <div class="row">
    <!--Questo è il componente figlio a cui passare i dati-->
    <CardAvatar
      v-for="( element, index ) in avatarsArray"
      :key="index"
      //Qui sotto abbiamo i props dei dati che vogliamo passare al figlio "CardAvatar"
      //Questi dati sono ottenuti tramite axios e salavti in un array nei "Data"
      //Sono alcune informazioni del JSON dell'API
      :image="element.image"
      :name="element.name"
      :species="element.species"
      :origin="element.origin"
    />

  </div>
</template>

<script>

import axios from 'axios';

import CardAvatar from './partials/CardAvatar.vue'

export default {
  //Cambiare il nome con quello del componente creato
  name: 'AvatarsComp',
  components: {
    CardAvatar
  },
  data(){
    return{
      avatarsArray: []
    }
  },
  created(){
    //Qui utiliziamo axios
    axios.get( 'https://api.sampleapis.com/rickandmorty/characters' )
         .then( ( res )=>{
           console.log( res.data );
           this.avatarsArray = res.data
         } )
         .catch( (error) => {
           console.log( error )
         } )
  }
}
</script>
```

Il componente figlio:
``` javascript
<template>
  <div class="col-3 text-center my-5">
    <!--inserire contenuto componente-->
    <!--Il contenuto del componente richiama le informazioni dei props-->
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
  //Sezione dove riportare i props e la loro tipologia
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

```
