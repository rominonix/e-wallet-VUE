import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      cards:[
          {
            id: "",
            holder: "Pedro Navaja",
            vendor: "bitcoin",
            number: "1234 5678 9101 1121",
            validMonth: "11",
            validYear: "24",
            active: true,
          },          {
            id: "",
            holder: "Juan Gabriel",
            vendor: "evil",
            number: "1234 5678 9101 1121",
            validMonth: "01",
            validYear: "22",
            active: false,
          },
        ],
      };
    },
  
  router,
  render: h => h(App)
}).$mount('#app')
