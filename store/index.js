import timeMod from '../modules/time.js';

export const state = () => ({
  todos: [],
});

export const getters = {
  getTodos(state) {
    return state.todos;
  },
  todaysTodos(state) {
    const today = timeMod.year() + '-' + timeMod.month() + '-' + timeMod.day();
    return state.todos.filter((item) => item.expDay === today);
  },
  upcomingTodos(state) {
    return [...state.todos].sort((a, b) => {
      return new Date(b.expDay) - new Date(a.expDay);
    });
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
  deleteTodo(state, todo) {
    const index = state.todos.findIndex((item) => item === todo);
    state.todos.splice(index, 1);
  },
};
