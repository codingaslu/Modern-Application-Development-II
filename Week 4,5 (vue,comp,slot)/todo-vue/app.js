import Footer from './Components/Footer.js'
import Task from './Components/Task.js'

Vue.component('Header', {
  template: `<div> {{name}}
  <Footer />
  </div>`,
  data() {
    return {
      name: 'Narendra',
    }
  },
  components: {
    Footer: Footer,
  },
})

new Vue({
  // options object
  el: '#app',
  template: `<div> 
  <Header />
  <div> No of tasks: {{noOfTasks}} </div>
  <ul>
    
    <li v-for='(task, index) in tasks'> 
        <Task :childTask='task' name='Narendra' />
    </li>
  </ul>
  <input placeholder='task' v-model='currentTask' />
  <button @click='addTask()'> Add Button </button>
  <Footer />
  </div>`,
  data: {
    currentTask: null,
    tasks: [
      { name: 'Task 1', complete: false },
      { name: 'Task 3', complete: false },
    ],
  },
  components: {
    Footer,
    Task,
  },
  methods: {
    addTask() {
      this.tasks.push({ name: this.currentTask })
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    },
    markAsComplete(index) {
      this.tasks[index].complete = true
    },
  },
  computed: {
    noOfTasks() {
      return this.tasks.length
    },
  },
  watch: {
    currentTask(newVal, oldVal) {
      if (newVal.length > 5) {
        alert('Length of the task cannot be more then 5')
      }
    },
  },
})
