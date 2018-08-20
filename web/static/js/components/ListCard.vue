<template>
<div class="main-container">
  <div class="cards-wrapper">
    <div class="row">
      <div class="col-sm-3">
        <card></card>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Card from './Card';

export default {
  name: 'ListCard',
  components: {
    card: Card,
  }
};
</script>

<style lang="scss" scoped>
</style>