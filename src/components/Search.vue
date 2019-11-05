<template>
  <form class="Search">
    <label for="search">Search for synonyms</label>
    <input
      placeholder="Search ..."
      name="search"
      v-model="searchTerm"
    >
    <button v-on:click.prevent v-on:click="fetchSynonyms">Search</button>
    {{ searchTerm }}
  </form>
</template>

<script>


export default {
  name: 'Search',
  data() {
    return {
      searchTerm: ''
    }
  }, 
  methods: {
    async fetchSynonyms() {
      
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
