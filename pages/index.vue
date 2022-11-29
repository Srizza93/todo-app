<template>
  <div class="inbox">
    <add-todo @addTodoFromChild="addTodo" />
    <todos-list v-if="getTodos.length > 0" :todos="getTodos" />
    <no-todo-comp v-else>Write something above!</no-todo-comp>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AddTodo from '@/components/AddTodo.vue';
import TodosList from '@/components/TodosList.vue';
import NoTodoComp from '@/components/NoTodoComp.vue';
import timeMod from '../modules/time.js';

export default {
  name: 'IndexPage',
  components: { AddTodo, TodosList, NoTodoComp },
  head: {
    title: 'Inbox',
  },
  computed: {
    ...mapGetters(['getTodos']),
  },
  methods: {
    addTodo(todo) {
      if (!todo) {
        return;
      }
      const newTodo = {
        id: this.getTodos.length + 1,
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
