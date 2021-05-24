<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: 'TestTru',
    titleTemplate: '%a | John TMarz',
    htmlAttrs: { lang: 'es' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ],
  }
}
</script>

<style lang="scss">

</style>
