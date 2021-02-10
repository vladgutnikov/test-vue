import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import Headers from '../Headers.vue';
import ListItems from '../ListItems.vue';
import Vuetify from 'vuetify';
import Vue from 'vue';

describe('Home.vue', () => {
  let wrapper, vuetify, newWrapper;
  const localVue = createLocalVue();

  beforeEach(() => {
    Vue.use(Vuetify);
    wrapper = shallowMount(Headers);
    vuetify = new Vuetify();
    newWrapper = mount(Headers, {
      localVue,
      vuetify,
    });
  });

  it('renders a vue instance', () => {
    expect(shallowMount(Headers)).toBeTruthy();
  });

  it('check if child ListItems exists', () => {
    const child = wrapper.findComponent(ListItems);
    expect(child.exists()).toBe(true);
  });

  it('Enter text and check the value of inputText', () => {
    const textInput = newWrapper.find('.v-text-field input');
    textInput.setValue('84102');
    expect(newWrapper.vm.search).toBe('84102');
  });

  it('should have match snapshot', () => {
    expect(newWrapper.html()).toMatchSnapshot();
  });
});
