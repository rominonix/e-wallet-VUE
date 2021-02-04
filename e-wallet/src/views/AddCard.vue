<template>
  <div class="add-card">
    <Top 
    title="e-wallet"
    msg="new card"
    />
    <Card 
    :name="nameFromChild"
    :number="numberFromChild"
    :month="monthFromChild"
    :year="yearFromChild"
    :vendor="vendorFromChild"
    />

    <CardForm 
    v-on:childToParent="onChildClick" 
    v-on:nameToParent="onNameClick" 
    v-on:monthToParent="onMonthClick"
    v-on:yearToParent="onYearClick"
    v-on:vendorToParent="onVendorClick"
    />
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardForm from '@/components/CardForm.vue'

export default {
  name: 'AddCard',
  data () {
    return {
      numberFromChild: "", 
      nameFromChild: "",
      monthFromChild:"",
      yearFromChild:"",
      vendorFromChild:""
    }
  },

components: {
  Top,
  Card,
  CardForm
  },

methods: {
    onChildClick (value) {
      this.numberFromChild = value
    },

    onNameClick (value){
      this.nameFromChild = value
    },

    onMonthClick( value){
      this.monthFromChild = value
    },

    onYearClick(value){
      this.yearFromChild = value
    },

    onVendorClick(value){
      this.vendorFromChild = value
    }, 
  }
}
</script>

<style>

</style>
