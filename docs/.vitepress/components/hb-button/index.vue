<template>
  <button type="button" :class="className" :style="buttonStyle" :disabled="disabled" @click="handleClick">
    <template v-if="icon && computedIconPosition === 'left'">
      <i :class="icon" class="hb-button__icon--left" />
    </template>
    <span :class="{ 'hb-button__text': hasSlot }">
      <slot></slot>
    </span>
    <template v-if="computedIcon && computedIconPosition === 'right'">
      <i :class="computedIcon" class="hb-button__icon--right" />
    </template>
  </button>
</template> 

<script>
export default {
  name: 'hb-button',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary', 'kakao', 'gray'].indexOf(value) !== -1;
      },
    },
    height: {
      type: String,
      default: 'xl',
      validator: function (value) {
        return ['xs', 'sm', 'md', 'lg', 'xl'].indexOf(value) !== -1;
      },
    },
    isFull: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    iconPosition: {
      type: String,
      default: 'right',
      validator: function (value) {
        return ['left', 'right'].indexOf(value) !== -1;
      },
    },
    shape: {
      type: String,
      default: 'fill',
      validator: function (value) {
        return ['fill', 'line', 'text'].indexOf(value) !== -1;
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
    fullMargin: {
      type: Number,
    },
  },

  data() {
    return {
      hasSlot: false,
    };
  },

  computed: {
    className() {
      let className = 'hb-button';
      if (this.color) className += ` hb-button--${this.color}`;
      if (this.shape) className += ` hb-button--${this.shape}`;
      if (this.height) className += ` hb-button--${this.height}`;
      if (this.type) className += ` hb-button--${this.type}`;
      if (this.isFull) className += ` hb-button--full`;
      if (this.loading) className += ' fa-3x';
      return className;
    },

    isOnlyIcon() {
      // 텍스트없고 아이콘만 있는 경우 true
      let result = false;
      if (!this.hasSlot && this.icon) result = true;
      return result;
    },

    computedIcon() {
      if (this.loading) return 'fa-solid fa-spinner fa-spin';
      return this.icon;
    },

    computedIconPosition() {
      if (this.loading) return 'right';
      return this.iconPosition;
    },

    buttonStyle() {
      const buttonStyle = {};
      // full 인 경우 마진세팅.
      if (this.isFull && this.fullMargin) {
        buttonStyle['width'] = `calc(100% - ${this.fullMargin * 2}px)`;
        buttonStyle['margin'] = `0 ${this.fullMargin}px`;
      }
      return buttonStyle;
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },
  },
  mounted() {
    let that = this;
    setTimeout(function () {
      that.hasSlot = !!that.$slots['default'];
    });
  },
};
</script>
<style scoped lang='scss' src="./button.scss">
</style>