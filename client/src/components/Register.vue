<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
        <input type="email" v-model="email" name="email" placeholder="email"/>
        <br>
        <input type="password" v-model="password" name="password" placeholder="password"/>
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn class="cyan" @click="register">Register</v-btn>
      </div>
    </div>
  </v-flex>
</v-layout>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'hello',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      this.error = ''
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  watch: {
    email (value) {
      console.log('email has changed' + value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
