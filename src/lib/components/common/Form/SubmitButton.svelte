<script lang="ts">
	import Button from '../Button.svelte'
	import { isFormModified, isFormValid } from './store'

	export let isSubmitting: boolean = false
</script>

<button
	type="submit"
	class="button is-success"
	disabled={!($isFormValid && $isFormModified)}
	class:is-loading={isSubmitting}
>
	<span class="icon">
		<i class="ri-save-3-line" />
	</span>
	<span>
		<slot>Submit</slot>
	</span>
</button>
