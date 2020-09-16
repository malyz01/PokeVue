<template>
  <div class="container">
    <div class="cardContainer">
      <Card v-for="pokemon in allPokemon" :key="pokemon.id" :pokemon="pokemon" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "../components/Card";
export default {
  name: "Pokemon",
  components: {
    Card,
  },
  methods: {
    ...mapActions(["fetchPokemons"]),
  },
  computed: {
    ...mapGetters(["allPokemon"]),
  },
  created() {
    this.fetchPokemons();
  },
};
</script>

<style scoped>
.container {
  padding: 1em;
}

.cardContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
