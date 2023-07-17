<template>
  <img :src="src" />
</template>

<script setup>
import { useSlots, computed } from 'vue';
const slots = useSlots();
const src = computed(() => {
  return `https://habitfactory-assets.s3.ap-northeast-2.amazonaws.com/emoji/${slots.default()[0].children}.png`;
});
</script>