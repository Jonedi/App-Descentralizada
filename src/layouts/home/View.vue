<template>
    <vue-page-transition name="overlay-up-full">
        <v-main>
            <router-view />
        </v-main>
    </vue-page-transition>
</template>

<script>

export default {
    name: 'BaseView',
}
</script>