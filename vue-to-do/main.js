/*
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo barrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

var app = new Vue(
  {
    el: '#root',
    data: {
      newTodo: '',
      todos: [
        {
          text: 'testo della todo 1',
          done: false
        },
        {
          text: 'testo della todo 2',
          done: false
        },
        {
          text: 'testo della todo 3',
          done: false
        },
      ]

    },
    methods: {
      removeTodo: function( todoIndex ){
        //usiamo lo splice
        //elemento in base alla posizione dell'indice, quanti elementi togliere da quella posizione
        this.todos.splice( todoIndex,1 );
      },
      addTodo: function(){
        //Creazione dell'oggetto che verrà pushato
        let objTodo = {
          text: this.newTodo,
          done: false,
        }

        if( !this.newTodo == '' ){
          this.todos.push(objTodo);

          //Svuotare l'input dopo aver pushato la nuova todo
          this.newTodo = ''
        }
      },
      done: function(element){
        // element.done = true
        if( element.done == true ){
          element.done = false
        } else {
          element.done = true
        }
      }
    }
  }
)
