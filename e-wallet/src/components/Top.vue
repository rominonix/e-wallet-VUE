<template>
  <div class="container">
    <h1 :class="headingSize">{{ title }}</h1>
    <p :class="subTitle">{{ msg }}</p>    
  </div> 
</template>

<script>
export default {
  name: 'Top',
  data(){ return {
    headingSize: "large",
    subTitle: "medium"
  }

  },

  props: {
    title: String,
    msg: String
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap');

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}

.large {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
}

.medium {
  font-family: 'PT Mono', monospace;
  text-transform: uppercase;
  color: grey;
}

.first-card {
  width: 335px;
  height: 216px;
  padding: 1rem;
  background-color: #fdaf48;
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
  font-size: 1.8rem;
  color: black;
  margin: 0 0 2.2rem 0;
}

.cardholder-valid{
  font-size: 0.7rem;
  margin: 0%;
  text-align: justify;
  color: black;
  text-shadow: -1px -1px 2.5px #fff, 1px 1px 2.5px #000;
}

.card-name-date {
  margin: 0;
  text-align: justify;
  color: black;
}

</style>
