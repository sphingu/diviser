<script lang="ts">
	import { setClient } from 'svelte-apollo'

	import { client } from '$lib/graphql'
	import { Header, Footer } from '$lib/components'

	// TODO: should be called only once for whole app
	setClient(client)
</script>

<Header />
<section class="section">
	<div class="container">
		<slot />
	</div>
</section>

<style lang="scss" global>
	@import 'normalize.css';
	@import '../scss/main';
</style>
