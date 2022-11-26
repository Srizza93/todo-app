export const state = () => ({
  todos: [],
});

export const getters = {
  getTodos(state) {
    return state.todos;
  },
  todaysTodos(state) {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const today =
      year +
      '-' +
      String(month).padStart(2, '0') +
      '-' +
      String(day).padStart(2, '0');
    return state.todos.filter((item) => item.expDay === today);
  },
};

export const mutations = {
  addTodo(state, newTodo) {
    state.todos.push(newTodo);
  },
  addExpToTodo(state, data) {
    state.todos = state.todos.map((item) => {
      if (item === data[1]) {
        item = {
          text: data[1].text,
          timestamp: data[1].timestamp,
          expDay: data[0],
        };
        return item;
      }
      return item;
    });
  },
  deleteTodo(state, todoToDel) {
    const index = state.todos.findIndex((todo) => todo === todoToDel);
    state.todos.splice(index, 1);
  },
};
