import { fetchSynonyms } from '../../src/api/apiCalls.js';

describe('apiCalls', () => {
  describe('fetchSynonyms', () => {
    it('should fire fetch with the correct url', () => {
      let expectedUrl = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/happy?key=${process.env.VUE_APP_API_KEY}`

      let mockFetch = jest.fn()
      global.fetch = mockFetch

      fetchSynonyms('happy');

      expect(mockFetch).toHaveBeenCalledWith(expectedUrl)
    })
  })
})