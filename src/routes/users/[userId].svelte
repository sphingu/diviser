<script lang="ts">
	import { page } from '$app/stores'
	import { UserAddEdit } from '$lib/components/User'
	import { getFormFields } from '$lib/helpers/user'

	const fields = getFormFields({
		id: $page.params.userId,
		email: 'test@gmail.com',
		name: 'test name'
	})

	const handleSubmit = async (values) => {
		console.log(values)
	}
</script>

<h1>/Users/userId</h1>

My User Id:<b>{$page.params.userId}</b>
<UserAddEdit isAdd={false} {fields} onSubmit={handleSubmit} />
