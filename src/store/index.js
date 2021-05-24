import Vue from 'vue'
import Vuex from 'vuex'
import getWeb3 from '@/util/getWeb3'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    registerWeb3Instance (state, payload) {
      console.log('La mutación en registerWeb3Instance ha sido ejecutada', payload)
      let result = payload
      let web3Copy = state.web3
      web3Copy.coinbase = result.coinbase
      web3Copy.networkId = result.networkId
      web3Copy.balance = parseInt(result.balance, 10)
      web3Copy.isInjected = result.injectedWeb3
      web3Copy.web3Intance = result.web3
      state.web3 = web3Copy
    }
  },
  actions: {
    registerWeb3 ({commit}) {
      console.log('registerWeb Acción en Ejecución')
      getWeb3.then(result => {
        console.log('confirmado el resultado de la mutación registerWeb3Instance')
        commit('Registrar Instancia Web3', result)
      }).catch(e => {
        console.log('Error en la acción registerWeb3', e)
      })
    }
  },
  modules: {
  }
})
