import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import item from '@/views/item'
// import demo from '@/views/demo'
// import demo2 from '@/views/demo2'
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
    }, ]
})