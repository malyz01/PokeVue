<template>
  <div class="home">
    <Title msg="PokeVue" />
    <div>Pokemon cards</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title'

export default {
  name: 'Home',
  components: {
    Title
  }
}
</script>
