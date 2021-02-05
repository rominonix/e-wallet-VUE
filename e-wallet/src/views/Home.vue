<template>
  <div class="home">
    <Top 
    title="e-wallet"
    msg="active card"
    />
    <Card 
    :name="newCard.holder" 
    :number="newCard.number" 
    :month="newCard.validMonth" 
    :year="newCard.validYear"
    :vendor="newCard.vendor"
    /> 
    <CardStack v-on:selectedCardToParent="selectedCardClick" />
    <button @click="eventNewCard">ADD NEW CARD</button>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardStack from '@/components/CardStack.vue'

export default {
  data(){ 
    let myCard = {}
      for (const index in this.$root.cards) {
        let card = this.$root.cards[index]
        if (card.active === true){
          myCard = card
        }
      }
        return {
        cards: this.$root.cards,
        newCard: myCard,
    }
  },
  
  components: {
    Top,
    Card, 
    CardStack
  },
  
  methods:{
    eventNewCard(){
      this.$router.push("/add-card")
      },

    selectedCardClick(thecard){
      this.newCard = thecard
      }
    }
  }

</script>

<style>

button {
    position: relative;
    top: 8rem;
    width: 300px;
    height: 60px;
    border: 2px solid black;
    border-radius: .5rem;
    font-family: 'PT Mono', monospace;
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 2rem;
    background-color: white;
    cursor: pointer;
}

button:hover {
    background-color: black;
    color: white;
}

</style>
