import {createRouter,createWebHashHistory} from 'vue-router'

import Main from "../App.vue"

const routes = [
    {path: "/", name: "Main", component: Main},
    {path: "/game/:id",name: "game",
        component: () =>
        import("../components/Details.vue"),
        props: true
}],

router = createRouter({   //4
    history: createWebHashHistory(),   //5
    routes,
    scrollBehavior(to, from, savedPosition){return{top:0}}
})
export default router;