import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import base from './base'

import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(base)
Vue.use(VueLazyLoad)

//跳转到页面头部
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
})
new Vue({
    router,
    store,
    data() {
        return {
            halfquaterls: [],
            quaterls: [],
            finalls: [],
            battlels: [],
            champion: -1,
            finalword: '',
            nick: '',
        }
    },
    render: h => h(App)
}).$mount('#app')