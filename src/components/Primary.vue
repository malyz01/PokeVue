<template>
  <div>
    <Sub @emit-me="alertMe" />
    <div>{{ txt }}</div>
  </div>
</template>

<script>
import Sub from './Sub'

export default {
  name: 'Primary',
  data: function() {
    return {
      txt: ''
    }
  },
  components: {
    Sub
  },
  methods: {
    alertMe(prop) {
      console.log(prop)
      this.txt = prop
    }
  }
}
</script>
