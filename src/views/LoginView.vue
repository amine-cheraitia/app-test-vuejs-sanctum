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
		};
	},
	methods: {
		async login() {
			const form = { ...this.form };
			axios
				.post("/api/login", form)
				.then((r) => {
					console.log(r.data.token);
					this.$store.commit("setToken", r.data.token);
				})
				.catch((e) => console.log(e));

			await this.form.email;
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
