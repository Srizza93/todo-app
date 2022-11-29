<template>
  <div class="nav-bar">
    <nuxt-link
      v-for="link in links"
      :key="link.id + '-link'"
      :to="link.to"
      class="nuxt-link"
    >
      <img class="nav-img" :src="getImgUrl(link.imgPath)" :alt="link.info" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      links: [
        {
          id: 1,
          to: '/',
          imgPath: 'home-icon.png',
          info: 'home',
        },
        {
          id: 2,
          to: '/today',
          imgPath: 'today-icon.png',
          info: 'today',
        },
        {
          id: 3,
          to: '/upcoming',
          imgPath: 'upcoming-icon.png',
          info: 'upcoming',
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      const images = require.context('../assets/', false, /\.png$/);
      return images('./' + pic);
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 55px;
  padding: $main-padding;
  border-radius: 0 0 10px 0;
  background-color: $primary-red;
}
.nuxt-link {
  padding: $main-padding;
}
.nuxt-link:hover {
  opacity: 0.7;
}
</style>
