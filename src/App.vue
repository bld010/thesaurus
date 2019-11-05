<template>
  <div id="app">
    <Header />
    <Search v-on:onSearchInput="updateSearchTerm" v-on:receiveResultsFromSearch="saveResults"/>
    <WordList :searchTerm="searchTerm" />
    <h2>App.searchTerm: {{ searchTerm }}</h2>
  </div>
</template>

<script>

import Search from './components/Search.vue';
import Header from './components/Header.vue';
import WordList from './components/WordList.vue';

export default {
  name: 'app',
  components: {
    Header,
    Search,
    WordList
  },
  data: () => {
    return {
      searchTerm: '',
      results: []
    }
  },
  methods: {
    updateSearchTerm (value) {
      this.searchTerm = value
    },
    saveResults(value) {
      this.results = value
    }
  }
}

</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin: 0;
  padding: 0;
}

</style>
