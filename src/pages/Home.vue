<template>
  <div class="home">
    <div>
      <b-jumbotron bg-variant="danger" text-variant="white" border-variant="dark">
        <Title title="PokeVue" />
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title";

export default {
  name: "Home",
  components: {
    Title,
  },
};
</script>
