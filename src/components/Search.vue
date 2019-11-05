<template>
  <form class="Search">
    <label for="search">Search for synonyms</label>
    <input
      placeholder="Search ..."
      name="search"
      v-model="searchTerm"
      v-on:keyup="emitSearchTermToApp"
    >
    <button v-on:click.prevent="fireFetchCall(searchTerm)">Search</button>

    <p v-if="loading === true">Loading...</p>

  </form>
</template>

<script>
import { fetchSynonyms } from '../api/apiCalls.js';

export default {
  name: 'Search',
  data: function() {
    return {
      searchTerm: '',
      results: [],
      synonyms: [],
      error: '',
      loading: true
    }
  }, 
  methods: {
    emitSearchTermToApp: function() {
      this.$emit('onSearchInput', this.searchTerm)
    },
    fireFetchCall: async function() {
      try {
        let searchResults = await fetchSynonyms(this.searchTerm)
        this.results = await searchResults
        this.synonyms = searchResults.meta.syns.flat()
        this.loading = false
      } catch (error) {
        this.error = 'There was an error finding your synonyms. Please try again.'
        this.loading = false
      }

    }
  }
}


</script>

<style scoped>

form {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  min-width: 30%;
  max-width: 400px;
  margin: 20px auto 20px auto;
  padding-bottom: 20px;
  border-bottom: 1px solid #039B77;
  justify-content: center;
}

input {
  margin-left: 5px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
