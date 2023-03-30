import comp1 from './comp1.js'
import comp2 from './comp2.js'
new Vue({
  el: '#app',
  template: `<div> Hello {{ city }}
  <comp2 />
  </div>`,
  components: {
    comp1,
    comp2,
  },
  data: {
    city: 'Varansi',
  },
})
