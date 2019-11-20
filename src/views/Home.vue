<template>
  <div class="home">
    <h1>Todo w/ Django & Vue</h1>
    <TodoInput @createTodoEvent="createTodo"/>
    <TodoList :todos="todos"/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import TodoInput from '@/components/TodoInput'
import router from '../router'
// from 패키지 이름
import jwtDecode from 'jwt-decode'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    TodoList: TodoList,
    TodoInput,
  },
  data() {
    return {
      todos: [],
    }
  },
  methods: {
    loggedIn() {
      this.$session.start()
      if (!this.$session.has('jwt')) {
        router.push('/login')
      }
    },
    // axios -> api/v1/users/현재 접속한 user의 ID/
    getTodos() {
      // 토큰을 가져오고
      const token = this.$session.get('jwt')
      // decode
      const user_id = jwtDecode(token).user_id
      const options = {
        headers: {
          Authorization: 'JWT ' + token
        }
      }
      axios.get(`http://localhost:8000/api/v1/user/${user_id}/`, options)
      .then(res => {
        // console.log(res.data.todo_set)
        this.todos = res.data.todo_set
      })
      .catch(() => {
        console.log("it doesn't work")
      })
    },
    createTodo(title) {
      const token = this.$session.get('jwt')
      const user_id = jwtDecode(token).user_id
      const options = {
        headers: {
          Authorization: 'JWT ' + token
        }
      }
      const data = new FormData()
      // data.append(키-input name, 밸류-input value)
      data.append('user', user_id)
      data.append('title', title)
      axios.post(`http://localhost:8000/api/v1/todos/`, data, options)
      .then(res => {
        console.log(res)
        this.todos.push(res.data)
      })
    }
  },

  // 8개의 life cycle hook
  mounted() {
    // 로그인이 되면 바로 실행
    this.loggedIn()
    this.getTodos()
  },
}
</script>

<style>

</style>