<template>
  <div class="no-todos">
    <span>No Todos Found</span>
    <slot>Add something!</slot>
  </div>
</template>
<script>
export default {
  name: 'NoTodoComp',
};
</script>
<style lang="scss">
.no-todos {
  display: $standard-display;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: $page-size;
  margin-top: 60px;
  font-size: 18px;
  font-weight: bold;
  color: $primary-red;
}
</style>
