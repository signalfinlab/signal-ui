import { defineCustomElement } from 'vue'
import Checkbox from './hb-checkbox/index.vue';

const components = [
  Checkbox,
]

console.log(Checkbox.styles) // ["/* inlined css */"]

components.map(component => {
  // convert into custom element constructor
  const HbCheckbox = defineCustomElement(Checkbox)
  // register
  customElements.define('hb-checkbox', HbCheckbox)
})