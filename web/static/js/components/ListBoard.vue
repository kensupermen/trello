<template>
<div class="container">
  <div class="boards-wrapper">
    <div class="row">
      <div class="col-sm-3" v-for="board in boards" :key="board.name">
        <board :board="board">{{ board }}</board>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

import Board from './Board';
import { API_URL } from '../services/config';

export default {
  name: 'ListBoard',
  data() {
    return {
      boards: []
    }
  },
  components: {
    board: Board,
  },
  mounted() {
    axios.get(API_URL + '/boards/').then(response => {
      this.boards = response.data.owned_boards
      console.log(response.data.owned_boards);
    });
  },
};
</script>

<style lang="scss" scoped>
</style>