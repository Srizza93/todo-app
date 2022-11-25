export const state = () => ({
  todos: [],
});

export const getters = {
  getTodos(state) {
    return state.todos;
  },
};

export const mutations = {
  addTodo(state, newTodo) {
    state.todos.push(newTodo);
  },
  deleteTodo(state, todoToDel) {
    const index = state.todos.findIndex((todo) => todo === todoToDel);
    state.todos.splice(index, 1);
  },
};
