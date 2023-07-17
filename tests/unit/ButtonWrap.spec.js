import { mount, shallowMount } from '@vue/test-utils';
import HbButtonWrap from '@/hb-button-wrap/index.vue';

describe('ButtonWrap', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(HbButtonWrap);
    expect(wrapper.vm).toBeTruthy();
  });

  test('isFull', () => {
    const wrapper = shallowMount(HbButtonWrap, {
      propsData: {
        isFull: true,
      },
    });
    expect(wrapper.classes()).toContain('hb-button-wrap--full');
  });

  test('isFloat', () => {
    const wrapper = shallowMount(HbButtonWrap, {
      propsData: {
        isFloat: true,
      },
    });
    expect(wrapper.classes()).toContain('hb-button-wrap--float');
  });

  test('gridRatio', () => {
    const wrapper = shallowMount(HbButtonWrap, {
      propsData: {
        gridRatio: '1fr 2fr 3fr',
      },
    });
    expect(wrapper.classes()).toContain('hb-button-wrap--grid');
  });
});
