<script lang="ts">
	import Button from '../Button.svelte'

	export let isSubmitting: boolean = false
</script>

<button type="reset" class="button" disabled={isSubmitting}>
	<span class="icon">
		<i class="ri-restart-line" />
	</span>
	<span>
		<slot>Reset</slot>
	</span>
</button>
