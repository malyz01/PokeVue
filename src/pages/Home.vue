<template>
  <div class="home">
    <b-jumbotron class="jumbo" text-variant="white" border-variant="dark">
      <home-card></home-card>
    </b-jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCard from "@/components/HomeCard";

export default {
  name: "Home",
  components: {
    HomeCard,
  },
};
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}
.jumbo {
  height: 780px;
  padding: 6rem 2rem;
  border-radius: 15px;
  background-image: url("../assets/images/pokemonbg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
