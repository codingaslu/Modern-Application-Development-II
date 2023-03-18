const Home = {
  template: `<div> This is Home
  <button @click='goProfile'> Go to Profile Page </button>
  </div>`,
  methods: {
    goProfile() {
      this.$router.push('/profile')
    },
  },
}

const Profile = {
  template: `<div> This is profile page of {{this.$route.params.name}} </div>`,
}

const NotFound = {
  template: `<div> Page Not found</div>`,
}

const routes = [
  { path: '/', component: Home },
  { path: '/profile/:id/user/:name', component: Profile, name: 'profile' },
  { path: '*', component: NotFound },
]

const router = new VueRouter({
  routes,
})

new Vue({
  el: '#app',
  template: `<div> 
  <router-link to='/'> Home </router-link>
  <router-link :to="{name: 'profile', params:{id: id, name: 'Narendra'}}"> Profile </router-link>
  <router-view></router-view> </div>`,
  router,
  data: {
    id: 3,
  },
})
