<template>
  <section>
    <div>
      <h2 v-if="searchTerm !== ''">Words similar to {{searchTerm}}</h2>
    </div>
    <ul>
      <li>Word 1</li>
      <li>Word 2</li>
      <li>Word 3</li>
    </ul>
  </section>
</template>

<script>


export default {
  name: 'WordList',
  props: ['searchTerm'],
  data: function () {
    return {
      synonyms: []
    }
  },
  methods: {
    
  }
}

</script>

<style scoped>

  ul {
    min-height: 200px;
    list-style: none;
    max-width: 400px;
    margin: auto;
    border: 1px solid #039B77;
    padding: 20px 0 20px 0;
  }

  li {
    margin: 5px;
    padding: 5px;
  }

  div {
    height: 50px;
  }
</style>