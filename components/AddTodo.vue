<template>
  <div class="add-todo">
    <input
      v-model="todo"
      type="text"
      class="text-box"
      placeholder="Write something!"
      @keyup.enter="sendTodo"
    />
    <button class="submit-but" @click="sendTodo">Add</button>
  </div>
</template>
<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    sendTodo() {
      this.$emit('addTodoFromChild', this.todo);
      this.todo = '';
    },
  },
};
</script>
<style lang="scss" scoped>
.add-todo {
  display: $standard-display;
  flex-direction: row;
  width: 100%;
}
.text-box {
  width: 100%;
  height: 50px;
  padding: 5px 15px;
  border: 1px solid $primary-red;
  border-radius: 10px 0 0 10px;
  background-color: $white-bone;
  font-size: 22px;
}
.text-box:focus {
  outline: none;
}
.submit-but {
  width: 10%;
  min-width: 50px;
  border: none;
  border-radius: 0 10px 10px 0;
  color: white;
  background-color: $primary-red;
  font-size: 18px;
  cursor: pointer;
}
.submit-but:hover {
  opacity: 0.8;
}
</style>
