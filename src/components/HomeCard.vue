<template>
  <main class="main">
    <div class="row">
      <div class="col-sm inputContainer">test</div>
      <div class="col-sm resultContainer"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomeCard'
}
</script>

<style scoped>
.main {
  background-color: beige;
  color: black;
  height: 100%;
  border-radius: 25px;
  overflow: hidden;
}
.row {
  height: 100%;
}
.inputContainer {
  background-color: cornflowerblue;
}
.resultContainer {
  background-color: darkgrey;
}
</style>
