<template>
<div class="container">
  <div class="card-form">
    <label for="number">Card Number</label>
    <input 
    type="text" 
    placeholder=" XXXX XXXX XXXX XXXX"
    maxlength="16"
    required 
    v-model="form.number" 
    @keyup="emitNumberToParent">

    <label for="holder">Cardholder name</label>
    <input 
      type="text" 
      v-model="form.holder"
      placeholder=" FIRSTNAME LASTNAME"
      maxlength="24"
      required
      @keyup="emitNameToParent">

    <label for="validMonth">Month</label>
    <select 
      v-model="form.validMonth" 
      name="month"
      @change="emitMonthToParent" 
      id="">
      <option value="01">01</option>
      <option value="02">02</option>
      <option value="03">03</option>
      <option value="04">04</option>
      <option value="05">05</option>
      <option value="06">06</option>
      <option value="07">07</option>
      <option value="08">08</option>
      <option value="09">09</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      </select>

      <label for="validYear">Year</label>
      <select 
      v-model="form.validYear" 
      name="year" 
      @change="emitYearToParent" 
      id="">
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
      </select>

      <label for="vendor">vendor</label>
      <select 
      v-model="form.vendor" 
      name="vendor" 
      @change="emitVendorToParent" 
      id="">
      <option value="bitcoin">Bitcoin Inc</option>
      <option value="evil">Evil Corp</option>
      <option value="blockchain">Blockchain Inc</option>
      <option value="ninja">Ninja Bank</option>
      </select>

      <button @click="eventAddCard">ADD CARD</button>
  </div>
</div>
</template>

<script>

export default {
name: 'CardForm',
data(){ return {
    form: { 
        id: "",
        holder: "",
        number: "",
        validMonth: "",
        validYear: "",
        vendor: "",        
      },
    }
  },

methods: {
    emitNumberToParent () {
      this.$emit('childToParent', this.form.number)
    },

    emitNameToParent(){
        this.$emit("nameToParent", this.form.holder)
    },

    emitMonthToParent(){
        this.$emit("monthToParent", this.form.validMonth)
    },

    emitYearToParent(){
        this.$emit("yearToParent", this.form.validYear)
    },

    emitVendorToParent(){
        this.$emit("vendorToParent", this.form.vendor)     
    },

    eventAddCard() {
      let id = Math.floor(Math.random() * 10000000).toString()
      let newCard = {
        id: id,
        holder: this.form.holder,
        vendor: this.form.vendor,
        number: this.form.number,
        validMonth: this.form.validMonth,
        validYear: this.form.validYear,
        active: false,
      }
      this.$root.cards.push(newCard)
      this.$router.push("/")
    },
  }
}

</script>

<style>
.container {
  flex-direction: column;
  align-items: center;
  align-content: center;
}

.card-form {
    margin: 2rem;
    display: grid;
    text-align: justify;
    grid-template-columns: 1fr;
    gap: .5rem 1rem;
    font-family: 'PT Mono', monospace;
    text-transform: uppercase;
    font-size: .7rem;    
}

input, select{
    height: 2.5rem;
    border-radius: 5px;
    border: 1px solid black;
}

button {
    position: relative; 
    top: 3rem;
    bottom: 3rem;
    width: 300px;
    height: 60px;
    border: 2px solid black;
    border-radius: .5rem;
    font-family: 'PT Mono', monospace;
    font-size: 1.2rem;
    font-weight: 500;
    background-color: white;
    cursor: pointer;   
}

button:hover {
    background-color: black;
    color: white;
}

</style>