<template>
<header class="container-fluid tl-navbar">
  <div class="container">
    <img alt="logo" src="./images/logo.png" class="logo"/>
    <span>Trello</span>
    <div class="right-side">
      <router-link to="/login" >Login</router-link>
    </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  };
</script>
