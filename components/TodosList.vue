<template>
  <div v-if="todos.length > 0" class="todos-list">
    <ul class="list-ul">
      <li
        v-for="(todo, index) in todos"
        :key="index + 'todo'"
        class="todos-list_todo"
      >
        <todo-comp :item="todo" />
      </li>
    </ul>
  </div>
</template>

<script>
import TodoComp from './TodoComp.vue';

export default {
  name: 'TodosList',
  components: { TodoComp },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.todos-list {
  display: $standard-display;
  flex-direction: column;
  width: 100%;
  max-width: $page-size;
}
.list-ul {
  display: $standard-display;
  flex-direction: column-reverse;
  padding: 30px;
  margin: 60px 0;
  border: 1px solid $primary-red;
  border-radius: 15px;
  background-color: $white-bone;
  list-style-type: none;
}
.todos-list_todo {
  border-bottom: 1px solid $primary-red;
}
.todos-list_todo:first-child {
  border: none;
}
</style>
