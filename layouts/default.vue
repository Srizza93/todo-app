<template>
  <div class="default-wrapper">
    <NavBar />
    <Nuxt class="nuxt" />
  </div>
</template>
<script>
export default {
  name: 'Default',
};
</script>
<style lang="scss" scoped>
.default-wrapper {
  min-height: 100vh;
  background-color: $primary-color;
}
.nuxt {
  display: $standard-display;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 35px 40px 100px;
}
</style>
