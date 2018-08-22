<template>
<div class="board" @click="onClick()">
  <h5>
    Free Time
  </h5>
</div>
</template>

<script>
export default {
  name: 'Board',
  methods: {
    onClick() {
      console.log("Clicked on board!");
    }
  }
};
</script>

<style scoped>
</style>