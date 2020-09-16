<template>
  <b-card class="card">
    <b-card-header class="header">
      <h4 class="mb-0">{{pokemon.name}}</h4>
    </b-card-header>
    <img class="image" src="@/assets/images/pokeball.png" />
  </b-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    pokemon: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 300px;
  margin: 2rem 1rem;
  cursor: pointer;
}

.header {
  text-transform: capitalize;
  background-color: #ea0b00;
  color: azure;
}

.image {
  max-width: 300px;
  width: 100%;
}
</style>