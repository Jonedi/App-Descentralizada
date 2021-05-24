<template>
  <v-app>
      <home-app-bar />
      <home-view />
      <home-footer />
  </v-app>
</template>

<script>
export default {
  name: 'HomeLayout',

  components: {
    HomeAppBar: () => import('@/layouts/home/NavBar'),
    HomeFooter: () => import('@/layouts/home/Footer'),
    HomeView: () => import('@/layouts/home/View')
  },
}
</script>

<style lang="scss">
    
</style>