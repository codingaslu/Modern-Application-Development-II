export default {
  template: `<div> From Component 1 {{name}} {{city1}} {{age}}
  <button @click="$emit('alert-name', city1, name)"> Click me </button>
  </div>`,
  data() {
    return {
      name: 'Narendra',
    }
  },
  props: ['city1', 'age', 'state'],
}

// Comp 2
// comp1
