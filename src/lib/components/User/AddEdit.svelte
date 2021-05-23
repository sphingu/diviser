<script lang="ts">
	import { goto } from '$app/navigation'

	import { Form, Field, FormButtons, Button } from '$lib/components'
	import type { FieldType } from '$lib/types'

	export let isAdd: boolean
	export let fields: FieldType[]

	export let onSubmit: (value: Record<string, unknown>) => Promise<void>

	$: title = isAdd ? 'New User' : 'Edit User'
	$: submitText = isAdd ? 'Create' : 'Update'
</script>

<div class="add-edit-user-wrapper">
	<h1>{title}</h1>
	<Button kind="primary" on:click={() => goto('/users')}>Back</Button>

	<Form initialFields={fields} {onSubmit} let:isSubmitting>
		<Field name="name" />
		<Field name="email" />

		<FormButtons {submitText} {isSubmitting} />
	</Form>
</div>

<style lang="scss">
	.add-edit-user-wrapper {
		margin: 1em;

		h1 {
			margin: 0 0.5em;
		}
	}
</style>
