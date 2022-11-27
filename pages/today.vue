<template>
  <div class="today">
    <span class="todo-title">Today's Todos</span>
    <todos-list :todos="todaysTodos" />
  </div>
</template>

<script>
export default {
  name: 'Today',
  head: {
    title: 'Today',
  },
  computed: {
    todaysTodos() {
      return this.$store.getters.todaysTodos;
    },
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
