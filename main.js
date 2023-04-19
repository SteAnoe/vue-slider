const { createApp } = Vue

createApp({
  data() {
    return {
        currentImg: 0,
        autoscroll: null,
        array: [
            {
                
                image: 'https://picsum.photos/id/235/800/400',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, {
                
                image: 'https://picsum.photos/id/236/800/400',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, {
                
                image: 'https://picsum.photos/id/237/800/400',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, {
                
                image: 'https://picsum.photos/id/238/800/400',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, {
                
                image: 'https://picsum.photos/id/239/800/400',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
        ]
    }
  },
  created(){
    this.autoScroll()
  },
  methods: {
    prev(){
        this.currentImg--
        if (this.currentImg < 0){
            this.currentImg = this.movie.immagini.length -1
        }
    },
    next(){
        this.currentImg++
        if (this.currentImg > this.movie.immagini.length -1){
            this.currentImg = 0
        }
    },
    changeImg(i){
        this.currentImg = i
    },
    autoScroll(){
        this.autoscroll = setInterval( () => {
            this.next()
        }, 3000)
    },
    stopScroll(){
        clearInterval(this.autoscroll)
        this.autoscroll = null
    }
  }
}).mount('#app')


