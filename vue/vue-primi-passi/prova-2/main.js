var app = new Vue(
  {
    el: '#root',
    data: {
      myClass: ['nomeCLasseCss'],
      variabileVmodel: 'testo v-model',
      nomeVariabileData: false,
      todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
      ]
    },
    methods: {
      nomeFunzione: function(){
        console.log('test')
        //ottenere un dato di data
        console.log( this['myClass'] );
      },
      myFunction2: () => {
        console.log("testo nell'arrow function");
      },
      showHide: function() {
        if( this.nomeVariabileData === false ){
          this.nomeVariabileData = true
        } else {
          this.nomeVariabileData = false
        }
      }
    }
  }
)


/*

Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data(vue attributo href).
 */
