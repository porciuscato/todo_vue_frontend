<template>
  <div class="todo-input">
    <h2>todo 입력하기</h2>
    <form class="input-group mb-3" @submit.prevent="createTodo">
      <input type="text" class="form-control" v-model="title">
      <button type="submit" class="btn-primary">+</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      title: '',
    }
  },
  methods: {
    createTodo() {
      this.$emit('createTodoEvent', this.title)
      // console.log('입력전송')
      this.title = ''
    }
  },
}
</script>

<style>

</style>