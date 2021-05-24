import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@fortawesome/fontawesome-free/css/all.css'
import { camelCase, upperFirst } from 'lodash'
import VuePageTransition from 'vue-page-transition'

Vue.use(VuePageTransition);

Vue.config.productionTip = false

//Automatic components
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

// Instancia Vue
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
