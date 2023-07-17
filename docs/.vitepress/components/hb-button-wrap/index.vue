<template>
  <div :class="className" :style="buttonWrapStyle">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'hb-button-wrap',

  props: {
    isFull: {
      type: Boolean,
      default: false,
    },
    gridRatio: {
      type: String,
    },
    isFloat: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    className() {
      let className = 'hb-button-wrap';
      if (this.isFull) className += ` hb-button-wrap--full`;
      if (this.isFloat) className += ` hb-button-wrap--float`;
      if (this.gridRatio) className += ` hb-button-wrap--grid`;
      return className;
    },

    buttonWrapStyle() {
      let buttonWrapStyle = {};

      if (this.gridRatio) {
        buttonWrapStyle['grid-template-columns'] = this.gridRatio;
      }

      return buttonWrapStyle;
    },
  },
};
</script>

<style lang="scss" scoped>
$module: 'hb-button-wrap';
@import '@styles/__variables.scss';

.#{$module} {
  display: flex;
  align-items: center;
  gap: 12px;

  &--full {
    width: 100%;
    box-sizing: border-box;
    flex-direction: column;
    .hb-button {
      width: 100%;
    }
  }

  &--float {
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    bottom: 0;

    background-image: linear-gradient(to bottom, rgba(white, 0), rgba(white, 1) 20%);

    padding: 20px 16px 16px 16px;
  }

  &--grid {
    display: grid;
  }
}
</style>