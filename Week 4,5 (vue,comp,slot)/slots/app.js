import comp1 from './comp1.js'
new Vue({
  el: '#app',
  template: `<div> Hello 
  <comp1> 
  Hello from comp 2
  <template v-slot:header>
    This is header
  </template>
  <template v-slot:main>
    This is  Main
  </template>
  <template v-slot:footer>
    This is Footer
  </template>
  </comp1>
  </ div>`,
  components: {
    comp1,
  },
})
