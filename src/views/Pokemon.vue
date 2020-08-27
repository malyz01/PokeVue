<template>
  <div class="container">
    <Title title="My Pokemon" />
    <div v-for="pokemon in allPokemon" :key="pokemon.name">
      {{ pokemon.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Title from '@/components/Title'

export default {
  name: 'Pokemon',
  components: {
    Title
  },
  methods: {
    ...mapActions(['fetchPokemons'])
  },
  computed: {
    ...mapGetters(['allPokemon'])
  },
  created() {
    this.fetchPokemons()
  }
}
</script>

<style scoped>
.container {
  padding: 1em;
}
</style>
