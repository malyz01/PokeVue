<template>
  <div>
    <button @click="$emit('emit-me', 'from sub')">Emit to Primary</button>
  </div>
</template>

<script>
export default {
  name: 'Sub'
}
</script>
