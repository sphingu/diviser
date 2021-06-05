<script lang="ts">
	import { page } from '$app/stores'

	type NavigationItemType = {
		name: string
		path: string
		prefetch: boolean
	}

	const navigationItems: NavigationItemType[] = [
		{
			path: '/',
			name: 'Home',
			prefetch: true
		},
		{
			path: '/about',
			name: 'About',
			prefetch: true
		},
		{
			path: '/users',
			name: 'User List',
			prefetch: false
		}
	]
</script>

<nav>
	<ul>
		{#each navigationItems as item}
			<li class:active={$page.path === item.path}>
				<a href={item.path}>{item.name}</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		background-color: rgba(0, 0, 0, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.1);
		.active {
			a {
				color: white;
			}
		}
	}
</style>
