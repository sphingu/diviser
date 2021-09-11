<script lang="ts">
	import { page } from '$app/stores'
	let isMenuActive: boolean = false

	const toggleMenuActive = () => {
		isMenuActive = !isMenuActive
	}
</script>

<section class="section">
	<div class="container">
		<nav class="navbar">
			<div class="navbar-brand">
				<div class="navbar-item p-0 logo">diviser</div>
				<div class="navbar-burger" on:click={toggleMenuActive}>
					<span />
					<span />
					<span />
				</div>
			</div>

			<div class="navbar-menu" class:is-active={isMenuActive}>
				<div class="navbar-start">
					<a
						class="navbar-item"
						href="/"
						class:is-active={$page.path === '/'}
						on:click={toggleMenuActive}
					>
						<span> Home </span>
					</a>
					<a
						class="navbar-item"
						href="/about"
						class:is-active={$page.path === '/about'}
						on:click={toggleMenuActive}
					>
						<span> About </span>
					</a>
					<a
						class="navbar-item"
						href="/users"
						class:is-active={$page.path === '/users'}
						on:click={toggleMenuActive}
					>
						<span> Users </span>
					</a>
				</div>
			</div>

			<!-- <div class="navbar-end">
				<div class="navbar-item">
					<div class="buttons">
						<button class="button">Log in</button>
					</div>
				</div>
			</div> -->
		</nav>
	</div>
</section>

<style lang="scss">
	section {
		padding-bottom: 0;
		padding-top: 0;
		border-bottom: 1px dashed;
	}
	.navbar {
		background-color: transparent;
		border-width: 0 1px 0 1px;
		border-style: dashed;
		.navbar-burger {
			height: auto;
		}
		.navbar-menu {
			.navbar-item:hover {
				background-color: rgba(0, 0, 0, 0.1);
			}
			.navbar-item.is-active {
				background-color: black;
				color: white;
				span {
					border-bottom: 2px solid;
				}
			}
		}
	}
	.logo {
		font-size: 2.5em;
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
