<template>
<div class="card-stack">
  <Card 
  v-for="card in cards"
  :key="card"
  :name="card.holder"
  :number="card.number"
  :month="card.validMonth"
  :year="card.validYear"
  :vendor="card.vendor"
  v-on:click.native="cardActive(card)"/>    
</div>

</template>

<script>

import Card from '@/components/Card.vue'

export default {
  name: 'CardStack',
  data(){  
    return {
    cards: this.$root.cards
    }
  },

  components: { 
      Card
  }, 
  methods: {
    cardActive(card){    
      for (let index = 0; index < this.$root.cards.length; index++) {
        const element = this.$root.cards[index];
        if (element.holder === card.holder){
          this.$root.cards[index].active = true
        } else {
          this.$root.cards[index].active = false
        }   
        this.$emit("selectedCardToParent", card)     
      }
    }
  }
}
</script>

<style>

.card-stack {
  display: grid;
  grid-auto-rows: 3.5rem;
  margin-top: 2rem;
  margin-bottom: 5rem;
}

</style>