<template>
    <section class="my-15 metamask_info">
        <p>Metamask: {{ web3.isInjected }}</p>
        <p>Network: {{ web3.networkId }}</p>
        <p>Cuenta: {{ web3.coinbase }}</p>
        <p>Balance: {{ web3.balance }}</p>
    </section>
</template>

<script>
export default {
    name: 'Metamask',
    computed: {
        web3() {
            return this.$store.state.web3
        }
    }
}
</script>

<style lang="scss">
 
</style>