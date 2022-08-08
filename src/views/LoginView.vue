<template>
	<form @submit.prevent="login">
		<label for="email">Username</label>
		<input type="email" name="email" id="email" v-model="form.email" />
		<label for="password">Password</label>
		<input
			type="password"
			name="password"
			id="password"
			v-model="form.password"
		/>
		<button type="submit">Se connecter</button>
	</form>
	{{ token }}
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			form: {
				email: "",
				password: "",
			},
			a: "Authorization",
		};
	},
	methods: {
		async login() {
			const form = { ...this.form };
			let login = false;
			await axios
				.post("/api/login", form)
				.then((r) => {
					console.log(r.data.token);
					this.$store.commit("setToken", r.data.token);
					login = true;
				})
				.catch((e) => console.log(e));

			if (login) {
				const config = {
					headers: {
						Authorization: `Bearer ${this.$store.getters.getToken}`,
					},
				};
				axios
					.get("/api/user", config)
					.then((r) => {
						console.log(r.data);
					})
					.catch((r) => console.log(r));
			}
		},
	},
	computed: {
		token() {
			return this.$store.getters.getToken;
		},
	},
	props: {},
};
</script>

<style scoped></style>
