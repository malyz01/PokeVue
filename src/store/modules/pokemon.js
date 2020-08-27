import axios from 'axios'

const state = {
  pokemons: []
}

const getters = {
  allPokemon: state => state.pokemons
}

const actions = {
  async fetchPokemons({ commit }) {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
    commit('setPokemons', data.results)
  }
}

const mutations = {
  setPokemons: (state, pokemons) => (state.pokemons = pokemons)
}

export default {
  state,
  getters,
  actions,
  mutations
}
