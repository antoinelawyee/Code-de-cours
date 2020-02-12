var coucou = new Vue ({
  el: '#coucou',
  data: {
    counter: 0
  }
})




var app = new Vue({
  el: '#app',
  data: {
    question: "Dans Game of Thrones, quelle la famille a pour emblème le loup ?",
    answers: [
      "Les Stark",
      "Les Lannister",
      "Les Targaryen",
      "Les Tyrell"
    ],
    visitorAnswer: "",
    page: "quizz",
    countdown: 10,
    countdownInterval: null
  },
  mounted() {
  	this.countdownInterval = setInterval(this.updateCountdown, 1000)
  },
  methods: {
    updateCountdown: function() {
    	this.countdown -= 1;
    	if(this.countdown == 0) {
          clearInterval(this.countdownInterval)
        }
    },
    ajouter: function(ingredient) {
      this.ingredients.push(ingredient)
    }
  },
  computed: {
    contientViande: function() {
      return this.ingredients.includes("viande")
    }
  }
})

