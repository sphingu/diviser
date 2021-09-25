<script lang="ts">
	import { Form, Field, FormSubmitButton, FormResetButton } from '$lib/components'
	import { getFormFields } from '$lib/helpers/user'

	import type { IUser } from '$lib/helpers/user/types'
	import type { FieldType } from '$lib/types'

	export let isAdd: boolean
	export let user: Partial<IUser> = {}
	export let onSubmit: (value: Record<string, unknown>) => Promise<void>

	let fields: FieldType[] = getFormFields(user)

	$: submitText = isAdd ? 'Create' : 'Update'
</script>

<Form initialFields={fields} {onSubmit} let:isSubmitting>
	<Field name="name" />
	<Field name="email" />

	<div class="field is-grouped">
		<p class="control">
			<FormSubmitButton {isSubmitting}>{submitText}</FormSubmitButton>
		</p>
		<p class="control">
			<FormResetButton {isSubmitting} />
		</p>
	</div>
</Form>
