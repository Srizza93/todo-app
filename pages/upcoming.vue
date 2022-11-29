<template>
  <div>
    <span class="todo-title">Upcoming Todos</span>
    <todos-list v-if="upcomingTodos.length > 0" :todos="upcomingTodos" />
    <no-todo-comp v-else>Add a new upcoming todo!</no-todo-comp>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Upcoming',
  head: {
    title: 'Upcoming',
  },
  computed: {
    ...mapGetters(['upcomingTodos']),
  },
};
</script>
