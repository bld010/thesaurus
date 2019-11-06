import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('renders h1', () => {
    
    const wrapper = shallowMount(Header)
    expect(wrapper.find('h1').text()).toMatch('Thesaurus')
  })
})
