<template>
  <main class="main">
    <form :submit="onSubmit">
      <div>
        <input v-model="query" v-on:keyup.enter="onSubmit" type="text" />
      </div>
      <div>
        <input v-model="second" type="text" />
      </div>
    </form>
  </main>
</template>

<script>
export default {
  name: 'cForm',
  data() {
    return {
      query: '',
      second: ''
    }
  },
  methods: {
    onSubmit() {
      alert(this.query)
    }
  }
}
</script>

<style scoped>
.main {
  background-color: beige;
  color: black;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  min-width: 300px;
  width: 100%;
  padding: 0;
}
</style>
