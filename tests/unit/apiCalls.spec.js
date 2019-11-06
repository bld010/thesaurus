import { fetchSynonyms } from '../../src/api/apiCalls.js';

describe('apiCalls', () => {
  describe('fetchSynonyms', () => {
    it('should fire fetch with the correct url', async () => {
      let expectedUrl = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/happy?key=${process.env.VUE_APP_API_KEY}`

      let mockResults = [['results'], ['more results']]

      let mockFetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return mockResults
          }
        })
      })
      global.fetch = mockFetch

      await fetchSynonyms('happy');

      expect(mockFetch).toHaveBeenCalledWith(expectedUrl)
    })

    it('should return the first index of array of results when successful (HAPPY)', async () => {

      let mockResults = [['results'], ['more results']]

      let mockFetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return mockResults
          }
        })
      })

      global.fetch = mockFetch;

      await expect(fetchSynonyms('happy')).resolves.toEqual(['results'])
    })

    it('should return an error if response not ok (SAD)', async () => {
      let mockFetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })

      let expectedError = Error('There was an error when fetching your synonyms. Please try again.')

      global.fetch = mockFetch;

      await expect(fetchSynonyms('happy')).resolves.toEqual(expectedError)
    })
  })
})