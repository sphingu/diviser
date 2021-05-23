<script lang="ts" context="module">
	import { client } from '$lib/graphql'

	export const load: Load = async () => {
		return {
			props: {
				client
			}
		}
	}
</script>

<script lang="ts">
	import { Header, Footer } from '$lib/components'
	import type { Load } from '@sveltejs/kit'
	import { setClient } from 'svelte-apollo'

	export let client

	setClient(client)
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="scss" global>
	@import 'normalize.css';
	@import '../scss/main';
</style>
