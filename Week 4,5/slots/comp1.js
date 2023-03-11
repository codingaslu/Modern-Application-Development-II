export default {
  template: `<div> 
  <header>
    <slot name='header'></slot>
  </header>
  <main>
    <slot ></slot>
  </main>
  <footer>
    <slot name='footer'></slot>
  </footer>
  Comp 1
  </div>`,
}
