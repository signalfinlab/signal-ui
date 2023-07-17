<template>
  <div :class="className" :style="checkboxStyle">
    <input type="checkbox" :id="id" :name="id" class="hb-checkbox__input" @change="handleChange" v-model="selfModel" />
    <label class="hb-checkbox__label" :for="id">
      <div class="hb-checkbox__mark"></div>
      <div class="hb-checkbox__text">
        <slot v-if="hasSlot"></slot>
        <template v-else>{{ props.label }}</template>
      </div>
    </label>
    <template v-if="props.useBracket">
      <i class="hb-checkbox__bracket fa-regular fa-chevron-right" @click="handleClickBracket" />
    </template>
  </div>
</template> 

<script setup>
import { ref, useSlots, computed, onMounted, watch } from 'vue';
const selfModel = ref(false);
const slots = useSlots();
const hasSlot = !!slots['default'];
const id = 'id-' + Math.random().toString(36).substring(2);

const props = defineProps({
  modelValue: {
    type: Boolean,
  },
  label: {
    type: String,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  shape: {
    type: String,
    default: 'box',
    validator: function (value) {
      return ['box', 'line'].indexOf(value) !== -1;
    },
  },
  size: {
    type: String,
    default: 'h4',
    validator: function (value) {
      return ['h2', 'h3', 'h4'].indexOf(value) !== -1;
    },
  },
  useBracket: {
    type: Boolean,
    default: false,
  },
  animation: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue', 'change', 'clickBracket']);

const className = computed(() => {
  let className = 'hb-checkbox';
  if (props.shape) className += ` hb-checkbox--${props.shape}`;
  if (props.size) className += ` hb-checkbox--${props.size}`;
  if (props.useBracket) className += ` hb-checkbox--bracket`;
  if (props.animation) className += ` hb-checkbox--animation`;
  return className;
});

const checkboxStyle = computed(() => {
  const checkboxStyle = {};

  return checkboxStyle;
});

const handleChange = (evt) => {
  emit('change', selfModel.value, evt);
  emit('update:modelValue', selfModel.value);
}

const handleClickBracket = (evt) => {
  emit('clickBracket', evt);
}

onMounted(() => {
  selfModel.value = props.modelValue;
});

watch(() => props.modelValue, (val) => { 
  selfModel.value = val;
})

</script>
<script>


</script>
<style scoped lang='scss' src="./checkbox.scss">
</style>