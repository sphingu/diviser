<script lang="ts">
	import Button from '../Button.svelte'
	import { isFormModified, isFormValid } from './store'

	export let isSubmitting: boolean
	export let submitText = 'Submit'
	export let resetText = 'Reset'
</script>

<Button
	type="submit"
	kind="primary"
	disabled={!($isFormValid && $isFormModified)}
	loading={isSubmitting}>{submitText}</Button
>
<Button type="reset" kind="secondary" disabled={isSubmitting}>{resetText}</Button>
