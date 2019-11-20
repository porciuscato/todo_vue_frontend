<template>
  <div>
    <div class="form-group">
      <label for="id">아이디</label>
      <input v-model="credentials.username" type="text" id="id" class="form-control" placeholder="id를 입력해주세요.">
    </div>
    <div class="form-group">
      <label for="password">패스워드</label>
      <input @keyup.enter="login()" v-model="credentials.password" type="password" id="password" class="form-control" placeholder="패스워드를 입력해주세요.">
    </div>
    <button class="btn-success" @click="login()">로그인</button>
  </div>
</template>

<script>
import axios from 'axios'
// export default router를 해서
import router from '@/router'

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
      // console.log(res.data.token)
      this.$session.start()
      this.$session.set('jwt', res.data.token)
      // this.$router.push('/')
      // root url로 간다
      router.push('/')
     })
   }
 },
}
</script>

<style>

</style>