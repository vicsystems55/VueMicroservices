import Vue from 'vue'
import Router from 'vue-router'

import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Dashboard from './components/Dashboard.vue'


Vue.use(Router)

export default new Router({
    routes:[

            {path: '/', component: Login},
            {path: '/register', component: Register},
            {path: '/dashboard', component: Dashboard}
    ]

});