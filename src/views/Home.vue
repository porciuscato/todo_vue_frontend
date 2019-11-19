<template>
  <div class="home">
    <h1>Todo w/ Django & Vue</h1>
    <TodoInput />
    <TodoList :todos="todos"/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import TodoInput from '@/components/TodoInput'

export default {
  name: 'home',
  components: {
    TodoList: TodoList,
    TodoInput,
  },
  data() {
    return {
      todos: [
        {id:1, title:'Django DRF로 로그인 API 구현'},
        {id:2, title:'JWT 활용한 세션 구현'},
        {id:3, title:'Todo 관련 API 구현',},
        {id:4, title:'Vuex 활용한 Flux 아키텍쳐 적용',},
      ],
    }
  },
  
}
</script>

<style>

</style>