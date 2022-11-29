import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AddTodo from '@/components/AddTodo.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('AddTodo', () => {
  let store;
  let actions;

  beforeEach(() => {
    actions = {
      actionEnter: jest.fn(),
    };

    store = new Vuex.Store({
      actions,
    });
  });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(AddTodo);
    expect(wrapper.vm).toBeTruthy();
  });

  test("Input gets blank after user's action", () => {
    const wrapper = shallowMount(AddTodo);

    wrapper.setData({ todo: 'Test Jest' });
    wrapper.vm.sendTodo();
    expect(wrapper.vm.todo).toEqual('');
  });
});
