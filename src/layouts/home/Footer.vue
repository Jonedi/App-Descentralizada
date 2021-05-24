<template>
    <v-footer>
        <v-card-text class="py-2 white--text text-center primary--text my-7">
            Copyrigth &copy; {{ new Date().getFullYear() }} .
            <span> Powered by 
                <a
                href="https://bit.ly/portafolio-john" target="_blank"
                class="text-decoration-none t-decor-footer text-lg-subtitle-1 text-md-body-1 primary--text">
                   Jon Tmarz
                </a>
            </span>
        </v-card-text>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss">

</style>