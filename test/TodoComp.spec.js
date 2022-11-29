import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TodoComp from '@/components/TodoComp.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('TodoComp', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({});
  });

  test('Expiration is updated', () => {
    const wrapper = shallowMount(TodoComp, {
      store,
      localVue,
      data() {
        return {
          expiration: '',
        };
      },
      propsData: {
        item: {
          id: 1,
          text: 'test item',
          expDay: '',
          timestamp: '10:05 28-11-2022',
        },
      },
    });

    wrapper.vm.setExpiration({
      target: {
        value: '28-12-2022',
      },
    });

    expect(wrapper.vm.expiration).toEqual(wrapper.props().item.expDay);
  });
});
