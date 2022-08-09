import axios from "axios";
import { createStore } from "vuex";

export default createStore({
	state: {
		user: {},
		token: null,
	},
	getters: {
		getToken(state) {
			return state.token;
		},
		getUser(state) {
			return state.user;
		},
		getIsAuth(state) {
			return !!state.token;
		},
	},
	mutations: {
		setToken(state, payload) {
			state.token = payload;
			localStorage.setItem("token", state.token);
		},
		setUser(state, payload) {
			state.user = payload;
			localStorage.setItem("user", state.user);
		},
		logout(state) {
			state.token = null;
			state.user = null;
			localStorage.removeItem("token");
			localStorage.removeItem("user");
		},
	},
	actions: {
		async login(context, payload) {
			/* check */
			/* axios.post("/api/login").then; */
			payload;
			context;
		},
		async logout({ commit, state }) {
			const data = { ...state.user };
			console.log(data);
			await axios
				.post("/api/logout", data)
				.then((r) => console.log(r.data))
				.catch((r) => console.log(r));
			commit("logout");
		},
		tryLogin(context) {
			const token = localStorage.getItem("token");
			const user = localStorage.getItem("user");
			console.log(token);
			console.log(user);
			if (token && user) {
				context.commit("setToken", token);
				context.commit("setUser", user);
			}
		},
	},
	modules: {},
});
