import { defineCustomElement } from 'vue'
import HbCheckbox from './hb-checkbox/index.vue';

const components = [
  HbCheckbox,
]

const HabitUi = () => {
  components.map(component => {
    console.log(HbCheckbox.styles) // ["/* inlined css */"]
    customElements.define(component.name, component);
  })  
}
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      habitUi,
    },
  };
});
