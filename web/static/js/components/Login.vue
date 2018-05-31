<template>
  <div id="login-form" class="container">
    <input name="" type="text" v-model="credentials.email" placeholder="Email" class="form-control"/>
    <br/>
    <input name="" type="password" v-model="credentials.password" placeholder="Password" class="form-control"/>
    <br/>
    <button class="btn btn-primary form-control" @click="login">Login</button>
  </div>
</template>

<script>
import axios from 'axios';
import { LOGIN, LOGOUT } from '../store/actions.type';

export default {
  name: 'Login',
  data() {
    return {
      credentials: {
        email: 'test@gmail.com',
        password: '123456'
      },
      errors: ''
    }
  },

  methods: {
    login() {
      let params = { email: this.credentials.email, password: this.credentials.password };
      this.$store.dispatch(LOGIN, params).then(() =>
        this.$router.push({ name: '/'})
      );
    },

    signup() {
        axios.post(END_POINT + '/signup').then(response => {
          console.log(response);
        });
      }
    }};
</script>
