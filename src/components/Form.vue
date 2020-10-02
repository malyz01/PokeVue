<template>
  <main class="main">
    <form>
      <input v-model="name" type="text" />
    </form>
  </main>
</template>

<script>
export default {
  name: "myForm",
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  max-width: 200px;
}
</style>