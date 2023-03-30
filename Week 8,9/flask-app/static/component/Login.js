export default {
  template: `<div>
      <h1>Login Here</h1>
      <input type="text" placeholder="email" v-model='email' />
      <input type="password" placeholder="password" v-model='password' />
      <button @click='login'> Login </button>
    </div>`,

  data() {
    return {
      email: null,
      password: null,
    }
  },

  methods: {
    login() {
      fetch('/login?include_auth_token', {
        method: 'POST',
        body: JSON.stringify({ email: this.email, password: this.password }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
        })
        .then((data) => {
          localStorage.setItem(
            'auth-token',
            data.response.user.authentication_token
          )
          this.$router.push('/')
        })
    },
  },
}
