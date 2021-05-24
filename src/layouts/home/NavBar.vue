<template>
    <v-container fluid class="primary">
        <h1 class="text-h5 text-md-h3 text-xl-h1 text-center white--text">{{ title }}</h1>
    </v-container>
</template>

<script>
export default {
    name: 'HomeAppBar',
    data() {
        return {
            title: 'Alcancia'
        }
    },
}
</script>

<style lang="scss">
    
</style>