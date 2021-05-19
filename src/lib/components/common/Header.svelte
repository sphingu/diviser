<script lang="ts">
	import { page } from '$app/stores'
</script>

<nav>
	<ul>
		<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
		<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
		<li><a href="/users">User List</a></li>
	</ul>
</nav>
