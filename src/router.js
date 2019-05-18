import Vue from 'vue'
import Router from 'vue-router'
import startpage from './views/startpage.vue'
import halfquater from './views/halfquater.vue'
import quater from './views/quater.vue'
import final from './views/final.vue'
import battle from './views/battle.vue'
import showpic from './views/showpic.vue'
import statistics from './views/statistics.vue'
import wrong from './views/wrong.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'startpage',
            component: startpage,
        },
        {
            path: '/groupstage',
            name: 'groupstage',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/groupstage.vue')
        },
        {
            path: '/halfquater',
            name: 'halfquater',
            component: halfquater,
        },
        {
            path: '/quater',
            name: 'quater',
            component: quater,
        },
        {
            path: '/final',
            name: 'final',
            component: final,
        },
        {
            path: '/battle',
            name: 'battle',
            component: battle,
        },
        {
            path: '/showpic',
            name: 'showpic',
            component: showpic,
        },
        {
            path: '/statistics',
            name: 'statistics',
            component: statistics,
        }, {
            path: '/wrongzy',
            name: 'wrong',
            component: wrong,
        },
    ]
})