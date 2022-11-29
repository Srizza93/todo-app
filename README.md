# Todo App

"Todo App" is a todo list application.

It is build with "Nuxt" via the automatic installation of the project.
Therefore, it makes use of Vue components, layouts and pages.

The home page shows an inbox page, which the user can use to add new todos or read the full list of todos.
The home contains a component to add the todo, a component to render a list of todos, and the NoTodoComp component.

For the above and for each page, if no todos are found, a NoTodoComp component is rendered.

The "today" page will filter all the todos set for today.
The "upcoming" page will list and sort all the todos in expiration order.

This app makes use of Vuex store to mock the database.
Therefore, in case it needs to be used for production, the code needs to be modified to adapt the backend.

Jest has been used for unit testing.

A javascript module was used to handle the different time requests [module](https://github.com/Srizza93/todo-app/blob/master/modules/time.js).

### The routes are

- "/" => Inbox page, component: Index.vue
- "/today" => Today page, component: Today
- "/upcoming" => Upcoming page, component: Today

### Demo

[Todo App](https://srizza93.github.io/todo-app/)

### Stack:

- HTML/CSS
- Scss
- Javascript
- Vue
- Nuxt
- Jest

### Usage

As per Nuxt, the index.vue page is the main entrance to the app.
The different routes can be found in [Pages Folder](https://github.com/Srizza93/todo-app/tree/master/pages).

### To run the demo:

```
git clone https://github.com/Srizza93/todo-app.git
cd todo-app
npm install
npm run dev
```

For production:

```
npm run build
```

For Testing:

```
npm run test
```

For deplotment:

```
npm run deploy
```

### Principle

This is the main structure for each page, except for "AddTodo" component, which is rendered only in the home page.

```
   <div class="inbox">
    <add-todo @addTodoFromChild="addTodo" />
    <todos-list v-if="getTodos.length > 0" :todos="getTodos" />
    <no-todo-comp v-else>Write something above!</no-todo-comp>
  </div>
```

Getters are used from the store.

```
computed: {
    ...mapGetters(['getTodos']),
  },
```

This is the store configuration and where the magic happens.

```
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
```

### Style

- Simple design developed via single-file components with scoped style, pure CSS and SCSS.
