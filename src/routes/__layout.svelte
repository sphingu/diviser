<script lang="ts">
	import Header from '$lib/components/common/Header.svelte';
	import Footer from '$lib/components/common/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="scss" global>
	@import '../scss/main';
</style>
