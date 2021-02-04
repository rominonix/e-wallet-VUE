<template>

    <div class="container">
        <div class="card" :style="cssProps">
            <img src="../assets/chip-light.svg" alt="chip">
            <img class="vendor-img" :src="vendorImg" alt=""> 
            <p class="card-number">{{ number }}</p>
            <p class="cardholder-valid">cardholder name</p>
            <p class="cardholder-valid">valid until</p>
            <p class="card-name-date">{{ name }}</p>
            <p class="card-name-date">{{ month }}/{{ year }}</p>
        </div>
         
    </div>
</template>

<script>
export default {
  name: 'Card', 

  props: {
    name: String,
    number: String,
    month: String,
    year: String,
    vendor: String,
  },

  computed:{
    cssProps(){
        if(this.vendor === "ninja"){
          return {
          '--background-color':"#333333",
          '--color':"#fff",
          }
        } 
        
        else if(this.vendor === "bitcoin"){
          return {
          '--background-color':"#fdaf48",
          '--color':"#000" 
          }
        } 
        
        else if(this.vendor === "evil"){
          return {
          '--background-color':"#f33355",
          '--color':"#fff" 
          }
        } 
        
        else if(this.vendor === "blockchain"){
          return {
          '--background-color':"#8b58f9",
          '--color':"#fff" 
          }
        } 
        
        else {
        return {
          '--background-color':"#d0d0d0", 
          }
        } 
      },

      vendorImg(){
        if(this.vendor === "ninja"){
          return require("@/assets/vendor-ninja.svg")
        } 
        
        else if(this.vendor === "evil"){
          return require("@/assets/vendor-evil.svg")
        } 
        
        else if(this.vendor === "bitcoin"){
          return require("@/assets/vendor-bitcoin.svg")
        } 
        
        else if(this.vendor === "blockchain"){
          return require("@/assets/vendor-blockchain.svg")
        } 
        
        else{
          return ""
          }
        }
  },
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}

h1 {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
}

p {
  font-family: 'PT Mono', monospace;
  text-transform: uppercase;
  color:var(--color);
}

.card {
  margin-bottom: 2rem;
  width: 335px;
  height: 216px;
  padding: 1rem;
  background-color: var(--background-color);
  color:var(--color);
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgb(0 0 0 / 45%);
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 6fr 3fr 1fr 1fr;
}

.vendor-img {
  padding-top: 0.5rem;
  padding-left: 3rem;
}

.card-number {
  grid-column: 1/3;
  font-size: 1.7rem;
  letter-spacing: .05rem;
  padding: .5rem 0 0;
  margin: 0 0 2rem 0;
}

.cardholder-valid {
  font-size: 0.7rem;
  margin: 0%;
  text-align: justify;
  color:var(--color);
  text-shadow: -1px -1px 2.5px #fff, 1px 1px 2.5px #000;
}

.card-name-date {
  margin: 0;
  text-align: justify;
  color:var(--color);
}

</style>