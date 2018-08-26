<template>
<div class="board" @click="onClick()">
  <h5>
    {{ board.name }}
  </h5>
</div>
</template>

<script>
export default {
  name: 'Board',
  props: ['board'],
  methods: {
    onClick() {
      this.$router.push("/boards/1");
    }
  }
};
</script>

<style scoped>
</style>