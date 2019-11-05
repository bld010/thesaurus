<template>
  <div id="app">
    <Header />
    <Search />
    <WordList />
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
