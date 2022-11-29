import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import inbox from '@/pages/index.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Inbox', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        todos: [],
      },
      mutations: {
        addTodo(state, newTodo) {
          state.todos.push(newTodo);
        },
      },
      getters: {
        getTodos(state) {
          return state.todos;
        },
      },
    });
  });

  test('Todo is added successfully', () => {
    const wrapper = mount(inbox, {
      store,
      localVue,
    });

    store.commit('addTodo', {
      id: 1,
      text: 'Hello World',
      timestamp: '17:02 28-11-2022',
      expDay: '28-11-2022',
    });

    expect(store.state.todos.length).toEqual(1);
  });
});
