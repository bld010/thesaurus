import Search from '../../src/components/Search.vue';
import { shallowMount } from '@vue/test-utils';
import '@vue/cli-plugin-unit-jest'
import { fireFetchCall } from '../../src/api/apiCalls';

jest.mock('../../src/api/apiCalls.js')

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

  describe('searchTermFromClick watcher', () => {
    it('should fire fetch call when props change', () => {
      
      const wrapper = shallowMount(Search, {
        propsData: {
          searchTermFromClick: ''
        }
      });

      let mockFireFetchCall = jest.fn()
      wrapper.vm.fireFetchCall = mockFireFetchCall

      wrapper.setProps({
        searchTermFromClick: 'New Search Term'
      })

      expect(mockFireFetchCall).toHaveBeenCalled();
    })
  })

  describe('emitResultsToApp', () => {
    const wrapper = shallowMount(Search);

    let mockResults = 'mockResults'
    wrapper.vm.results = mockResults;
    wrapper.vm.emitResultsToApp()

    expect(wrapper.emitted()).toEqual({'receiveResultsFromSearch': [[mockResults]]})
  })

  describe('fireFetchCall', () => {
    it('should clear out the data when fired', () => {

      const wrapper = shallowMount(Search);

      let expectedData = {
        searchTerm: '',
        results: [],
        synonyms: [],
        error: '',
        loading: false
      }

      let mockFetchSynonyms = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          meta: {
            syns: []
          }
        })
      })

      let mockEmitResultsToApp = jest.fn()

      wrapper.vm.results = ['mock result'];
      wrapper.vm.error = 'mock error';
      wrapper.vm.loading = false;
      wrapper.vm.synonyms = ['mock synonyms']
      wrapper.vm.emitResultsToApp = mockEmitResultsToApp;
      wrapper.vm.fetchSynonyms = mockFetchSynonyms;

      wrapper.vm.fireFetchCall()

      let data = Search.data()

      expect(data).toEqual(expectedData)
    })
  })
})