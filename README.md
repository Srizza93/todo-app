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

To run the demo:

```
git clone https://github.com/Srizza93/todo-app.git
npm install
npm run dev
```

For production:

```
npm run build
```

### Principle

This is the API request

```
   async fetchData() {
      try {
        const url = `https://api.weatherapi.com/v1/current.json?key=9090010261984f75bd8163005222011&q=${this.city}&aqi=no`;
        const response = await fetch(url)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else if (response.status === 400) {
              this.redirectToNotFound();
              return Promise.reject("Selected city is incorrect");
            } else {
              this.redirectToNotFound();
              return Promise.reject("Something went wrong: " + response.status);
            }
          })
          .then((data) => (this.weather = data));
      } catch (error) {
        console.log("Can't get data from API: " + error);
        this.redirectToNotFound();
      }
    },
```

And this is the input used for the request

```
<div class="input-container">
      <input
        class="input-container_input"
        type="text"
        placeholder="Add your city!"
        v-model="city"
        @keyup.enter="citySelected"
      />
      <div class="input-container_button-wrap">
        <router-link
          class="input-container_button-wrap_button"
          :to="{ name: 'weather', params: { city: city } }"
          >Go!</router-link
        >
      </div>
    </div>
```

- When the user enters the city's name, on enter key up or router-link click, the router will bring the user to the weather page.
- In the weather page the user will see the results from API, which are location info and weather conditions current info.

### Configuration

```
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

```

### Style

- Minimalist design developed via single-file components with scoped style, pure CSS and SCSS.
