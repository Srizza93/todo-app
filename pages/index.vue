<template>
  <div class="inbox">
    <add-todo @addTodoFromChild="addTodo" />
    <todos-list :todos="todos" />
  </div>
</template>

<script>
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
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const hour = date.getHours();
      const minute = date.getMinutes();
      return (
        this.formatTime(hour) +
        ':' +
        this.formatTime(minute) +
        ' ' +
        this.formatTime(day) +
        '-' +
        this.formatTime(month) +
        '-' +
        year
      );
    },
    formatTime(time) {
      return String(time).padStart(2, '0');
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
