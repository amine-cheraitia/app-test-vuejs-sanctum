import { createStore } from "vuex";

export default createStore({
	state: {
		user: null,
		token: null,
		isAuth: false,
	},
	getters: {
		getToken(state) {
			return state.token;
		},
		getIsAuth(state) {
			return state.isAuth;
		},
	},
	mutations: {
		setToken(state, payload) {
			state.token = payload;
		},
	},
	actions: {
		async login(context) {
			/* check */
			/* axios.post("/api/login").then; */
			context;
		},
	},
	modules: {},
});
