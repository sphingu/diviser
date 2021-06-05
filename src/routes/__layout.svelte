<script lang="ts">
	import { setClient } from 'svelte-apollo'

	import { client } from '$lib/graphql'
	import { Header, Footer } from '$lib/components'

	// TODO: should be called only once for whole app
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
