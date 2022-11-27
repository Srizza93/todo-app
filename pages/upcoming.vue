<template>
  <div>
    <span class="todo-title">Upcoming Todos</span>
    <todos-list :todos="upcomingTodos" />
  </div>
</template>

<script>
export default {
  name: 'Upcoming',
  head: {
    title: 'Upcoming',
  },
  computed: {
    upcomingTodos() {
      return this.$store.getters.upcomingTodos;
    },
  },
};
</script>
