<script lang="ts">
	let isMenuActive: boolean = false

	const toggleMenuActive = () => {
		isMenuActive = !isMenuActive
	}
</script>

<nav class="navbar is-transparent">
	<div class="navbar-brand">
		<div class="navbar-item p-0 logo">diviser</div>
		<div class="navbar-burger" on:click={toggleMenuActive}>
			<span />
			<span />
			<span />
		</div>
	</div>

	<div class="navbar-menu {isMenuActive && 'is-active'}">
		<div class="navbar-start">
			<a class="navbar-item" href="/" on:click={toggleMenuActive}> Home </a>
			<a class="navbar-item" href="/about" on:click={toggleMenuActive}> About </a>
			<a class="navbar-item" href="/users" on:click={toggleMenuActive}> Users </a>
		</div>
	</div>
</nav>

<style>
	.navbar {
		background-color: rgba(0, 0, 0, 0.2);
		color: white;
	}
	.navbar-menu {
		background-color: transparent;
	}
	.logo {
		font-size: 2em;
		padding: 0;
		margin: 0 0.5em;
		background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		background-size: 400% 400%;
		animation: gradient 10s ease infinite;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
