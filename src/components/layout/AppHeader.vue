<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/pokemon">My Pokemon</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
#nav {
  padding: 30px;
  max-width: 800px;
  margin: 0 auto;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: black;
}

#nav a.router-link-exact-active {
  color: #e60b00;
}
</style>
