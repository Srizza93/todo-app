<template>
  <div class="todo">
    <div class="todo-wrap">
      <span class="todo-text">{{ item.text }}</span>
      <span class="todo-timestamp">{{ item.timestamp }}</span>
    </div>
    <div class="todo-wrap">
      <div class="todo-date">
        <input v-model="expiration" class="todo-date_input" type="date" />
      </div>
      <span v-if="expiration" class="expiration">{{ expirationDate }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TodoComp',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      expiration: '',
    };
  },
  computed: {
    expirationDate() {
      const exp = this.expiration.split('-');
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
  },
  watch: {
    expiration(val) {
      const data = [val, this.$props.item];
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
  display: $standard-display;
  flex-direction: column;
  justify-content: flex-end;
  min-width: 160px;
  min-height: 150px;
  justify-content: space-between;
}
.todo-timestamp {
  color: $secondary-gray;
  font-size: 14px;
}
.todo-date {
  width: 64px;
  height: 64px;
  background-image: url(../assets/calendar-icon.png);
  background-repeat: no-repeat;
}
.todo-date:hover {
  opacity: 0.7;
}
.todo-date_input {
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
.todo-date_input:focus {
  outline: none;
}
.todo-date_input::-webkit-calendar-picker-indicator {
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

.todo-text {
  padding-right: 30px;
  margin: 30px 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
}
.expiration {
  font-size: 18px;
}
</style>
