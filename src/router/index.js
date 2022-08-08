import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import login from "../views/LoginView.vue";
import store from "../store";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
	{
		path: "/dashboard",
		name: "dashboard",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/DashboardView.vue"),
		meta: { requireAuth: true },
	},
	{
		path: "/login",
		name: "login",
		component: login,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.meta.requireAuth && !store.state.token) {
		next({ name: "login" });
	} else {
		next();
	}
});

export default router;
