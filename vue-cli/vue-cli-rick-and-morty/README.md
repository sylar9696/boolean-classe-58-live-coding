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
    ciao
  </header>
</template>

<script>
export default {
  name: 'HeaderComp',

}
</script>

<style scoped lang="scss">

</style>
```
