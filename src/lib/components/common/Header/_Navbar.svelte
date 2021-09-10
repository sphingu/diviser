<script lang="ts">
	import Hamburger from './_Hamburger.svelte'

	export let open: boolean
</script>

<header>
	<Hamburger bind:open />
	<h1>diviser</h1>
</header>
