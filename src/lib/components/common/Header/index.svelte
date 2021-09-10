<script lang="ts">
	import Sidebar from './_Sidebar.svelte'
	import Navbar from './_Navbar.svelte'

	export let segment: string

	let open: boolean = false
</script>

<Sidebar bind:open {segment} />
<Navbar bind:open />
