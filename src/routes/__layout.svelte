<script lang="ts">
	import { setClient } from 'svelte-apollo'

	import { client } from '$lib/graphql'
	import { Header, Footer } from '$lib/components'

	// TODO: should be called only once for whole app
	setClient(client)
</script>

<Header />

<section class="section content-wrapper">
	<div class="container">
		<slot />
	</div>
</section>

<Footer />

<style lang="scss" global>
	@import 'normalize.css';
	@import '../scss/main';
	.content-wrapper {
		flex-grow: 1;
		display: flex;
		padding-top: 0;
		padding-bottom: 0;
		.container {
			flex-grow: 1;
			border-width: 0 1px;
			border-style: dashed;
			padding-top: 3em;
			padding-bottom: 3em;
		}
	}
</style>
