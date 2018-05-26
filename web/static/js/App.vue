<template>
  <div id="app">
    <trello-header></trello-header>
    <!-- <div class="container"> -->
    <!--   <h1>Welcome Vue with Phoenix!!!</h1> -->
    <!-- </div> -->
    <router-view></router-view>
  </div>
</template>

<script>

import TrelloHeader from './components/TrelloHeader';

export default {
  name: 'App',
  components: {
    TrelloHeader
  }
};
</script>
