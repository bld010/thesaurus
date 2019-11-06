import Header from '../../src/components/Header.vue';
import { shallowMount } from '@vue/test-utils';
import '@vue/cli-plugin-unit-jest'

describe('Header', () => {
  it('renders a header', () => {
    const wrapper = shallowMount(Header)
  
    expect(wrapper.find('h1').text()).toEqual('Thesaurus')
  })
})