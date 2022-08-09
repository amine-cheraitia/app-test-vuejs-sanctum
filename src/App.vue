<template>
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link> |
		<router-link to="/dashboard">Dashboard </router-link> |

		<router-link v-if="isAuth" to="" @click="logout">Logout</router-link>
		<router-link v-else to="/login">Login </router-link>
	</nav>
	<router-view />
</template>
<script>
export default {
	methods: {
		logout() {
			this.$store.dispatch("logout");
		},
	},
	created() {
		this.$store.dispatch("tryLogin");
	},
	computed: {
		isAuth() {
			console.log("est il login ? " + this.$store.getters.getIsAuth);
			return this.$store.getters.getIsAuth;
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: white;
}

nav a.router-link-exact-active {
	color: #42b983;
}
body {
	background: #2c3e50;
}
</style>
