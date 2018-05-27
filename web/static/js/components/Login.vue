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
import { AuthService } from '../services/api.service.js';

export default {
  name: 'Login',
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      errors: ''
    }
  },
  
  methods: {
    login() {
      let params = { session: {email: this.credentials.email, password: this.credentials.password }};
      AuthService.post(params).then(response => {
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
