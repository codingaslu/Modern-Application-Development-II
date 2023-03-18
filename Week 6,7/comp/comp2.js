import comp1 from './comp1.js'

export default {
  template: `
  <p> 
  <comp1 v-bind:state = state @alert-name='alertName' city1='Delhi' />
  </p>
`,
  data() {
    return {
      state: {
        country: 'India',
        pin: 277201,
      },
    }
  },
  components: {
    comp1,
  },
  methods: {
    alertName(city, name) {
      window.alert(city + ' ' + name)
    },
  },
}
