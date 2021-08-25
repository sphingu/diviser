<script lang="ts">
	import Button from '../Button.svelte'

	export let isSubmitting: boolean = false
</script>

<Button type="reset" kind="secondary" disabled={isSubmitting}>
	<slot>Reset</slot>
</Button>
