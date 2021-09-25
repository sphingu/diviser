<script lang="ts">
	export let path: string
	let className: string = ''
	export { className as class }
</script>

<a href={path} class={`button is-link ${className}`}>
	{#if $$slots.icon}
		<span class="icon">
			<slot name="icon" />
		</span>
	{/if}
	<slot />
</a>
