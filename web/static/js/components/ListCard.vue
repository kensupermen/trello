<template>
<div class="main-container">
  <div class="cards-wrapper">
    <div class="row">
      <h5 class="cards-header">{{ listName }}</h5>
      <div class="col-sm-2 cards" >
        <div v-for="card in cards" :key="card.id">
          <card class="canvas" :value="card.name"></card>
        </div>
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
      listName: "test",
    }
  },
  mounted() {
    axios.get(API_URL + '/lists/1').then(response => {
      console.log(response.data);
      this.cards = response.data.cards;
      this.listName = response.data.list.name;
    });
  },
};
</script>

<style lang="scss" scoped>
</style>