import router from './router.js'

new Vue({
  el: '#app',
  template: `<div> 
  <router-link to='/'> Home </router-link>
  <router-link to='/profile'> Profile </router-link>
  <router-link to='/login'> Login </router-link>
  <button @click='logout'> Logout </button>
  <router-view></router-view>
  </div>`,
  router,
  methods: {
    logout() {
      localStorage.removeItem('auth-token')
      window.location.href = '/logout'
    },
  },
})
