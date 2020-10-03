<template>
  <div class="home">
    <b-jumbotron class="jumbo" text-variant="white" border-variant="dark">
      <div class="row">
        <div class="col-sm inputContainer">
          <h3>Welcome to Pokevue!</h3>
        </div>
        <div class="col-sm resultContainer">
          <c-form></c-form>
        </div>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src
import cForm from '../views/Home/Form'

export default {
  name: 'Home',
  components: {
    cForm
  }
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}
.jumbo {
  height: 780px;
  padding: 6rem 2.5rem;
  background-image: url('../assets/images/pokemonbg.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.row {
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
}
.inputContainer {
  background-color: cornflowerblue;
  padding: 2rem;
}
.resultContainer {
  background-color: darkgrey;
  padding: 0;
}
</style>
