<template>
  <div>
    <form class="Search">
    <label for="search">Search for synonyms</label>
    <input
      placeholder="Search ..."
      name="search"
      v-model="searchTerm"
    >
    <button v-on:click.prevent="fireFetchCall(searchTerm)">Search</button>
    </form>
    <div>
      <h2 v-if="loading === true">Loading...</h2>
      <h2 v-else-if="error !== ''">{{ error }}</h2>
      <h2 v-else-if="error !== '' && synonyms.length === 0 && searchTerm !== ''">No synonyms found for "{{searchTerm}}"</h2>
      <h2 v-else-if="loading === false && error === '' && synonyms.length > 0 && searchTerm !== ''">Words similar to "{{searchTerm}}"</h2>
    </div>
  </div>

</template>

<script>
import { fetchSynonyms } from '../api/apiCalls.js';

export default {
  name: 'Search',
  props: ['searchTermFromClick'],
  watch: {
    searchTermFromClick: function() {
      this.searchTerm=this.searchTermFromClick,
      this.error=''
      this.fireFetchCall(this.searchTerm)
    }
  },
  data: function() {
    return {
      searchTerm: '',
      results: [],
      synonyms: [],
      error: '',
      loading: false
    }
  }, 
  methods: {
    emitResultsToApp: function() {
      this.$emit('receiveResultsFromSearch', this.results)
    },
    fireFetchCall: async function() {
      try {
        this.results = [];
        this.error = '';
        this.loading = true;
        this.synonyms = [];
        let searchResults = await fetchSynonyms(this.searchTerm)
        this.results = await searchResults
        if (searchResults.meta.syns) {
          this.synonyms = searchResults.meta.syns.flat()
          this.loading = false
          this.emitResultsToApp();
        } else {
          this.error = 'There were no words matching your search.'
        }
      } catch (error) {
        this.error = 'There was an error finding your synonyms. Please try a different word.'
        this.loading = false
      }

    }
  }
}


</script>

<style scoped>

div {
  min-height: 80px;
}

form {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  min-width: 30%;
  max-width: 400px;
  margin: 20px auto 20px auto;
  padding-bottom: 20px;
  border-bottom: 1px solid #039B77;
  justify-content: center;
}

p {
  margin: auto
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

div {
  min-height: 40px;
}

button:active {
  outline: none
}
</style>
