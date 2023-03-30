const vm = new Vue({
  el: '#app',
  template: `<div>
  <div v-if='task'>
  <div> Task Title: {{task.title}}</div>
  <div> Task Description : {{task.description}}</div>
  </div>
  <div v-else>
  Loading ...
  </div>
  </div>`,

  data: {
    task: null,
  },
  beforeCreate() {
    console.log(this.name)
  },
  async created() {
    const res = await fetch('http://localhost:5001/api/tasks/1')
    if (res.ok) {
      const data = await res.json()
      this.task = data
    } else {
      console.log('SOmething went wrong')
    }
  },
  beforeMount() {
    console.log(this.name)
    console.log(this.$el)
  },
  mounted() {
    console.log('Component is mouted')
    console.log(this.$el)
  },
})

// div
// div
