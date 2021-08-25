<script lang="ts">
	import Button from '../Button.svelte'
	import { isFormModified, isFormValid } from './store'

	export let isSubmitting: boolean = false
</script>

<Button
	type="submit"
	kind="primary"
	disabled={!($isFormValid && $isFormModified)}
	loading={isSubmitting}
>
	<slot>Submit</slot>
</Button>
