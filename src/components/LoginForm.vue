<template>
  <div>
    <div class="form-group">
      <label for="id">아이디</label>
      <input v-model="credentials.username" type="text" id="id" class="form-control" placeholder="id를 입력해주세요.">
    </div>
    <div class="form-group">
      <label for="password">패스워드</label>
      <input v-model="credentials.password" type="password" id="password" class="form-control" placeholder="패스워드를 입력해주세요.">
    </div>
    <button class="btn-success" @click="login()">로그인</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
 name: "LoginForm",
 data() {
   return {
     credentials: {},
   }
 },
 methods: {
   login() {
    //  console.log(this.credentials)
     axios.post('http://localhost:8000/api-token-auth/', 
     this.credentials).then(res => {
       console.log(res)
     })
   }
 },
}
</script>

<style>

</style>