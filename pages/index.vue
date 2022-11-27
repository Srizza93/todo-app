<template>
  <div class="inbox">
    <add-todo @addTodoFromChild="addTodo" />
    <todos-list :todos="todos" />
  </div>
</template>

<script>
import timeMod from '../modules/time.js';

export default {
  name: 'IndexPage',
  head: {
    title: 'Inbox',
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    addTodo(todo) {
      if (!todo) {
        return;
      }
      const newTodo = {
        text: todo,
        timestamp: this.createTodoTimeStamp(),
        expDay: '',
      };
      this.$store.commit('addTodo', newTodo);
    },
    createTodoTimeStamp() {
      return (
        timeMod.hours() +
        ':' +
        timeMod.minutes() +
        ' ' +
        timeMod.day() +
        '-' +
        timeMod.month() +
        '-' +
        timeMod.year()
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.inbox {
  display: $standard-display;
  flex-direction: column;
  align-items: center;
}
</style>
