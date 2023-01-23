<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <div class="container sm:w-3 sm:w-4 lg:w-6">
    <h1>Vue SFC</h1>
    <button @click="count++">Count is: {{ count }}</button>
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
