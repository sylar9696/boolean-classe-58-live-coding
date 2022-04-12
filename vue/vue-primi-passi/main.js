var app = new Vue(
  {
    el: '#root',
    data: {
      content: 'Hello World',
      classi: [ 'color-red', 'color-blue' ],
      numero: 1,
      nome: '',
      cognome: '',
      classeColore: 'aqua'
    },
    methods: {
      saluta: function() {

        // this.content = "ciao"
        let prova = this.content
        console.log( this )
        if( this.content == 'Hello World' ){
          this.content = 'ciao due'
        }

        return prova
        // return this.content = 'ciao'
      },
      valoreInput: function(){
        console.log( this.nome )
      },
      cambiaColore: function(){
        // this.classeColore = 'rossoFragola'

        if( this.classeColore == 'aqua' ){
          this.classeColore = 'rossoFragola'
        } else {
          this.classeColore = 'aqua'
        }
      }
    }
  }
);
