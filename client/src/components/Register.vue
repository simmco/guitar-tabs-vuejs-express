<template>
  <div>
    <h1>Register</h1>
    <input type="email" v-model="email" name="email" placeholder="email"/>
    <br>
    <input type="password" v-model="password" name="password" placeholder="password"/>
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'hello',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const resposne = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(resposne.data)
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

</style>
