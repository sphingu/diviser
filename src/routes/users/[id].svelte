<script lang="ts">
	import { page } from '$app/stores'
	import { UserAddEdit, PageHeader } from '$lib/components'

	// TODO: get data from database
	const user = {
		id: $page.params.id,
		email: 'test@gmail.com',
		name: 'test name'
	}

	const updateUser = async (values) => {
		// TODO: update user in database
		console.log(values)
	}
</script>

<PageHeader backUrl="/users" title="Edit User" />
<UserAddEdit isAdd={false} {user} onSubmit={updateUser} />
