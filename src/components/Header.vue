<template>
  <header>
    <h1>TheSaurus</h1>
    <img src="../assets/diplodocus.svg">
  </header>
</template>


<script>

  export default {
    name: 'Header',
  }
</script>

<style scoped>

h1 {
  color: #039B77;
}

header {
  border-bottom: 1px solid #039B77;
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

img {
  transform: scaleX(-1);
  height: 50px;
  margin-top: 10px;
}
</style>