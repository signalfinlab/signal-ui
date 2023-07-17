import { defineCustomElement } from 'vue'
import HbCheckbox from './hb-checkbox/index.vue';

const components = [
  HbCheckbox,
]

const install = (app, options = {}) => {
  console.log(HbCheckbox.styles) // ["/* inlined css */"]
  components.map(component => {
    customElements.define(component.name, component);
  }) 
};

export { install };

export default install;