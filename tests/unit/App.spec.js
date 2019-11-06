import App from '../../src/App.vue';
import { shallowMount } from '@vue/test-utils';
import '@vue/cli-plugin-unit-jest';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallowMount(App);

    expect(wrapper).toMatchSnapshot();
  })
})