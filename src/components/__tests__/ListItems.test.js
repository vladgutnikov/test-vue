import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import ListItems from '../ListItems.vue';
import Vuetify from 'vuetify';
import Vue from 'vue';

describe('ListItems.vue', () => {
  let vuetify;
  const localVue = createLocalVue();

  beforeEach(() => {
    Vue.use(Vuetify);
    vuetify = new Vuetify();
  });

  it('renders a vue instance', () => {
    expect(shallowMount(ListItems)).toBeTruthy();
  });

  it('renders a div', () => {
    const newWrapper = mount(ListItems, {
      localVue,
      vuetify,
      propsData: {
        items: [{ title: 'Hello world' }],
      },
    });

    expect(newWrapper.props().items[0]).toEqual({ title: 'Hello world' });
  });

  it('should have match snapshot', () => {
    const newWrapper = mount(ListItems, {
      localVue,
      vuetify,
    });

    expect(newWrapper.html()).toMatchSnapshot();
  });
});
