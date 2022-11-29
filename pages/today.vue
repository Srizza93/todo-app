<template>
  <div class="today">
    <span class="todo-title">Today's Todos</span>
    <todos-list v-if="todaysTodos.length > 0" :todos="todaysTodos" />
    <no-todo-comp v-else>Add a new todo for today</no-todo-comp>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Today',
  head: {
    title: 'Today',
  },
  computed: {
    ...mapGetters(['todaysTodos']),
  },
};
</script>

<style lang="scss" scoped>
.today {
  display: $standard-display;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
