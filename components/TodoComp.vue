<template>
  <div>
    <span>{{ item.text }}</span>
    <span>{{ item.timestamp }}</span>
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
};
</script>
<style lang=""></style>
