<template>
<div class="container">
  <div class="boards-wrapper">
    <div class="row">
      <div class="col-sm-3">
        <board></board>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Board from './Board';

export default {
  name: 'ListBoard',
  components: {
    board: Board,
  }
};
</script>

<style lang="scss" scoped>
</style>