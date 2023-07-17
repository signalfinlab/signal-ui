import { mount, shallowMount } from '@vue/test-utils';
import HbButton from '@/hb-button/index.vue';

describe('Button', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(HbButton);
    expect(wrapper.vm).toBeTruthy();
  });

  test('button slot', () => {
    const wrapper = shallowMount(HbButton, {
      slots: {
        default: 'Habit Button',
      },
    });

    expect(wrapper.html()).toContain('Habit Button');
  });

  test('color is primary', () => {
    const wrapper = shallowMount(HbButton);
    expect(wrapper.classes()).toContain('hb-button--primary');
  });

  test('color is kakao', () => {
    const wrapper = shallowMount(HbButton, {
      propsData: {
        color: 'kakao',
      },
    });
    expect(wrapper.classes()).toContain('hb-button--kakao');
  });

  test('color is gray', () => {
    const wrapper = shallowMount(HbButton, {
      propsData: {
        color: 'gray',
      },
    });
    expect(wrapper.classes()).toContain('hb-button--gray');
  });

  test('shape is fill', () => {
    const wrapper = shallowMount(HbButton);
    expect(wrapper.classes()).toContain('hb-button--fill');
  });

  test('shape is line', () => {
    const wrapper = shallowMount(HbButton, {
      propsData: {
        shape: 'line',
      },
    });
    expect(wrapper.classes()).toContain('hb-button--line');
  });

  test('shape is text', () => {
    const wrapper = shallowMount(HbButton, {
      propsData: {
        shape: 'text',
      },
    });
    expect(wrapper.classes()).toContain('hb-button--text');
  });

  test('disabled is false', () => {
    const wrapper = shallowMount(HbButton);
    expect(wrapper.attributes().disabled).toBe(undefined);
  });

  test('disabled is true', () => {
    const wrapper = shallowMount(HbButton, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.attributes().disabled).toBe('disabled');
  });

  test('height is xs', () => {
    const wrapper = shallowMount(HbButton, {
      propsData: {
        height: 'xs',
      },
    });
    expect(wrapper.classes()).toContain('hb-button--xs');
  });

  test('height is sm', () => {
    const wrapper = shallowMount(HbButton, {
      propsData: {
        height: 'sm',
      },
    });
    expect(wrapper.classes()).toContain('hb-button--sm');
  });

  test('height is md', () => {
    const wrapper = shallowMount(HbButton, {
      propsData: {
        height: 'md',
      },
    });
    expect(wrapper.classes()).toContain('hb-button--md');
  });

  test('height is lg', () => {
    const wrapper = shallowMount(HbButton, {
      propsData: {
        height: 'lg',
      },
    });
    expect(wrapper.classes()).toContain('hb-button--lg');
  });

  test('height is xl', () => {
    const wrapper = shallowMount(HbButton);
    expect(wrapper.classes()).toContain('hb-button--xl');
  });

  test('isFull', () => {
    const wrapper = shallowMount(HbButton, {
      propsData: {
        isFull: true,
      },
    });
    expect(wrapper.classes()).toContain('hb-button--full');
  });

  test('icon right', () => {
    const wrapper = mount(HbButton, {
      propsData: {
        icon: 'fa-solid fa-arrow-right',
        iconPosition: 'right',
      },
    });
    const icon = wrapper.find('.hb-button__icon--right');
    expect(icon.exists()).toBe(true);
    expect(icon.classes()).toContain('fa-solid');
    expect(icon.classes()).toContain('fa-arrow-right');
  });

  test('icon left', () => {
    const wrapper = mount(HbButton, {
      propsData: {
        icon: 'fa-regular fa-book-blank',
        iconPosition: 'left',
      },
    });
    const icon = wrapper.find('.hb-button__icon--left');
    expect(icon.exists()).toBe(true);
    expect(icon.classes()).toContain('fa-regular');
    expect(icon.classes()).toContain('fa-book-blank');
  });

  test('loading', () => {
    const wrapper = mount(HbButton, {
      propsData: {
        loading: true,
      },
    });
    expect(wrapper.classes()).toContain('fa-3x');
    const icon = wrapper.find('.hb-button__icon--right');
    expect(icon.exists()).toBe(true);
    expect(icon.classes()).toContain('fa-solid');
    expect(icon.classes()).toContain('fa-spinner');
    expect(icon.classes()).toContain('fa-spin');
  });
});
