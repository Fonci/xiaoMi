import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import item from '@/views/item'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/index'
    }, {
        path: '/index',
        name: 'index',
        component: index
    }, {
        path: '/item',
        name: 'item',
        component: item
    }]
})