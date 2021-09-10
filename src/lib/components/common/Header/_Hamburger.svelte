<script lang="ts">
	export let open: boolean = false
</script>

<div class="hamburger" class:open on:click={() => (open = !open)}>
	<svg width="32" height="24">
		<line x1="0" y1="2" x2="32" y2="2" />
		<line x1="0" y1="12" x2="24" y2="12" />
		<line x1="0" y1="22" x2="32" y2="22" />
	</svg>
</div>
