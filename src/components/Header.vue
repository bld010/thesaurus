<template>
  <header>
    <h1>Thesaurus</h1>
    
  </header>
</template>


<script>

  export default {
    name: 'Header',
    components: {
    },
    data: () => {
      return {

      }
    }
  }
</script>

<style scoped>

h1 {
  color: #039B77;
  border: 1px solid pink; 
}

header {
  border-bottom: 1px solid #039B77;
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>