import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Carousel from '@/pages/Carousel'

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
        path: '/carousel',
        name: 'Carousel',
        component: Carousel
    }]
})