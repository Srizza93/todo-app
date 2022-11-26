<template>
  <todos-list :todos="todaysTodos" />
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
