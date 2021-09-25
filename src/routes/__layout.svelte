<script lang="ts">
	import { setClient } from 'svelte-apollo'

	import { client } from '$lib/graphql'
	import { Header, Footer, Breadcrumb } from '$lib/components'

	// TODO: should be called only once for whole app
	setClient(client)
</script>

<Header />
<div id="main">
	<!-- <Breadcrumb /> -->

	<section class="section pb-0 pt-0">
		<div class="container">
			<div class="box">
				<slot />
			</div>
		</div>
	</section>
</div>

<Footer />

<style lang="scss" global>
	@import 'normalize.css';
	@import '../scss/main';
	#main {
		flex-grow: 1;
	}
	.box {
		margin: 1em 0;
		box-shadow: 0 10px 15px 0 rgb(90 116 148 / 40%);
	}
</style>
