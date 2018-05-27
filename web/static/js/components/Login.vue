<template>
  <div id="login-form" class="container">
    <input name="" type="text" v-model="email" placeholder="Email" class="form-control"/>
    <br/>
    <input name="" type="password" v-model="password" placeholder="Password" class="form-control"/>
    <br/>
    <button class="btn btn-primary form-control" @click="login">Login</button>
  </div>
</template>

<script>
  import axios from 'axios';

  const END_POINT = 'http://localhost:4000/api/v1'

  export default {
    name: 'Login',
    data() {
      return {
        email: "",
        password: ""
      }
    },

    methods: {
      login() {
        let params = { session: {email: this.email, password: this.password }};
        axios.post(END_POINT + '/sessions', params).then(response =>{
          console.log(response);
        });
      },

      signup() {
        axios.post(END_POINT + '/signup').then(response => {
          console.log(response);
        });
      }
    }
  };
</script>
