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
      this.$router.push("/boards/1");
    }
  }
};
</script>

<style scoped>
</style>