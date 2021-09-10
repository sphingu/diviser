<script lang="ts">
	import { fly } from 'svelte/transition'
	export let open: boolean = false
	export let segment: string
</script>

{#if open}
	<nav transition:fly={{ x: -300, opacity: 1 }} class="dark-alpha-box">
		<div>
			<a
				class:active={!segment}
				aria-current={segment === undefined ? 'page' : undefined}
				href="."
				on:click={() => (open = !open)}
			>
				home
			</a>
			<a
				class:active={segment === 'about'}
				rel="prefetch"
				aria-current={segment === 'about' ? 'page' : undefined}
				href="about"
				on:click={() => (open = !open)}
			>
				about
			</a>
			<a
				class:active={segment === 'contact'}
				aria-current={segment === 'contact' ? 'page' : undefined}
				href="contact"
				on:click={() => (open = !open)}
			>
				contact
			</a>
		</div>
	</nav>
{/if}
