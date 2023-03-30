import Loading from './Loading.js'
import Error from './Error.js'

export default {
  template: `<div>
  <div v-if='name'>
   This is profile page of {{name}}
  </div>
  <Error v-else-if='hasError' />
  <Loading v-else='hasError' />
  </div>`,
  data() {
    return {
      name: null,
      hasError: false,
    }
  },
  mounted() {
    fetch('http://localhost:5000/profile', {
      headers: {
        'Authentication-Token': localStorage.getItem('auth-token'),
      },
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        this.name = data.name
      })
  },
  components: {
    Loading,
    Error,
  },
}
