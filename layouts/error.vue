<template>
  <div class="error">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink class="error-link" to="/">Go back to the Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'error', // you can set a custom layout for the error page
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: $primary-red;
}
.error-link {
  color: $primary-red;
  text-decoration: none;
}
.error-link:hover {
  text-decoration: underline;
}
</style>
