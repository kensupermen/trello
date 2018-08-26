<template>
<div class="main-container">
  <div class="cards-wrapper">
    <div class="row">
      <div class="col-sm-2 cards">
        <h4 class="cards-header">Idea Box</h4>
        <card class="canvas">Learning Phoenix Framework</card>
        <a href="#" class="canvas-composer">Add another card</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

import Card from './Card';
import { API_URL } from '../services/config';

export default {
  name: 'ListCard',
  components: {
    card: Card,
  },
  data() {
    return {
      cards: [],
    }
  },
  mounted() {
    axios.get(API_URL + '/boards/1').then(response => {
      console.log(response);
    });
  },
};
</script>

<style lang="scss" scoped>
</style>