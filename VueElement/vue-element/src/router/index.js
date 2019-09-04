import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Carousel from '@/pages/test/Carousel'
import Middle from '@/pages/test/Middle'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        name: 'Login',
        component: Login
    },{
        path: '/home',
        name: 'Home',
        component: Home
    },{
        path: '/test/carousel',
        name: 'Carousel',
        component: Carousel
    },{
        path: '/test/middle',
        name: 'Middle',
        component: Middle
    }]
})