<template>
<div class="main-container">
  <div class="cards-wrapper">
    <div class="row">
      <div class="col-sm-2 cards" v-for="card in cards" :key="card.id">
        <h5 class="cards-header">Idea Box</h5>
        <card class="canvas" value="Learning Phoenix Framework"></card>
        <card class="canvas" value="Read Rails in Action"></card>
        <card class="canvas" value="card.name"></card>
        <a href="#" class="canvas-composer"><i class="icon ion-md-add"></i> Add another card</a>
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
    console.log("id = " + this.$route.params.id);
    axios.get(API_URL + '/boards/' + this.$route.params.id).then(response => {
      console.log(response);
    });
  },
};
</script>

<style lang="scss" scoped>
</style>