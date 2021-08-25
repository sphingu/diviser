<script lang="ts">
	import { goto } from '$app/navigation'

	import { Form, Field, FormSubmitButton, FormResetButton, Button } from '$lib/components'
	import { getFormFields } from '$lib/helpers/user'

	import type { IUser } from '$lib/helpers/user/types'
	import type { FieldType } from '$lib/types'

	export let isAdd: boolean
	export let user: Partial<IUser> = {}
	export let onSubmit: (value: Record<string, unknown>) => Promise<void>

	let fields: FieldType[] = getFormFields(user)

	$: title = isAdd ? 'New User' : 'Edit User'
	$: submitText = isAdd ? 'Create' : 'Update'
</script>

<div class="add-edit-user-wrapper">
	<h1>{title}</h1>
	<Button kind="primary" on:click={() => goto('/users')}>Back</Button>

	<Form initialFields={fields} {onSubmit} let:isSubmitting>
		<Field name="name" />
		<Field name="email" />

		<FormSubmitButton {isSubmitting}>{submitText}</FormSubmitButton>

		<FormResetButton {isSubmitting} />
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
