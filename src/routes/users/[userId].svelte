<script lang="ts">
	import { page } from '$app/stores'
	import { UserAddEdit } from '$lib/components/User'

	// TODO: get data from database
	const user = {
		id: $page.params.userId,
		email: 'test@gmail.com',
		name: 'test name'
	}

	const updateUser = async (values) => {
		// TODO: update user in database
		console.log(values)
	}
</script>

<UserAddEdit isAdd={false} {user} onSubmit={updateUser} />
