import Home from './component/Home.js'
import Profile from './component/Profile.js'
import Login from './component/Login.js'

const routes = [
  { path: '/', component: Home },
  { path: '/profile', component: Profile },
  { path: '/login', component: Login },
]

const router = new VueRouter({
  routes,
})

export default router
