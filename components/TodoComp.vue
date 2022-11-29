<template>
  <div class="todo">
    <div class="todo-wrap">
      <span class="todo-wrap_todo-text">{{ item.text }}</span>
      <span class="todo-wrap_todo-timestamp">{{ item.timestamp }}</span>
    </div>
    <div class="todo-wrap">
      <button class="todo-wrap_close-button" @click="deleteTodo">
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="todo-wrap_todo-date">
        <input
          :value="item.expDay"
          class="todo-wrap_todo-date_input"
          type="date"
          :min="todayTime"
          @input="setExpiration"
        />
      </div>
      <span v-if="item.expDay" class="expiration">{{ expirationDate }}</span>
    </div>
  </div>
</template>
<script>
import timeMod from '../modules/time.js';

export default {
  name: 'TodoComp',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    expirationDate() {
      const exp = this.$props.item.expDay.split('-');
      const newDate = new Date(exp[0], exp[1] - 1, exp[2]);
      return (
        exp[2] -
        0 +
        ' - ' +
        newDate.toLocaleString('default', { month: 'long' }) +
        ' - ' +
        exp[0]
      );
    },
    todayTime() {
      return timeMod.year() + '-' + timeMod.month() + '-' + timeMod.day();
    },
  },
  methods: {
    deleteTodo() {
      this.$store.commit('deleteTodo', this.$props.item);
    },
    setExpiration(e) {
      const data = {
        id: this.$props.item.id,
        expDay: e.target.value,
      };
      this.$store.commit('addExpToTodo', data);
    },
  },
};
</script>
<style lang="scss" scoped>
.todo {
  display: $standard-display;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
}
.todo-wrap {
  position: relative;
  display: $standard-display;
  flex-direction: column;
  justify-content: flex-end;
  min-width: 160px;
  min-height: 150px;
  justify-content: space-between;
}
.todo-wrap_todo-timestamp {
  color: $secondary-gray;
  font-size: 14px;
}
.todo-wrap_todo-date {
  width: 64px;
  height: 64px;
  background-image: url(../assets/calendar-icon.png);
  background-repeat: no-repeat;
}
.todo-wrap_todo-date:hover {
  opacity: 0.7;
}
.todo-wrap_todo-date_input {
  position: relative;
  width: 64px;
  height: 64px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  color: transparent;
  background-color: transparent;
  cursor: pointer;
}
.todo-wrap_todo-date_input:focus {
  outline: none;
}
.todo-wrap_todo-date_input::-webkit-calendar-picker-indicator {
  background: transparent;
  bottom: 0;
  color: transparent;
  cursor: pointer;
  height: auto;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 64px;
}

.todo-wrap_todo-text {
  padding-right: 30px;
  margin: 30px 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
}
.expiration {
  font-size: 18px;
}
.todo-wrap_close-button {
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 50%;
  color: white;
  background-color: $primary-red;
  font-size: 22px;
  transition-duration: 0.5s;
  cursor: pointer;
}
.todo-wrap_close-button:hover {
  top: -10px;
}
</style>
