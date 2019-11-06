import Search from '../../src/components/Search.vue';
import { shallowMount } from '@vue/test-utils';
import '@vue/cli-plugin-unit-jest'

describe('Search', () => {
  it('should match the snapshot', () => {
    const wrapper = shallowMount(Search);

    expect(wrapper).toMatchSnapshot();
  })

  it('should set the correct default data', () => {

    const expected = {
      searchTerm: '',
      results: [],
      synonyms: [],
      error: '',
      loading: false
    }

    expect(typeof Search.data).toBe('function');
    const defaultData = Search.data();
    expect(defaultData).toEqual(expected)
  })
})