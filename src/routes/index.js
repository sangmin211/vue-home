import Vue from 'vue';
import VueRouter from 'vue-router';
// components
import Todos from '@/components/Todos/Todos.vue';
import Gallery from '@/components/Gallery/Gallery.vue';
import Etc from '@/components/Etc/Etc.vue';

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [{
            path: '/',
            component: Todos
        },
        {
            path: '/Todos',
            component: Todos
        },
        {
            path: '/Gallery',
            component: Gallery
        },
        {
            path: '/Etc',
            component: Etc
        },
    ]
})