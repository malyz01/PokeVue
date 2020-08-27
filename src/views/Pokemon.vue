<template>
  <div class="container">
    <Title title="My Pokemon" />
  </div>
</template>

<script>
import Title from '@/components/Title'

export default {
  name: 'Pokemon',
  components: {
    Title
  }
}
</script>

<style scoped>
.container {
  padding: 1em;
}
</style>
