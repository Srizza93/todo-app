import Vue from 'vue';
import timeMod from '../modules/time.js';

const state = () => ({
  todos: [],
});

const getters = {
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

const mutations = {
  addTodo(state, newTodo) {
    state.todos.push(newTodo);
  },

  deleteTodo(state, todo) {
    const index = state.todos.findIndex((item) => item === todo);
    state.todos.splice(index, 1);
  },

  addExpToTodo(state, data) {
    Vue.set(state.todos[data.id - 1], 'expDay', data.expDay);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
