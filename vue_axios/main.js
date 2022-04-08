var app = new Vue({
  el: '#root',
  data: {
    numeroRandom: null,
    nomePokemon: null,
  },
  created() {

    // const self = this;

    // console.log(this)

    // axios.get('https://flynn.boolean.careers/exercises/api/random/int')
    //   .then((res) => {
    //     console.log(res); //ottenuto oggetto intyero della risposta
    //     console.log(res.data) //ottengo oggetto con i dati che voglio
    //     console.log(res.data.response) //ottengo valore dell'oggetto coi dati
    //     //  console.log(this);
    //     // codice dopo aver ottenuto risposta
    //     // console.log(response.data.response);
    //     this.numeroRandom = response.data.response;
    //   });

    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((res) => {
        console.log(res); //ottenuto oggetto intyero della risposta
        //console.log(res.data) //ottengo oggetto con i dati che voglio
        //console.log(res.data.response) //ottengo valore dell'oggetto coi dati
        //  console.log(this);
        // codice dopo aver ottenuto risposta
        // console.log(response.data.response);
        this.nomePokemon = res.data.name;

      });
  },
  mounted() {

  },
  methods: {
    // activeApi: () => {
    //   axios.get('https://flynn.boolean.careers/exercises/api/random/int')
    //      .then( (res) => {
    //        console.log(res); //ottenuto oggetto intyero della risposta
    //        console.log(res.data) //ottengo oggetto con i dati che voglio
    //        console.log(res.data.response) //ottengo valore dell'oggetto coi dati
    //       //  console.log(this);
    //       //codice dopo aver ottenuto risposta
    //       // console.log(response.data.response);
    //       // this.numeroRandom = response.data.response;
    //      });
    // }
  }
})
