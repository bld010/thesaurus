<template>
  <section>
    <ul>
      <li v-for="(synonym, index) in synonyms" :key="index" tabindex=0 @click="emitSearchTermToApp(synonym)" @keyup="keyUpOnSynonym(synonym)">
        {{synonym}}
        </li>
    </ul>
  </section>
</template>

<script>


export default {
  name: 'WordList',
  props: ['synonyms'],
  methods: {
    emitSearchTermToApp: function(synonym) {
      event.target.blur()
      this.$emit('onSynonymClick', synonym)
    },
    keyUpOnSynonym: function(synonym) {
      if (event.key == "Enter") {
        this.emitSearchTermToApp(synonym)
      }
    }
  }
}

</script>

<style scoped>

section {
  overflow-y: scroll;
  min-height: 200px;
  max-height: 500px;
  width: 400px;
  border: 1px solid #039B77;
  margin: auto;
}

  ul {
    /* min-height: 200px; */
    list-style: none;
    /* max-width: 400px; */
    margin: auto;
    padding: 20px 0px 20px 40px;
    /* max-height: 400px; */
    /* height: 400px; */
    column-count: 2;
    column-width: 50%;
    overflow-y: scroll;
  }

  li {
    margin: 10px;
    padding: 5px;
    width: 50%;
  }

  li:hover {
    cursor: pointer
  }


  
</style>